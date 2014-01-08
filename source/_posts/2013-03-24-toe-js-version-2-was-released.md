---
title: toe.js version 2 was released!
author: Damien
layout: post
comments: true
permalink: /2013/03/24/toe-js-version-2-was-released/
geo_latitude:
  - 48.2081743
geo_longitude:
  - 16.37381890000006
geo_address:
  - Vienna, Vienna, Austria
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
---
It&#8217;s been a week that I released version 2.0 of my touch library toe.js, so it&#8217;s time to describe the changes here. First of all the new version is smaller and faster. Just have a look at the grunt output:

Uncompressed size: 10743 bytes.  
Compressed size: 1318 bytes gzipped (4208 bytes minified).

It is still modular and all gestures are still stored in the /gestures folder. The library supports tap, taphold, swipe (all directions), transform (rotate and scale). I eventually removed doubletap because it doesn&#8217;t seem useful to me. The usage is still the same, simply use the default jQuery event handling to bind events.

{% codeblock lang:js %}
$('div.myElem').on('tap', function (event) {
	
});
{% endcodeblock %}

With the new version I added some properties to the event object.

{% codeblock lang:js %}
$('div.myElem').on('tap', function (event) {
	event.finger; // amount of fingers used for the gesture

	event.start; // start point extracted from touchstart
	event.move; // array of all moved points extracted from touchmove 
	event.end; // end point extracted from touchend
});
{% endcodeblock %}

Swipe adds the following properties

{% codeblock lang:js %}
$('div.myElem').on('swipe', function (event) {
	event.angle; // angle of the swipe direction
	event.direction; // direction of the swipe expressed by a string ['left', 'right', 'up', 'down']
});
{% endcodeblock %}

To detect transformations you may use the events transformstart, transform and transformend. The last two events will give you these additional properties

{% codeblock lang:js %}
$('div.myElem').on('transform transformend', function (event) {
	event.rotation; // degrees
	event.scale; // pinch move expressed as a number between 0 to 1
});
{% endcodeblock %}

I hope you like it. In future I&#8217;m planning to add MSPointer support to it.