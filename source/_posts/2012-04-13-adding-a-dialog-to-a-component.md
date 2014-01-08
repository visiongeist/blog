---
title: Adding a dialog to a component
author: Damien
layout: post
comments: true
permalink: /2012/04/13/adding-a-dialog-to-a-component/
categories:
  - Adobe CQ5
---
As a result of a discussion with colleagues I&#8217;m posting this information about [Adobe CQ5][1].  Whenever you are creating a dialog for a component, take care how you name it. The label of a dialog must be either &#8220;dialog&#8221; or &#8220;design_dialog&#8221;.

[<img class="aligncenter size-full wp-image-208" title="create_dialog" src="http://damien.antipa.at/wp-content/uploads/2012/04/create_dialog.png" alt="" width="503" height="312" />][2]If you called your dialog something like &#8220;my_dialog&#8221; then it will not work. There is no exception. For an individual name please use the title property. In the first picture of the [documentation of the dialog editor][3] you can see that they are named this way.

 [1]: http://www.adobe.com/products/cq.html
 [2]: http://damien.antipa.at/wp-content/uploads/2012/04/create_dialog.png
 [3]: http://dev.day.com/docs/en/cq/current/developing/developmenttools/dialog_editor.html