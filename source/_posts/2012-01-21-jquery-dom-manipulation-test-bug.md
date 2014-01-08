---
title: jQuery DOM Manipulation test (bug?)
author: Damien
layout: post
comments: true
permalink: /2012/01/21/jquery-dom-manipulation-test-bug/
categories:
  - Javascript
  - web development
tags:
  - JQuery
---
<div id="test-21012012">
  <div>
    I discovered something really weird when I needed to manipulate the DOM with jQuery (1.7.1)&#8230;.<br /> check the log and the source with Firebug and you will see what I mean!
  </div>
  
  <div id="test1">
    </p>
  </div>
  
  <div id="test2">
    </p>
  </div>
</div>

If you are interested to analyze the script, here is a [separate file][1] with the complete test. Maybe you will find an answer for me :)

 [1]: http://damien.antipa.at/wp-content/uploads/2012/01/jquery_test.html "jQuery DOM manipulation test with weird behavior"