---
layout: post
title: "Remove console.log from production builds with Grunt"
date: 2014-03-18 21:23:05 +0100
comments: true
---
{% codeblock lang:js %}
console.log('Event "dialog-shown" was fired with', event);
{% endcodeblock %}

I believe you are quite familiar with this kind of code snippets in your source code. This is a simple an straightforward way to give you some additional debug information while running your web applications. Super convenient during the development but unacceptable for production. 

What are the options for all these debug information before we ship the next version? Either we remove them again before we release a feature, or we suppress they output or we find a smart solution to remove they code blocks through the build script.

To me, the last option seems to be the best one. How do we achieve that without writing a complex regular expression ourself? The simple trick is to use an often overseen feature of [UglifyJS](https://github.com/mishoo/UglifyJS2). UglifyJS supports to 2 core features which do the job for us. First the possibility to define global "constants" and second dead code removal.

You may use UglifyJS [directly](http://lisperator.net/uglifyjs/compress) to achieve the same though I will use [Grunt](http://gruntjs.com/) for it. The [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) plugin supports both features. 

Start by wrapping all your debug-only code with a non existing variable.

{% codeblock lang:js %}
if (DEBUG) {
	console.log('Event "dialog-shown" was fired with', event);
}
{% endcodeblock %}

Then reconfigure your grunt task similar to this.

{% codeblock lang:js %}
grunt.initConfig({
	uglify: {
		options: {
			compress: {
				global_defs: {
					"DEBUG": false
				},
				dead_code: true
			}
		},
		debug: {
			files: {
				'build/output.min.js': ['src/app.js']
			}
		}
	}
});
{% endcodeblock %}

The output will not contain any of the globally defined constants.
You may also provide a more complex conditional though make sure that it can be evaluated on build time. For instance these can be evaluated on build time and will remove the block when DBEUG equals false.

{% codeblock lang:js %}
if (DEBUG) {
	console.log('Event "dialog-shown" was fired with', event);
}

if (DEBUG && STAGING) {
	console.log('Event "dialog-shown" was fired with', event);
}

if (DEBUG && myLocaleVariable) {
	console.log('Event "dialog-shown" was fired with', event);
}

DEBUG && console.log('Event "dialog-shown" was fired with', event);

{% endcodeblock %}

Conditionals like that will never remove the code block.

{% codeblock lang:js %}
if (DEBUG || myLocaleVariable) {
	console.log('Event "dialog-shown" was fired with', event);
}
{% endcodeblock %}