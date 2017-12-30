---
title: 'Baseline database scripts make your updates better'
date: 2009-01-10 00:00:00 
tags: development

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
So this week I began down the road of bringing our database scripts up to snuff with reality to ensure that we have a script that can build us a functional database from scratch.  There were a number of things that drove me there (or should I say, pushed it up high enough in the priority list): 

1.  We needed a new database without any sensitive data for testing the new web application on a server "outside the wall"
2.  I'd like to have a database that tests can be run against / testers can use that's refreshed daily
3.  We need to have a way of getting developers a local database quickly, without them downloading a 3GB backup

In addition, we are struggling with the problems inherent in having multiple developers updating a database through a script, so it was obvious that some validation of the current state was required.  As with many things, an opportune Google search led me to a brilliant five part series written by K. Scott Allen on the philosophy and practice of database version control: 

1.  [Three rules for database work](http://odetocode.com/Blogs/scott/archive/2008/01/30/11702.aspx)
2.  [The Baseline](http://odetocode.com/Blogs/scott/archive/2008/01/31/11710.aspx)
3.  [Change Scripts](http://odetocode.com/Blogs/scott/archive/2008/02/02/11721.aspx)
4.  [Views, Stored Procedures and the Like](http://odetocode.com/Blogs/scott/archive/2008/02/02/11737.aspx)
5.  [Branching and Merging](http://odetocode.com/Blogs/scott/archive/2008/02/03/11746.aspx)

Now as with most things on the web, I don't agree 100%, but there's a lot to be said for a lot of what is said. I tend to listen to the universe and when the universe sends me an article that proclaims "Never use a shared database server for development work" on the very day that we are discussing whether or not DEBS_DEV is a developer database or a deployment database I sit up and listen:  we're doing it wrong.  Now we've always had a versioned database, but K. Scott's point in a versioned database is to allow for an automated tool to know that scripts need to be run based on that version.  I still stand by our flavour of this process which requires that all the changes for a particular release are kept together in a single script and that that script can be run repeatedly on the same database without creating havoc.  

The trick is, we never had a single, authoritative source of the schema for any given release of the application.  We had the scripts in the root of Database Scripts, but they were always behind.  So I set about making sure they weren't.  It wasn't an easy task, but it was areally good one.  Why?  Well because as I went through the process of updating the scripts, comparing their result against development and production I found a number of things that were wrong and missing in the current batch of update scripts.  Now, we would have eventually found them cause stuff would be broken in UAT, but that's a pretty unprofessional way to do things, don't you think?  

But what's interesting is not the result, but the value of the process.  The act of creating a database from the script forced a quality check that hadn't been there before.  The act of creating baseline database scripts for our application made the updates better. Who knew?
