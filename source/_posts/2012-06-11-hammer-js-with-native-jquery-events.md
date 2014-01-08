---
title: Hammer.JS with native jQuery events
author: Damien
layout: post
comments: true
permalink: /2012/06/11/hammer-js-with-native-jquery-events/
categories:
  - Javascript
---
If you were looking for a tiny touch event library [Hammer.JS ][1]does a great job with this. It can be either used with vanilla javascript or as a jQuery extension. It is a definitely a more advanced approach than just grabbing jquery.mobile.vmouse.js and touch.js from the [jQuery mobile project][2].

However [Eight Media][3] decided to create their own namespace in jQuery to activate the events.

<pre class="brush: javascript; ">$("#element").hammer({ /* options */ }).on("tap", function(ev) { console.log(ev); });

</pre>

So in the end they are not using the default jQuery eventing system. That means my existing source code which used jQuery mobile events has to be change. That&#8217;s why I decided to implement the use of Hammer.JS with the jQuery special eventing API.

<pre class="brush: javascript; ">$("#element").on("tap", { /* options */ }, function(ev) { console.log(ev); });

</pre>

I put [jquery.specialevent.hammer.js][4] onto my [Github][5] where you can also find a demo. Maybe Eight Media accepts my [pull request][6] and it will be part of Hammer.JS.

Attention: the plugin doesn&#8217;t support the [jQuery namespacing][7] yet.

 [1]: http://eightmedia.github.com/hammer.js/ "Hammer.JS"
 [2]: https://github.com/jquery/jquery-mobile/
 [3]: http://www.eight.nl/
 [4]: https://github.com/dantipa/hammer.js/blob/master/jquery.specialevent.hammer.js
 [5]: https://github.com/dantipa/hammer.js
 [6]: https://github.com/EightMedia/hammer.js/pull/35
 [7]: http://docs.jquery.com/Namespaced_Events