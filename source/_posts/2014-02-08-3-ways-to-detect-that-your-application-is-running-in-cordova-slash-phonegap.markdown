---
layout: post
title: "3 ways to detect that your application is running in Cordova/Phonegap"
date: 2014-02-08 14:06:25 +0100
comments: true
categories: 
---

Building a web application which is not only running in the browser but also in [Cordova](http://cordova.apache.org/‎) applications will need some context information especially if you want to make use of Cordova [custom events](http://cordova.apache.org/docs/en/3.0.0/cordova_events_events.md.html).

So here are 3 ways to detect if your application is running as a Cordova/Phonegap application.

1 - The cordova.js will set the cordova object in the global scope. If it is there then you are most likely running in a Cordova scope.

{% codeblock lang:js %}
var isCordovaApp = !!window.cordova;
{% endcodeblock %}


2 - Cordova will run your application as you would open a HTML document from your Desktop. Instead of the HTTP protocol it will use FILE. Detecting this will give you a chance to assume that your app was loaded locally.

{% codeblock lang:js %}
var isCordovaApp = document.URL.indexOf('http://') === -1 
	&& document.URL.indexOf('https://') === -1;
{% endcodeblock %}

3 - Use the load event of the cordova script to detect the context. The script include can be easily removed in the build process or the script loading will simply fail in a browser. So that this global variable will not be set.

{% codeblock lang:html %}
<script src="../cordova.js" onload="javascript:window.isCordovaApp = true;"></script>
{% endcodeblock %}
