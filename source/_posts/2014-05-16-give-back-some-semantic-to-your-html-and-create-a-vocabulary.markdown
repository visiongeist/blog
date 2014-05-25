---
layout: post
title: "Give back some semantic to your HTML (and create a vocabulary)"
date: 2014-05-16 11:51:23 +0200
comments: true
---


My dear colleague [Christanto](https://twitter.com/christanto_leo) keeps promoting the advantages of the markup-driven APIs at work. And started to establish the core principles into [Adobe Experience Manager](http://www.adobe.com/solutions/web-experience-management.html). Therefor he deserves the credit for this information.

Before we will have a look of how markup-driven APIs work, let's see what the browser gives us by default. What you see here is a simple form with two input elements and a button. 

{% codeblock lang:html %}
<form action="createpage" method="post">
	<p><label>Title <input required /></label> *</p>
	<p><label>Language</label>
	<select>
		<option>Chinese</option>
		<option selected>English</option>
		<option>French</option>
		<option>German</option>
		<option>Italian</option>
		<option>Japanese</option>
		<option>Korean</option>
		<option>Portuguese</option>
		<option>Spanish</option>
	</select>
	</p>
	<input type="submit" value="Create" />
</form>
{% endcodeblock %}

The good thing about this form is that it is immediately functional. I follows a standardised vocabulary which gives the required elements a semantic. Basically every browser and screenreader will be able to leverage the default behaviour. All Basic interaction works as expected without any further effort.

At this point, clicking on the button will submit the data synchronously to the server. This comes for free and works just by describing the form with plain HTML.

Let's assume we want to enhance the form with validation, sending the request asynchronously or even do not want any server communication? Most of the time people would just add another Javascript snippet which listens to the submit event (here with jQuery).

{% codeblock lang:js %}
$('form').on('submit', function () {
	// let's do sth
});
{% endcodeblock %}

Though unlike using plain HTML this lacks of any obvious semantic and requires more knowledge about the binding and trigger time to make it functional... and the worst, a human who is reading the markup does not know what's going on and why it is in place.

So what if we want to write the form as we used to do it in the old times? Giving back some meaning to the HTML we actually use. The good news is, that HTML supports that and others already went down this road [ARIA](http://www.w3.org/WAI/intro/aria.php), [microformats](http://en.wikipedia.org/wiki/Microformat), [RDFa](http://en.wikipedia.org/wiki/RDFa)

Using the micro formats approach will make custom code obsolete. A simple example is history management. Instead of using Javascript to bind an event handler to a button which executes *history.back()*, we can start to give the button back its semantic by creating a meaningful vocabulary with standard HTML.

{% codeblock lang:html %}
<button class="history-control" data-direction="back">Back in Time</button>
{% endcodeblock %}

Now we used natural language to express what's the button's purpose. It is described in a way that a human can easily read it and understand it. We defined a word which describes the action called **control** which lives in the namespace **history**. It is implemented as a standard CSS class. Additional options for the **control** word are passed through data attributes.

Let's have a look at another example. I think the quite popular [Todo](http://todomvc.com/) list would help to get better understanding.

In a Todo application we have plenty of list entries, a way to select several of the entries and a delete button to trigger a delete operation on the previously selected ones. For simplicity let's assume clicking on the entry will select or deselect it. To achieve this we define two different collections. The general *todo-collection* which contains all available items and a *todo-selection* which contains the currently selected items.

{% codeblock lang:html %}
<ul class="todo-collection">
	<li class="todo-collection-item">Item 1</li>
	<li class="todo-collection-item todo-selection-item">Item 2</li>
	<li class="todo-collection-item">Item 3</li>
</ul>
<button 
	class="todo-deleteItem" 
	data-target=".todo-collection-item.todo-selection-item">
	Delete
</button>
{% endcodeblock %}

We annotate the collection of todo items and each single item. In the example we can see that one item is also part of the selection group *todo-selection-item*. A defined button *todo-deleteItem* allows to define a target with a selector which can be queried cross the document. Though how the connection between the button and the items is created, is a implementation detail. We could also set a more complex definition (for instance a JSON object) in the target attribute.

By doing all this, we created a HTML markup which clearly describes the actions connected to it. This means:

* Your markup gets a semantic
* Readable by human in a native language
* Understandable without the need of searching through a list of Javascript functions.
* The markup is the API which decouples it from the actual implementation
* If done properly, your functionality improves its reusability

In real application defining your vocabulary is bound to some more prerequisites in order to make it more practical.

* namespace your vocabulary to prevent a 3rd party component to interfere with styling or functionality.
* Dash ("-") is not a word but a namespace and sub-item separator
* Think of your actions as a dictionary which contains words to describe an operation

This the basic concept, I will provide a follow up soon.

