---
title: 'Deploying Rails on Windows 2008 with IIS7 and mongrel'
date: 2009-08-20 00:00:00 
tags: development deployment rails iis7 w2k8

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
Developing applications is all about resources.  Do you have the developer tools, the frameworks, the databases, the web servers, the app servers, etc, etc, etc.  My entire career, I've been the kind of person who takes the best tool for the job that's available, but that's relatively painless to integrate into the current environment.  For example, when I'm doing ASP.Net web development I use Subversion rather than VSS 'cause its a vastly superior tool (as long as you have TortoiseSVN).   But that only works in a corporate infrastructure if its easy to implement.  If your organization has invested as little as $100 in a given infrastructure (say, windows 2008 servers and SQL server), its pretty tough to get someone to say "Ya, no problem, we'll just dump that and put in a *nix box so you can deploy RoR."  In part that's because the original decision was probably made based on the skillsets in house, so a change means not only a new person with a foreign skillset, but obsoleting an existing skillset and the person that goes with it.

So what?  Well, for me its particular rewarding when I can take a new paradigm and integrate it into an existing environment, especially when the prevailing perception is of those two paradigms being anathema to each other.  This brings us to my latest win: rail on windows!  For many reasons I decided to pursue a [project ](http://feedproxy.google.com/~r/Quizine/~3/1c9EkQKHhzE/)in Rails.  Its been a fun project from a development perspective, but when I got to deployment, I had a bit of a problem.  For various reasons, the only server I had to deploy on is a W2K8 server running IIS7 and SQL Server 2005 as a DB.  A little different than a default mongrel/mysql/sqlite3 deployment.  But in the spirit of adventure (read insanity), I figured a transparent deployment must be possible.  And I'm happy to report that it is, and their credit, Microsoft has made it much easier in IIS7 than it ever has been before.

<a name="more"></a>First, let me point out the core resource I started with when I began the journey of deploying my rails app.  Brian Hogan developed a number of articles that walk you through the gotcha's of rails on windows which have been gathered prettily at the rails [blog](http://weblog.rubyonrails.org/2006/5/11/deploying-rails-on-windows-servers).  Now, for reasons even more obscure, on this server of mine, I also happen to have a version of Apache running on an alternate port, so my initial attempt was to implement the "Integrate Rails into an Existing IIS Web infrastructure using Apache and FastCGI" method.  To make a long story short, there was an issue with fastcgi, my version of apache and my version of ruby.  That one died on the vine.  So then I tried the "Serving Multiple Rails Applications on Windows with Apache and Mongrel" method.  I got that one working to some extent, but need for Helicon's ISAPI_rewrite pointed at apache as a proxy annoyed me.  Especially given that as apache was on a non-standard port too, the proxying benefit of Apache was essentially lost.  So I thought I would pursue "Integrate Rails into an Existing IIS Web infrastructure using Mongrel" and take Apache out of the picture, but the need for ISAPI_rewrite was still there. Ick.

Enter IIS7.  I stumbled across a [brief article](http://www.hanselman.com/blog/NewModulesForIIS7ApplicationRequestRoutingProxyAndLoadBalancingModule.aspx) from Scott Hansleman about the new tools available to IIS7 and the lightbulb came on.  Use IIS7 to proxy mongrel!  With AAR and URL rewrite, I managed to string together a completely url-masked proxy to mongrel for a "subfolder" in IIS.  This means that IIS can serve all its .Net apps with abandon, and proxy all requests to "/rails" to mongrel.  Beauty.  So here's the nitty gritty on what I did.

1.  Install RoR on the server:

    *   One-click Ruby installer
    *   Install rails (gem install rails --include-dependencies)
    *   Install mongrel (gem install mongrel --include-dependencies --win32)

2.  Install Application Request Routing

    *   Download from [http://learn.iis.net/page.aspx/482/install-application-request-routing/](http://learn.iis.net/page.aspx/482/install-application-request-routing/) and follow the install instructions.  Particularly important is step 2 of step 2 (gotta love MS instructions) where you shut down WAS.
    *   Restart WWW provisioning, etc and lauch the IIS control panel and you should see some new icons.

3.  Test your rails app on default mongrel

    *   I had to convert my app to use SQL Server over ODBC as I migrate to the server...I'll move my local development over to SQL Server at some point, but for now...
    *   startup mongrel in development and test.  I used port 4000 cause that's what Brian used, choose your own poison.
    *   leave it running 'cause you'll need it to test the proxy

4.  Proxy IIS7

    *   First, select the root of your web server and double click the "Application Request Routing" feature in the IIS group
    *   By default, proxying is turned off.  Turn it on with the checkbox.
    *   The important bit is the proxy chain at the bottom.  Set it to proxy to your mongrel installation

    *   Apply that and the click on "URL Rewrite" in the Actions panel.

5.  Rewriting the URLs

    *   Now, by default, that proxy you just setup will forward all traffic to all urls, so the first step is to create a rewrite rule so that the proxy only affects a subset.  I added a blank rule and then tailored it 

        The regular expression grabs all urls under "rails/" and proxies them to mongrel on port 4000.  Nice.
    *   Now I should point out, that the first time I did this, I had the slash in the regular expression: 
        <pre>^rails/(.*)</pre> 
   instead of <pre>^rails(.*)</pre> 
   which had the nasty side effect of not proxying if the user entered http://host.com/rails (i.e. no trailing slash) which is more than likely what they'd do to get to your default rails root.  Needless to say, don't do that :)
   
   6.  OK, so that will work better, until you click on a link in the rails application.  Brian says it very well:
> The big problem we’re faced with now is that the URLs that Rails creates internally, such as
> stylesheet links, url_for links and other links don’t work as we expect… instead, they direct users
> around the proxy. This is bad because it exposes the proxied server.
So....we fix this by using a rails plugin called "Reverse proxy fix"

    *   From your rails application’s root folder, install the plugin: ruby script/plugin install http://svn.napcsweb.com/public/reverse_proxy_fix
    *   The plugin should install and then ask you for the base url.  Initially I entered http://localhost/rails.  that worked fine _on_ the localhost, but when accessed through the dns name, something fell apart.  An easy fix, just enter http://your.server.com/rails instead.
    *   **Note:** The plugin is designed to only modify urls in the production environment, so don' t test this in development and think its not working.

7.  Now everything should be working just tickety boo.  Last but not least, lets install mongrel as a windows service

    *   Make sure mongrel is shut down, and then from your rails application's root folder do the following
    *   Install the win32 services, gem install win32-service
    *   Install the mongrel service, gem install mongrel_service
    *   Enter **mongrel_rails service::install -N rails_app -p 4000 -e production**
    *   You can control the service from services widget  or from the command line:
> Start it: **net start rails_app**
> Stop it: **net stop rails_app**
> Delete it: **mongrel_rails service::remove –n rails_app**
You’ll want to set the startup type of the service to automatic when you’re done so that the service will start when the machine restarts.
And that's all folks.  Rails on IIS7 in Windows 2008 with mongrel.  Whodathunk!
