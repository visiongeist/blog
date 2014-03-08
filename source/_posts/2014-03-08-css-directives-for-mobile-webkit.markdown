---
layout: post
title: "CSS directives for mobile Webkit"
date: 2014-03-08 19:31:57 +0100
comments: true
---

When you are expecting to support mobile browser for your application then you should definitely know about these CSS directives.

### 1. -webkit-overflow-scrolling: touch

As on a desktop browser you may only use *overflow: scroll;* to enable an element to be scrollable. However it does not give you a momentum scrolling. You rather have this jittering way of scrolling. *-webkit-overflow-scrolling: touch* will force another layer and gives you back a native touch scrolling for your element.

Support: Android 4+ & iOS 5+

{% codeblock lang:css %}
.scrollable {
	overflow: scroll;
    -webkit-overflow-scrolling: touch
}
{% endcodeblock %}

### 2. -webkit-tap-highlight-color: <color>;

When you tap a link then the link receives a grey background. Setting *-webkit-tap-highlight-color* will allow you to change the color or make it disappear.

Support: Android 4+ & iOS 1.1.1+

{% img /images/post/webkit-css-gray-backface.png Grey tap highlight color %}

{% codeblock lang:css %}
* {
    -webkit-tap-highlight-color: transparent;
}
{% endcodeblock %}

### 3. -webkit-touch-callout: none;

If you start touching an element for around a second, mobile browser will provide you a callout menu or a magnifier. For instance if you implement a drag and drop handling then this is unwanted. *-webkit-touch-callout: none;* will remove it.

Support: Android 4+ & iOS 2.0

{% img /images/post/webkit-css-user-callout.png Grey touch callout magnifier %}

{% codeblock lang:css %}
.draggable {
    -webkit-touch-callout: none;
}
{% endcodeblock %}