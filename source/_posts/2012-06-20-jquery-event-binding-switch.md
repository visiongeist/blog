---
title: jQuery event binding switch
author: Damien
layout: post
comments: true
permalink: /2012/06/20/jquery-event-binding-switch/
geo_latitude:
  - 48.30694
geo_longitude:
  - 14.285830000000033
geo_address:
  - Linz, Oberosterreich, Austria
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
---
If you are building applications which are used on pointer and on touch devices then you are familiar with the situation that event handling can slightly differ on these device groups. So in my case. I provide the same UI to all device groups (okay with some media queries sugar&#8230;) though I provide a different interaction model to them. E.g. in some cases elements are reacting with doubleclick on pointer devices and with taphold on touch devices. To avoid unnecessary binding (e.g. swipe doesn&#8217;t make a lot of sense with a mouse) I created a simple finger/pointer switch for jQuery.

[fingerpointer][1] wraps the the jQuery event method on/off and provides finger/pointer event binding for less painful user interaction.

 [1]: https://github.com/dantipa/jquery.fingerpointer