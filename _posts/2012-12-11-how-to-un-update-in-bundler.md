---
title: 'How to un-update in bundler'
date: 2012-12-11 00:00:00 
tags: development

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
A while ago, I made a mistake. &nbsp;I know, I know: "That never happens!". &nbsp;Well, it did. &nbsp;As you may know, we make this little online service [www.DayhomeRegistry.com](http://www.dayhomeregistry.com/)&nbsp;and the magic behind the curtain there is Ruby on Rails. &nbsp;If you've ever worked with RoR, you know it can be a rat's nest of interdependent gems working to "make the magic happen" (tm). &nbsp;Under the guidance of our good friends at [Burmis Studio](http://www.burmis.ca/)&nbsp;we use Bundler to make the management of all those sparkly little gems hang together well. &nbsp;It has these great features that let you install all the dependencies you need from bare metal with one command. &nbsp;It lets you see all the dependencies for each gem and in a single step it can update all the gems in your Gemfile to their latest versions. &nbsp;Uh oh. &nbsp;It does what? &nbsp;And the dependencies too? And...oh...that wasn't what I wanted. Undo. &nbsp;Wait, what do you mean there's no undo? &nbsp;Crap. &nbsp;Well, this is the story of un-updating a bundler update.

First, you have to understand a few things about Gemfiles that, for a newb like me, have implications beyond the obvious. &nbsp;First, when I looked at the Gemfile, Capistrano was no where to be seen. &nbsp;I knew I was using capistrano....the "cap" command was a dead giveaway, but it wasn't until I ran the gem dependency checker that I figured it out:
![](/content/images/2014/Aug/Screen-Shot-2012-12-11-at-3-56-04-PM.png)
But what, you ask, is the (~&gt; 2.11) for? &nbsp;Well that my friends, was the crux of this entire problem. &nbsp;That little symbol basically says "the latest you've got greater than or equal to versino 2.11". &nbsp;When I upgraded using bundler, since the spec doesn't include a max value....I upgraded automagically to 2.13.3\. &nbsp;Now, the Gem file specs this out this way to ensure that you're able to easily stay up to date. &nbsp;Locally, this was no issue. &nbsp;On the test machine, no issue. &nbsp;But then I deployed to our prod machine, and all hell broke loose. &nbsp;I don't have a spiffy screen shot, but lets just say that an upgrade to capistrano locally made for a very bad capistrano deployment onto the prod server. &nbsp;Trying to upgrade capistrano on the server made an even bigger mess, crashing nginx and passenger in a very strange way. &nbsp;We ended up having to revert the prod server to an older image.

So my next thought was, "no problem, I'll just use the handy Gemfile to force capistrano to the older version." One quick edit and...
![](/content/images/2014/Aug/capistrano.PNG)

Huh.  That didn't get rid of 2.13.3\.  And to make matters worse, I have activated the newer version and apparently can't go back to the older one.  Sigh. Thankfully I stumbled across the gem uninstall tool. This little doodad, is smart enough to know about all the versions you've deployed and let you get rid of just a single one....exactly what I wanted:
![](/content/images/2014/Aug/uninstall-cap.PNG)

Of course, the fanfare update needed to be uninstalled too:
![](/content/images/2014/Aug/uninstall-fanfare.PNG)

So at the end of the day, Bundler is great for installing a known set of gems, and for upgrading them auto-magically. &nbsp;But you still need to have a good handle on manual gem manipulation if you need to uninstall. &nbsp;Hope this helps someone who's dealing with the same issue in the future skip straight to the solution. Goes to show that [abstractions](http://ghost.twentyfivetwenty.ca/can_specs_make_us_better_) aren't always what they're cracked up to be.
