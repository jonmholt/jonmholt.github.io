---
title: 'Seamless Updates'
date: 2009-02-04 00:00:00 
tags: development
layout: post
---
So, the lifecycle of scripted applications is, in theory, hours not days or weeks or years.  In theory, that means that you are constantly updating and adapting in a production setting: iterations of the application are reaching your end users faster.  Now, how much of that is hype and how much is reality is questionable, but the thought of applying continuous integration to _production_ is one I had never really considered.  But when you have a single point of contact and a single datastore, its alot easier to manage.  Could you apply this same paradigm to a semi-connected client-server application?  This question surfaced in my thoughts with the discussion of ClickOnce and Smart Client technology that .Net offers, but really, it seems to me, that its still a matter of how you architect a system as much as the technology available.

About 10 years ago I started work as a programmer on a Java client application.  This client was to be semi-connected with a local database.  The app was designed with a spoke-and-hub topology, where the only common "server" was a hosted database.  We spent months writing the synching code that would upload local data, download server data (but only the data that the current user was interested in) and resolve conflicts.  It was pretty sophisticated for its day.  Each database (local and host) had a version number tagged in it and the app library was tagged too. The app was smart enough to know how to proceed if the versions differed (sometimes it shutdown, sometimes it offered a warning).  We had a spiffy set of batch files and sql scripts that could upgrade and downgrade the application and local database.  What we didn't have was a central place to store them.  The original design of tagging the library and database was to have the application spawn a new thread and update itself, but because of politics (and originally the limitation of 56k modems) we couldn't find a place to store the scripts and new libraries to give the application access.  Go figure.

So along comes .Net and their Smart Client (now ClickOnce) technology with strongly typed and versioned dlls and a mechanism for dynamically downloading and binding those libraries.  Wow.  It solves all the worlds problems, right? Well....maybe not.

Think about what has to happen to release code into production:

1.  Code has to be built and put somewhere so that it can be deployed to the next environment
2.  Updates for the local datastore have to be 'scripted' and put somewhere for the same reason
3.  A test environment is updated, often manually ensuring that the code update and the datastore update are kept in sync
4.  Then some accepting body pokes around and changes their mind; rinse; repeat.
5.  ...
6.  Some undetermined number of iterations later, we try to deploy code and datastore updates to the next environment (be that integration test, pre-prod, prod or whatever).  Keep in mind that you are likely skipping at least 1 interim build from steps 1-5

Keeping a local datastore in sync with its "parent" and with a particular version of code definitely takes some planning during the application architecture phase.  But what if we were to do such planning and the application could seamlessly update its codebase and local datastore whenever a new version was available, what would that look like?  Who tells the application its ok to grab the latest version?  What happens to all those people actively in the middle of using the old application when the server updates itself?  Who warns the user community that an update is coming? Or do we?  

Continuous integration as a developer is one thing.  You expect things to be changing all the time.  You expect stuff to break.  You are capabale of determining how that break will affect you and how to escalate if that effect is outside your tolerance.  You don't have a job to doother than monkeying with the code.  People who use our applications do have "day" jobs.  For them, there is no degree to which an error or even just a change at the wrong time will affect their ability to get work done...either it does or it doesn't and god forbid it does.

So, while I think that we need to be thinking more about how we can let the technology make our lives easier when it comes to updates, I don't think the fundamental issues ofmanaging an update are going to change any time soon.
