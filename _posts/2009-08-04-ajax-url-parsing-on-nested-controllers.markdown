---
title: 'AJAX url parsing on nested controllers in rails'
date: 2009-08-04 00:00:00 
tags: development ajax rails
layout: post
---
So I've spent the last little while getting aquainted with Ruby on Rails.  My assessment so far?  What a brilliant collection of conventions.  But the number of times I've been missing an 's' or had one to many is rediculous in the extreme.  But it occurred to me that as I was getting along so well, that what convention means is consistency.  In software, you can't go down to the local software store and pick up a CMS that will integrate with your current enterprise.  But a plumber can go down to the local hardware store and pick up a kitchen sink what will definitely fit the plumbing in your kitchen.  Why?  Because in plumbing, there's the convention that a sink drain pipe is alway 1 3/8" so they just fit.  That's what ruby on rails does for the programming commununity.  So while I'm really still a newb when it comes to rails, I can certainly appreciate the value of the conventions.  That being said, without understanding them all, you can quickly get yourself into trouble.

And so, on to the topic of this post (where likely my lack of understanding has gotten me into trouble): Remote AJAX calls using RESTful routing when you've had Rails wire up a nested model object (and therefore your controllers).  That's a bit of a mouthful, so what did I do?  Just for argument sake, lets use the standard Rails example of a Post that has many comments.  In my world, I broke a cardinal rule and nested twice:  I have a post that has many comments that have many links.  Rails is fabulous in that it quickly allowed me to hook up the Post and Comment functionality.  It even builds a couple of little helpers for me:

*   When I call
<pre> post_comments_path(@post)</pre>
it gives me the url
<pre>/post/:id/comments</pre>

*   When I call
<pre> edit_post_comment_url(@post,@comment)</pre>
it gives me the url
<pre>/post/:id/comment/:id/edit</pre>
This is where it gets interesting.  You'll notice that the url format for the nested format is &lt;parent|id&gt;/&lt;child|id&gt;/&lt;action&gt;.  So as many people have pointed out, if you go to &lt;parent|id&gt;/&lt;child|id&gt;/&lt;child&gt; without setting up appropriate mapping in the routing table, you end up passing the grandchild as the action, or worse the grandchild name as the ID parameter to the child index action.  This isn't good, but no problem, just nest the resource one level deeper in the routing table, right?

Well, I don't like to make things that easy on myself.  I've decided that all the "link" activity from the above example (posts with comments with links) is going to happen as AJAX calls on the comments controller.  As the relationship of comments to links is a [composition](http://en.wikipedia.org/wiki/Class_diagram#Composition), the Comments controller will be handling calls for both.  Unfortunately, this means that all the actions required for the "links" model are custom actions.  In particular, I wanted them to be AJAX link_to_remote calls as well so the ordinary post_comment_path url helpers were in fact no help at all.

So what did I do.  Well, it took me a while to find a working solution, but here's mine, tell me if you have a better one.

1.  In the comments show view, I created a link_to_remote for adding a new "link".  The remote call was setup to use a default :url that just calls the custom action:
<pre>&lt;%= link_to_remote 'Add new link',
  :position=&gt;:before,
  :url =&gt; {:action =&gt; :start_new,
           :post_id=&gt;@post,
           :id =&gt; @comment }
%&gt;</pre>

2.  In the routing table, you configure the child object to have a custom action, as this is an AJAX call, its of the POST flavour
<pre>map.resources :posts do |p|
  p.resources :comments,
              :collection =&gt; {:start_new =&gt; :POST}
end</pre>
And voila.  It took me about 4 hours to figure that out.  I had custom named routings, I had concatenated url helpers in the view, I had dedicated controllers that forwarded to the comments controller.  You name it, I'd tried it.  What I didn't have in my arsenal was the conventions.  You ask someone who's internalized it, and its "Duh, you add a custom action to the resource".  And from now on I'll know how to do it.  More importantly, when I see a resource like that, I'll know to go looking for controller with the custom actions that more than likely are being called in an asynchronous way.
