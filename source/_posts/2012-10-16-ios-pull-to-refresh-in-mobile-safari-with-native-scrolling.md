---
title: iOS Pull-to-refresh in mobile Safari with native Scrolling
author: Damien
layout: post
comments: true
permalink: /2012/10/16/ios-pull-to-refresh-in-mobile-safari-with-native-scrolling/
geo_latitude:
  - 47.55
geo_longitude:
  - 7.533000000000015
geo_address:
  - Allschwil, Basel-Landschaft, Switzerland
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
tags:
  - ios
  - javascript
  - JQuery
  - Plugin
---
The iOS6 developer kit for native apps is out there for a while and Apple finally added a out of the box pull-to-refresh control called [UIRefreshControl][1].

<img class="aligncenter size-full wp-image-286" title="UIRefreshControl" src="http://damien.antipa.at/wp-content/uploads/2012/10/ptr1.jpg" alt="" width="400" height="177" />

<p style="text-align: left;">
  However this feature is nothing new and used by plenty of apps in different implementations for years now. There is even a implementation for web applications included into <a href="http://cubiq.org/iscroll-4" target="_blank">iScroll</a> which allows to simply make a block element scrollable and add the pull-to-refresh feature. Though this solution depends on a Javascript implementation to emulate native scrolling. Indeed this made sense until iOS 5 where Apple introduced the <em>-webkit-overflow-scrolling</em> css attribute to enable scrolling for overflowing block elements.
</p>

<p style="text-align: left;">
  I strongly recommend the use of this attribute instead of Javascript scrolling! It seems awkward that iOS5 is out there for over a year and I still couldn&#8217;t find a pull-to-refresh implementation for mobile safari. So I decided to publish mine.
</p>

<p style="text-align: left;">
  The concept to achieve that is pretty simple. The markup will be created out of two level nested block elements.
</p>

<p style="text-align: left;">
  <img class="aligncenter size-full wp-image-289" title="ptr-concept" src="http://damien.antipa.at/wp-content/uploads/2012/10/ptr-concept.png" alt="" width="227" height="443" />
</p>

<p style="text-align: left;">
  The outer div (red border) is scrollable and gets the <em>-webkit-overflow-scrolling: touch;</em> and <em>attribute overflow-y: auto;</em>. Then the content which needs to scrollable will be placed into the box (black border). The panel with the pull-to-refresh information will be absolute positioned behind the content div. This results into:
</p>

<pre class="brush: html; ">&lt;div class="scrollable"&gt;
	&lt;div class="pull-to-refresh"&gt;

	&lt;/div&gt;
	&lt;div class="wrap"&gt;
		&lt;!-- Content here --&gt;
	&lt;/div&gt;
&lt;/div&gt;

</pre>

The background color between the pull-to-refresh panel and the content may be different and can be applied to the nested divs. Take care that the pull-to-refresh panel has the same background color as the surrounding div otherwise the pulling would look weird. Furthermore we will have to stretch the height of the content to 100% height of the surrounding div +1 pixel padding otherwise scrolling wouldn&#8217;t be possible if the inner content&#8217;s height is not taller than the div.scrollable height. Another downfall of native scrolling is that nested content might be scrambled while and after scrolling so we need to <a href="http://www.drewdahlman.com/meusLabs/?p=135" target="_blank">activate hardware acceleration</a> for the div.wrap.

<pre class="brush: html; ">&lt;style&gt;
	.scrollable {
		overflow-y: auto;
	    -webkit-overflow-scrolling: touch;
	    position: relative;
	    height: 100%;
	    background: #fff;
	}

	.wrap {
		min-height: 100%;
	    padding-bottom: 1px;
	    background: #f5f5f5;
	    -webkit-transform: translateZ(0);
	}

	.pull-to-refresh {
	    height: 40px;
	    width: 100%; 
	    
	    position: absolute; 
	    left: 0; 
	    top: -40px;

	    z-index: -1;
	}
&lt;/style&gt;

</pre>

Now you should already be able to see the pull-to-refresh panel behind the content while scrolling with the rubber band. Now comes the Javascript. Using the <a href="https://developer.mozilla.org/en-US/docs/DOM/element.scrollTop" target="_blank">scrollTop</a> value of div.scrollable you should receive a negative value when the rubberband shows the pull-to-refresh panel. After the user releases the finger and the scrollTop value is below the height of the panel then the div.pull-to-refresh should receive position:static and start the loading!

To avoid bothering you with more details I build a [jQuery plugin][2] which easily applies the [demo][3] features to the markup. You just need to pass a callback function which returns a <a href="http://api.jquery.com/promise/" target="_blank">promise</a>. Here an example.

<pre class="brush: html; ">&lt;script&gt;
$(&#039;.scrollable&#039;).pullToRefresh({
    callback: function() {
        var def = $.Deferred();
        
        setTimeout(function() {
            def.resolve();      
        }, 3000); 

        return def.promise();
    }
});
&lt;/script&gt;

</pre>

Works on iOS5 and 6. Download the project from my [github][2] repo!

 [1]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIRefreshControl_class/Reference/Reference.html
 [2]: http://github.com/dantipa/pull-to-refresh-js
 [3]: http://damien.antipa.at/demo/pull-to-refresh/example