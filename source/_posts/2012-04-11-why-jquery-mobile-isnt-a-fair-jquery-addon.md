---
title: 'Why jQuery mobile isn&#8217;t a fair jQuery addon'
author: Damien
layout: post
comments: true
permalink: /2012/04/11/why-jquery-mobile-isnt-a-fair-jquery-addon/
geo_latitude:
  - 47.557421
geo_longitude:
  - 7.592572700000005
geo_address:
  - Basel, Basel-Stadt, Switzerland
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
---
While looking at the source code of [jQuery mobile][1] I just figured out that jQuery mobile is using [undocumented][2] features of [jQuery][3]. Which is pretty bad because first of all to contribute to jQuery mobile it is necessary to have knowledge about the internal behavior of jQuery. The next issue is the consistency of an internal function. I guess there is a reason why the jQuery team is not providing any documentation about a particular function. Maybe because they want to get rid of if? Maybe it&#8217;s functionality is changing within the next release? So I think in general it&#8217;s not very smart to use something which is not documented, even if it&#8217;s possible. However because jQuery mobile does this it is difficult to get rid of the jQuery library if you are planning to do so.

Maybe you have already heard about [Zepto.js][4] (it&#8217;s not such a new thing). The goal of Zepto is to provide the same (public) interface as jQuery but to remove all parts of the internal functionality which are irrelevant for mobile applications. So all crossbrowser related stuff to handle IE properly will not be included in Zepto. Because of this, Zepto decreases the library size and increases loading speed. So it would be awesome to use the jQuery mobile widget kit with Zepto instead of jQuery. But to achieve this it is not enough to provide the same interface like jQuery&#8230;. unfortunately.

So far I found calls for these functions in jQuery mobile:

*   $.expr
*   $.style

If you are interested in porting some of your applications to Zepto, [Ms. Pamela Fox][5] already ported some successfully.

 [1]: http://jquerymobile.com/
 [2]: http://docs.jquery.com
 [3]: http://jquery.com
 [4]: http://zeptojs.com/
 [5]: http://blog.pamelafox.org/2011/11/porting-from-jquery-to-zepto.html