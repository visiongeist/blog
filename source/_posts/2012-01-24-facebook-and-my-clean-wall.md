---
title: Facebook and my clean wall
author: Damien
layout: post
comments: true
permalink: /2012/01/24/facebook-and-my-clean-wall/
categories:
  - programming
---
Today I accidentally clicked on &#8220;GET TIMELINE&#8221;&#8230; which follows by a countdown of 7 days until your profile gets the new timeline layout for public. I don&#8217;t want to discuss the quality of it, or any personal opinion here. Let&#8217;s just say, I wasn&#8217;t happy. However I decided to wipe away all the content of my wall. Unfortunately Facebook doesn&#8217;t seem to like this, so they missed to provide any functionality for that. I tried several macros for greasemonkey but the result wasn&#8217;t what I expected&#8230; long story short, I wrote an own script for [iMacros for Firefox][1].

<pre class="brush: javascript; ">VERSION BUILD=7401110 RECORDER=FX
TAB T=1
URL GOTO=https://m.facebook.com/YOUR_USERNAME
TAG POS=1 TYPE=A ATTR=HREF:/delete.php*&&CLASS:sec&&TXT:Remove
TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/delete.php* ATTR=VALUE:Remove

</pre>

Feel free to use this script, but be careful, it literally deletes your wall!

 [1]: http://www.iopus.com/imacros/firefox/