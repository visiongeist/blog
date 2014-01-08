---
title: 'jQuery Plugin: Tight HTML5 File Drag and Drop'
author: Damien
layout: post
comments: true
permalink: /2012/02/29/jquery-plugin-tight-html5-file-drag-and-drop/
geo_latitude:
  - 48.2
geo_longitude:
  - 16.366999999999962
geo_address:
  - Vienna, Wien, Austria
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Javascript
  - Uncategorized
---
  


I know this not something new and I know there are many good jQuery plugins out there which help to create HTML5 drop fields. But I needed a really tight one with a small footprint. My solution has 270 bytes ([YUI Compressor][1], minified and gzipped) and the sourcecode is accepted by [JSLint][2] :)

<div id="dropper" style="border: 3px dashed #000; line-height: 100px; height: 100px; text-align: center; width: 400px;">
  Drop files here
</div>

My plugin just handles the file dropping and passes each dropped file to a callback function. In the example above I used a callback function to send each file to the server asynchronously.

<pre class="brush: javascript; ">$(&#039;#dropper&#039;).filedrop({
	callback : function (file) {
		var data = new FormData();
		data.append(&#039;file&#039;, file);
		
		$.ajax({
		    url: &#039;/wp-content/uploads/filedrop/testUpload.php&#039;,
		    data: data,
		    cache: false,
		    contentType: false,
		    processData: false,
		    type: &#039;POST&#039;,
		    success: function(data){
		        alert(data);
		    }
		});

	}
});

</pre>

Download [jquery.filedrop][3]

 [1]: http://developer.yahoo.com/yui/compressor/
 [2]: http://www.jslint.com/
 [3]: http://damien.antipa.at/wp-content/uploads/2012/02/jquery.filedrop.js