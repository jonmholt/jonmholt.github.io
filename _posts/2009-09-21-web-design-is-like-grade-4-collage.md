---
title: 'Web design is like grade 4 collage'
date: 2009-09-21 00:00:00 
tags: development

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
I was working on a website redesign project for one of the clients of our sister [educational software services ](http://twentyfivetwenty.ca)company, and I was plugging away in GIMP moving bits around, trying to get a sense for the new proportions of the site after adding an image banner.  While I was in the process of this, one of the teachers there stopped by to watch.  She commented that she "hadn't realized that making a web page was so much like doing collage."  I smiled, thinking of how true that statement was looking at the duck tape and bailing wire of the html and css holding this site together.  I made some offhand remark about how frustrating it can be when the different browsers all treat the same instructions differently and it was at this point that she gave me my "aha" moment for the week: "Oh, its kinda like giving a collage assignment to a group of grade 4's...you give them the same materials, the same instructions, and yet they all come out just a little bit different"<a name="more"></a>

That little comment changed the way I looked at the process.  Many web designers, including (**cough cough**) me, have a success criteria of "looking the same" in all the browsers, despite all browsers' tendency to render things slightly differently.  Some designs are made with those idiosyncrasies taken into account.  Others use well established hacks to produce the same results in different browsers by slightly varying techniques.  At the moment of that seminal comment, I was fighting with a fadeIn/fadeOut, opacity problem that looked spectacular in FF and Chrome but broke completely in IE8 (not to mention older versions).  And I thought to myself...why do I care.  Why not have a different, if equally fantastic effect in IE?

I plugged away at the effect for a couple more hours and found that the issues I was having were due to an artifact of the way in which IE implements opacity.  gecko based browsers interpret the jQuery fadeout as "fade to zero from the current opacity" whereas IE interprets it as "set the opacity to 100% and fade it to 0%".  The effect in FF, chrome, etc is a very subtle one where you're not sure if you're seeing images change.  In IE, the effect is that each image is highlighted as it changes.  Different effects, same instructions.  I'm actually quite fond of both effects and I might look at ways of implementing both effects in all browsers, but for now, we'll let each of the students have their own interpretive flair.
