---
layout: post
title: "Build a Cordova app with AngularJS"
date: 2014-01-05 20:05:50 +0100
comments: true
categories: 
---
Initially I used to develop my iOS applications natively in Objective C. However since I am not doing that on a daily basis, I kind of lost track of newer features and got tired searching through the API to make my way. Luckily I am working with web technology on a daily basis and even more luckily there is [Apache Cordova](http://cordova.apache.org/) (former [Phonegap](http://phonegap.com/)) for quite a while around. 

To bootstrap my new application I quickly started to look around what framework would be best to use. My choice was [AngularJS](http://angularjs.org), for no particular reason other then that I wanted to try how it will work on Cordova.

I will give you a step by step guidance how to set up the environment and bootstrap a new application for Cordova. I will do that with AngularJS and [Yeoman](http://yeoman.io/) though all of this steps can easily done for Ember, Backbone etc. Just use the appropriate [Yeoman Generator](http://yeoman.io/generators.html) to use a different framework.

##Requirements
- [Node.js](http://nodejs.org/)
- For iOS: [XCode](https://developer.apple.com/xcode/) and Command Line Tools
- For Android: [Android SDK](http://developer.android.com/sdk/index.html), [Eclipse](http://www.eclipse.org/downloads/) + [ADT Plugin](http://developer.android.com/tools/sdk/eclipse-adt.html)

The node package manager will help us to install Cordova globally through the shell

{% codeblock lang:sh %}
npm install -g cordova
{% endcodeblock %}

as well as Yeoman

{% codeblock lang:sh %}
npm install -g yeoman

// and the AngularJS generator for Yeoman
npm install -g generator-angular
{% endcodeblock %}

On Mac OSX and Unix you have to execute this with root permissions. Yeoman will also install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) for you.

Now you are ready to create a new cordova project, simply navigate to your workspace folder and execute

{% codeblock lang:sh %}
cordova create kitchensink io.visiongeist.kitchensink "KitchenSinkApp"
{% endcodeblock %}

This will create your new Cordova app under /kitchensink. You should see a structure like that

{% img /images/post/cordova-bootstrap-structure.jpg Cordova new project directory structure %}

For your development you will mainly focus what goes under "www" and "platforms". Let's start adding target platforms. I would like to have my KitchenSinkApp on iOS and Android.

{% codeblock lang:sh %}
cordova platform add ios
cordova platform add android
{% endcodeblock %}

Addtionally I would like to add the [Compass plugin](http://cordova.apache.org/docs/en/2.9.0/cordova_compass_compass.md.html) to my project.

{% codeblock lang:sh %}
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
{% endcodeblock %}

Eventually the project is ready to be combined with the web application. We create a new folder in the project and let Yeoman bootstrap an AngularJS app for us.

{% codeblock lang:sh %}
// create a new folder
mkdir webapp && cd webapp

// bootstrap the application
yo angular kitchensink
{% endcodeblock %}

Follow the dialog to create a new Angular project structure and have a look at the [Angular Generator](https://github.com/yeoman/generator-angular
), it provides you plenty of useful commands to add views, controllers, services etc.

I recommend you not to directly create an Angular project in the /www folder even though it would work. Having all depending node modules in there will cause a massive application size and takes lots of compiling time.

To build The Angular project use the Grunt configuration given by Yeoman.

{% codeblock lang:sh %}
// to build
grunt

// and for a preview
grunt serve
{% endcodeblock %}

This will generate a build output in your webapp folder under /dist. In order to integrate the files into your Cordova project you will either need to copy the contents of this folder to /www. You may do that manually, change the grunt script or build a shell script, I leave that up to you. 

Now navigate back to your Cordova app and execute the build command to create or update the project.

{% codeblock lang:sh %}
// to build all platforms
cordova build

// or for a specific platform
cordova build ios
{% endcodeblock %}

That's it. All your different builds are available under /platforms
