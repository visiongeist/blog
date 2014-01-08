---
title: 'jQuery Plugin: Confirmation'
author: Damien
layout: post
comments: true
permalink: /2011/10/04/jquery-plugin-confirmation/
categories:
  - Javascript
  - web development
tags:
  - Bootstrap
  - JQuery
---
I needed a simple way in a project to generate a common confirmation dialog for Links which fire delete operations. Cause we are already using [jQuery][1] and [Bootstrap from Twitter][2], I decided to create a jquery Plugin which uses the Bootstrap [Popovers][3] to confirm these actions.  
[<img class="size-medium wp-image-37 aligncenter" title="jquery.popover.dialog" src="http://damien.antipa.at/wp-content/uploads/2011/10/jquery.popover.dialog-300x123.png" alt="" width="300" height="123" />][4]It is pretty simple, when a user clicks on a link the Popup appears. The red button in the popup automatically uses the anchor text but the message and the cancel button text can be set through options.

<pre class="brush: javascript; ">$(&#039;a.confirm&#039;).confirmDialog({
message: &#039;&lt;strong&gt;Do you really want to delete this entry&lt;/strong&gt;&#039;,
cancelButton: &#039;Cancel&#039;
});
</pre>

If anyone wants to use it: [jquery.bootstrap.confirm.popover][5]

 [1]: http://jquery.com/
 [2]: http://twitter.github.com/bootstrap/
 [3]: http://twitter.github.com/bootstrap/#popovers
 [4]: http://damien.antipa.at/wp-content/uploads/2011/10/jquery.popover.dialog.png
 [5]: http://damien.antipa.at/wp-content/uploads/2011/10/jquery.bootstrap.confirm.popover.js