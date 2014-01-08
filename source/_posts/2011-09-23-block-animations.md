---
title: Block animations
author: Damien
layout: post
comments: true
permalink: /2011/09/23/block-animations/
jabber_published:
  - 1316771525
tagazine-media:
  - 'a:7:{s:7:"primary";s:0:"";s:6:"images";a:0:{}s:6:"videos";a:0:{}s:11:"image_count";s:1:"0";s:6:"author";s:7:"6177794";s:7:"blog_id";s:8:"27780504";s:9:"mod_stamp";s:19:"2011-09-23 09:52:04";}'
geo_latitude:
  - 48.2
geo_longitude:
  - 16.366999999999962
geo_address:
  - Vienna, Wien, Austria
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - ios development
  - programming
tags:
  - ios
  - iphone
  - objective-c
---
Hey there,

I&#8217;m still developing the iOS application for my diploma thesis, so I will try to post some code snippets regularly. Anyways since iOS it is [encouraged to use block animations instead of &#8220;Animating Views&#8221; methods][1]. The framework offers two transitions between UIViews: Curl and Flip. They can be easily activated through

<pre class="brush: c; ">[UIView transitionFromView:oldView toView:newView duration:1.0 options:UIViewAnimationOptionTransitionCurlUp completion:^(BOOL finished) {
/* on complete callback */
}];


</pre>

If you want to do something more advanced like sliding a View from a side you can use a block animation, for that case I wrote a method

<pre class="brush: c; ">-(void)showWithAnimationSlideToLeft:(UIViewController*)rootViewController from:(UIView*)fromView to:(UIView*)toView
{
toView.view.frame = CGRectMake(fromView.frame.size.width, 0, rootViewController.view.frame.size.width, rootViewController.view.frame.size.height);
[rootViewController insertSubview:toView belowSubview:fromView];
[UIView animateWithDuration:0.5 animations:^{
toView.frame = CGRectMake(0, 0 rootViewController.view.frame.size.width, rootViewController.view.frame.size.height);
fromView.frame = CGRectMake(-fromView.frame.size.width, 0, rootViewController.view.frame.size.width, rootViewController.view.frame.size.height);
} completion:^(BOOL finished){
[fromView removeFromSuperview];
}];
}


</pre>

Hopefully this is helpful for you guys!

 [1]: http://developer.apple.com/library/ios/#documentation/uikit/reference/UIView_Class/UIView/UIView.html