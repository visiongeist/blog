---
layout: post
title: "Crashing Safari on iOS with CSS"
date: 2014-03-12 13:21:17 +0100
comments: true
---

Safari on iOS can be frustrating. Especially if the browser crashes for some weird reason without leaving you a single error message behind.

For example this simple snippet will your mobile browser script-less.

{% codeblock lang:html %}
<label>
	<input type="checkbox" />
	A checkbox
</label>
{% endcodeblock %}

Just make your checkbox barely visible (1x1).

{% codeblock lang:css %}
input[type="checkbox"] {
	width: 1px;
	height: 1px;
}
{% endcodeblock %}

A click on the label will bring the browser to his knees. No further notice. If you doubt it, [try it out](/examples/html/crash-safari-on-ios-with-css.html) - (the simulator crashes as well).