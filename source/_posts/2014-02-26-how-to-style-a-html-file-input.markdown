---
layout: post
title: "How to style a HTML file input"
date: 2014-02-26 20:55:24 +0100
comments: true
---
<link rel="stylesheet" href="/examples/css/fileupload.css" type="text/css" />


I know this is far away from being a new topic but since I recently discovered that people are still struggling to create a nicely styled file upload which fits seamlessly into the interface, I decided to create an overview about how to handle this issue.

First of all **do not try to style it directly**, you will fail to be successful. The amount of CSS directives which can be used on an input[type=file] is rather limited.

<input type="file" id="fileupload-example-1"/>

{% codeblock lang:css %}
#fileupload-example-1 {
    background: #999999;
    color: #ffffff;
    font-size: 18px;
    border: 2px solid red;
}
{% endcodeblock %}

As you can see this will not lead to any useful modern appearance. Playing with some non-standard directives gives you a little more freedom in styling.

<input type="file" id="fileupload-example-2"/>

{% codeblock lang:css %}
#fileupload-example-2 {
    -webkit-appearance: button; 
    -moz-appearance: button;
}
{% endcodeblock %}

The pseudo element *::-webkit-file-upload-button* allows you to directly style the button part of the input element in Webkit based browsers but I haven't figured out in which version they started to support this.

<input type="file" id="fileupload-example-3"/>

{% codeblock lang:css %}
#fileupload-example-3::-webkit-file-upload-button {
    color: white;
    border: 1px solid green;
    border-radius: 5px;
    background: red;
}
{% endcodeblock %}

As you see it is not a trivial task and styling directly will not bring you anywhere. So I found 3 solutions left which may are may not be more successful.

### 1. Programmatically trigger a click
You may simply create any layout element anywhere on the page. A button or an image is totally acceptable. By binding an event listener to the click event of this element you can simply fire another click event on the file input element to cause the dialog to open.

{% codeblock lang:js %}
$('img#mytrigger').on('click', function () {
	$('#fileupload-example-1').trigger('click');
});
{% endcodeblock %}

This sounds simple and worked for me in most cases though some browsers like IE and Firefox have security restrictions on that. So it occurred to me that the programmatically triggered click did not open the dialog or it did open the dialog in IE and later on I couldn't submit the form. *I do not recommend to use this method* 

### 2. Provide a label for the input field
Providing a label for the input field is a cross browser solution. You simply hide the input field by setting its size to zero and style the label as it would be a button or whatever you want to have.

<input type="file" id="fileupload-example-4"/>
<label id="fileupload-example-4-label" for="fileupload-example-4">Click me</label>

{% codeblock lang:css %}
#fileupload-example-4 {
	height: 0;
	width: 0;
}

#fileupload-example-4-label {
    border: 1px solid #cccccc;
    padding: 5px;
}
{% endcodeblock %}

{% codeblock lang:html %}
<input type="file" id="fileupload-example-4"/>
<label id="fileupload-example-4-label" for="fileupload-example-4">Click me</label>
{% endcodeblock %}

### 3. Wrap the input field
A simple visual trick allows you to hide the file input inside a wrapping element which provides the wanted styling. By making the file input invisible (but clickable) and the same size as the wrapping element, the user will click the input field directly when he wants to click the designed element.

<button id="fileupload-example-5"><input type="file"/><span>click me</span></button>

{% codeblock lang:css %}
#fileupload-example-5 {
    position: relative;
    overflow: hidden;
}

#fileupload-example-5 input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.001
}
{% endcodeblock %}

{% codeblock lang:html %}
<button id="fileupload-example-5">
    <input type="file">
    <span>click me</span>    
</button>
{% endcodeblock %}