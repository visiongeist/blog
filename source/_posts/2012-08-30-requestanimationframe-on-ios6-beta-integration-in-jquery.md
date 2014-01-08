---
title: requestAnimationFrame on iOS6 beta (+ integration in jQuery)
author: Damien
layout: post
comments: true
permalink: /2012/08/30/requestanimationframe-on-ios6-beta-integration-in-jquery/
categories:
  - Javascript
tags:
  - JQuery
---
Great Apple added support for [requestAnimationFrame ][1]with the webkit prefix. Hopefully this will give mobile Safari animations some boost! Based on [Paul Irish&#8217;s blog post][2] about a polyfill I created an integration into jQuery&#8217;s animation module. For that I used the [new API][3] introduced in 1.8 to hook into the timer call and request the animation frame.

[gist id=3524146]

 [1]: https://developer.mozilla.org/en-US/docs/DOM/window.requestAnimationFrame
 [2]: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 [3]: https://gist.github.com/54829d408993526fe475