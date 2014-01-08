---
title: Publish/subscribe pattern with DOM API
author: Damien
layout: post
comments: true
permalink: /2012/09/27/publishsubscribe-pattern-with-dom-api/
geo_latitude:
  - 47.557421
geo_longitude:
  - 7.592572700000005
geo_address:
  - Basle, Basel-Stadt, Switzerland
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
---
Once in a while every web app developer will reach the point where he has to decide for a way how his modules are exchanging data between each other. If you are in this situation should have been stumbled upon the [publish-subscribe pattern][1].

While we were thinking of a smart way to provide an event bus for our modules and also considered the usage of [postal.js][2] or [Mediator.js][3] we still wanted to avoid to introduce a new paradigm for messaging.

So we were wondering what&#8217;s the difference between a click event from a user and a message event from a module. Nothing! There is no library needed to provide this interaction pattern, the DOM gives you that for free. The key to this is called [CustomEvent API][4].

We used the document object to listen and fire events.

<pre class="brush: javascript; ">document.addEventListener(&#039;person-ball-dropped&#039;, function(e) {
alert(e.person + &#039; dropped the ball.&#039;);
});

</pre>

Here we listen to an event &#8216;person-ball-dropped&#8217; and await the String &#8216;person&#8217; as an additional value sent with the event.

<pre class="brush: javascript; ">var ballDroppedEvent = new CustomEvent(&#039;person-ball-dropped&#039;);
ballDroppedEvent.person = &#039;Damien&#039;;

document.dispatchEvent(ballDroppedEvent);

</pre>

So we triggered the event on document an added some additional information about the person. [Try this][5]!

If you are already using jQuery you can keep your syntax and do exactly the same.

<pre class="brush: javascript; ">var $doc = $(document);

$doc.on(&#039;person-ball-dropped&#039;, function(e, data) {
alert(data.person + &#039; dropped the ball.&#039;);
});

$doc.trigger(&#039;person-ball-dropped&#039;, {
person: &#039;Damien&#039;
});

</pre>

As you can see the event handler receives a second parameter with the included data. Furthermore jQuery supports [namespaced events][6]. With namespaced events you can filter listeners and specify more detailed which events [execute][7] the handler.

<pre class="brush: javascript; ">var $doc = $(document);

$doc.on(&#039;person-ball-dropped.switzerland&#039;, function(e, data) {
alert(data.person + &#039; dropped the ball in Switzerland.&#039;);
});

$doc.on(&#039;person-ball-dropped.usa&#039;, function(e, data) {
alert(data.person + &#039; dropped the ball in USA.&#039;);
});

$doc.trigger(&#039;person-ball-dropped.switzerland&#039;, {
person: &#039;Damien&#039;
});

</pre>

So we trigger the event in the namespace switzerland and just the first handler gets executed. You can also listen to multiple namespaces (jQuery 1.3 or newer)

<pre class="brush: javascript; ">$doc.on(&#039;person-ball-dropped.usa.switzerland&#039;, function(e, data) {
alert(data.person + &#039; dropped the ball in Switzerland or USA.&#039;);
});

</pre>

So the handler gets called on both namespaces. **Attention**: All namespaced events get called if you are triggering the event without any namespace!

 [1]: http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern
 [2]: https://github.com/ifandelse/postal.js
 [3]: http://thejacklawson.com/Mediator.js/
 [4]: https://developer.mozilla.org/en-US/docs/DOM/Event/CustomEvent
 [5]: http://jsfiddle.net/2qHFt/
 [6]: http://docs.jquery.com/Namespaced_Events
 [7]: http://jsfiddle.net/yttck/