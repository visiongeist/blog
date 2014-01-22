---
title: How to detect DOM manipulations (with jQuery)
author: Damien
layout: post
comments: true
permalink: /2012/08/20/how-to-detect-dom-manipulations-with-jquery/
geo_latitude:
  - 47.557421
geo_longitude:
  - 7.592572700000005
geo_address:
  - Basel, Basel-Stadt, Switzerland
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
tags:
  - JQuery
  - Plugin
---
Detecting any changes in the current DOM is not an easy task even though some current browsers support to listen to <a title="mutation events" href="https://developer.mozilla.org/en-US/docs/DOM/Mutation_events" target="_blank">mutation events</a>. These mutation events got recently deprecated in favor of <a href="http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#mutation-observers" target="_blank">DOM Mutation Observers</a> and for a good reason. Mutation events cause performance issues and lacking of <a href="http://help.dottoro.com/ljfvvdnm.php#additionalEvents" target="_blank">cross browser support</a>. The mutation events look promising but specification is still a draft and I guess that it would take a while until they are fully supported on all major browsers.

If you still need to detect changes like me and you are using jQuery (or any other library) to do your manipulation you can use this gist to hook into your library to detect changes. Instead of detecting changes on the DOM we just detect manipulating function calls. This plugin injects a function call after a jQuery function was called. The configuration is fairly easy. jQuery.hook(&#8216;append&#8217;, myFunc) would call myFunc after jQuery.append was called.

{% codeblock lang:js %}
/*
 * Function hook jQuery plugin
 * version 1.0
 * author: Damien Antipa
 * http://github.com/dantipa/
 */
(function(window, $, undefined){

    /**
     * Hooks into a given method
     * 
     * @param method
     * @param fn
     */
    $.fn.hook = function (method, fn) {
        var def = $.fn[method];

        if (def) {
            $.fn[method] = function() {
                var r = def.apply(this, arguments); //original method
                fn(this, method, arguments); //injected method
                return r;
            }
        }
    }

})(window, jQuery);
{% endcodeblock %}
