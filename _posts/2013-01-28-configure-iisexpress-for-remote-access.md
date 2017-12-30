---
title: 'Configure IISExpress for Remote Access'
date: 2013-01-28 00:00:00 
tags: 
layout: post
---
Have you ever been working on a project in Visual Studio and wanted to have someone else test-drive it?  Short of having them sit at your desk there wasn't much option as the default Visual Studio web server doesn't accept remote request.  IISExpress to the rescue, but its not a simple as you'd think.

There are three simple steps to remote access on a local project.

1. Go into Visual Studio and tell the project to run under IISExpress. You can right-click on the web project and select "Use IISEXpress":
  ![](/content/images/2014/Aug/IISExpress02.png)

  Optionally, you can also choose Properties->Web->Use Local IIS Web Server

2. Grant the remove access ACL to your machine and port:
  >netsh http add urlacl url=http://mymachinename:50333/ user=everyone

  **Remember to change your machine and port number!**

3. Ensure that the binding protocol for that port/machine are listed in you're applicationhost.config
  1. Open applicationhost.config file located in your user profile (%userprofile%\Documents\IISExpress\config\applicationhost.config)
  1. Locate your WebSite entry and add following binding with your machine name:
<binding protocol="http" bindingInformation=":50333:your-machine-name" />
  1. Restart IIS Express

And that's it.  Works like a charm!

Big thanks to [Scott Guthrie](http://weblogs.asp.net/scottgu/archive/2010/06/28/introducing-iis-express.aspx) and these two StackOverflow posts (http://stackoverflow.com/questions/3313616/iis-express-enable-external-request,
http://stackoverflow.com/questions/5442551/iisexpress-returns-a-503-error-from-remote-machines)
