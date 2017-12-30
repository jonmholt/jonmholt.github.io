---
title: 'Can specs make us better?'
date: 2008-12-22 00:00:00 
tags: development

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
So, I've been doing a lot of reading on [JoelOnSoftware ](http://www.joelonsoftware.com/index.html)lately.  If you're not familiar, I'd encourage you to do some reading because his insight are often just what you need to kickstart your career.  I first encountered him with his article "[The Law of Leaky Abstractions](http://www.joelonsoftware.com/articles/LeakyAbstractions.html)" and, for me, its still the seminal essay on why software is an art not a science: its the art of refocussing at the level of abstraction that any given task requires.  Joel inspires people.  He inspires some to be better developers; some to be better managers; some to be better testers; but at the core he inspires people to do a better job at this business we call software.  For me, he inspires me to write.

The most recent prod to write comes in the form of the [Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html).  I evaluated our organization using his criteria. At best we scored a 6\.  I have a desire to build the best software company I can.  One at which people _want_ to work, one where the whole is greater than those that are a part of it.  A 6 is not that organization.  So I started looking at where we fall down:

* (8.) Do programmers have quiet working conditions?
* 6\.   Do you have an up-to-date schedule?
* 7\.   Do you have a spec?
* 9\.   Do you use the best tools money can buy?
* 10\. Do you have testers?
* 11\. Do new candidates write code during their interview?
* 12\. Do you do hallway usability testing?

8 is an interesting one given our current working model, so trusting that our people choose the best possible working conditions for themselves, I included it in the "Yes" column, just pushing us over the 50% mark.  11 is also interesting as I was familiar with almost everyone's coding prior to hiring, and where that wasn't the case, code was open during the interview...so its possible we could count that one, but because its not a policy, I didn't put it in the win column.  So where do we fall down: schedule, specs, tools, testers, hallway testing and interviewing.  And of these, let the first be specs.  In my book, the biggest failing we have is that we trust in intrinsic knowledge and require folks to learn (often on their own) how things work, in order to be able to do what we're asking of them.  This is true of developers, testers if we had them, me, and eventually, the client when they receive code (cause without the spec, business function doesn't map 1-to-1 with the technical implementation).  The next one on the list for me is that we don't have dedicated testers, but without the common understanding of the task at hand provided by the spec, what's the point.

So, it occurs to me that specs are really my job.  If I can't specify a functionally correct definition of what it is I'm asking my developers to produce, how can I expect them to deliver it?  I've been lucky.  I work with apparently psychic people who read our client's and my mind and hit the ball out of the park.  But all the problems we're experiencing: how do we test it when its done, how do we know if that bug is a bug or a new feature, "OH! you wanted it _that_ way? never would have guessed" are a direct result of not having a functional spec that defines the target for all involved.  So as usual, I'm inspired to write.

But if I've learned one thing in the last year, its that there's no point in starting process improvement unless you have a specific goal and a way to measure success.  So what are my goals:

*   Reduce/eliminate a developer getting a new case and saying "what does that mean", "where do I find that screen", "what's a code fee", etc
*   Have all cases specified in a _similar_ format (reduce time looking for the important stuff), but there doesn't need to be any mandatory sections
*   Eliminate cases being returned in UAT because we just didn't quite understand the requirement
So how am I going to measure that?  I'm going to keep this simple, at first (or forever) and ensure the following:
 1.  Every new case has a spec when its assigned, or links to a case with an_ updated_ spec
 2.  Every failure in UAT has the person reporting it help update the spec (in case there's other stuff in there that ain't right)
 
I was going to add some fluff about measuring the number of cases that are reactivated or number of cases with linked cases, etc, but the goal is to improve the specification process, not screw up the bug reporting process by encouraging people never to resolve a case or many of the other things that can happen when you measure the wrong thing for the right reasons.
