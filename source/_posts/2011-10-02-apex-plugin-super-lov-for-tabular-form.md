---
title: APEX Plugin Super LOV for Tabular Form
author: Damien
layout: post
comments: true
permalink: /2011/10/02/apex-plugin-super-lov-for-tabular-form/
geo_latitude:
  - 48.2793205
geo_longitude:
  - 14.253794200000016
geo_address:
  - Leonding, Upper Austria, Austria
geo_enabled:
  - 1
geo_public:
  - 0
categories:
  - Application Express
tags:
  - Application Express
  - JQuery
  - Oracle
  - PL/SQL
  - Plugin
  - Web application
---
For an actual Application Express project I needed a way to choose a value from a modal dialog for a field in a page. Normally I could use the build in LOV or a simple <select> object but the problem is that the user needs to see more than one value of a data row. I don&#8217;t want to talk about the project but if u image u have a customer who operates a supermarket chain. So every store of the chain has the same name. Imagine the user of the application has to choose one of the stores out of a list of all available stores to deliver some products. Obviously the user needs to see additional attributes (e.g. city, zip code&#8230;) to choose the right store. I was lucky because I found a pretty plugin called [Super LOV][1]. This plugin allows you to open a modal dialog for that need for a PAGE ITEM only.

[<img class="size-medium wp-image-14 aligncenter" title="Super LOV Demo 2011-09-29 12-57-37" src="http://damien.antipa.at/wp-content/uploads/2011/09/super-lov-demo-2011-09-29-12-57-37.png?w=300" alt="" width="300" height="135" />][2]

In my case it was necessary to use it within a tabular form. So after some hacking and extending I know my solution is not the cleanest (because I&#8217;m using the old object to trigger the necessary dialog) but it is working smooth.

Just create a PAGE_ITEM as a plugin type of this plugin (the page item will not be visible) and configure it as described. Additionally create a tabular form with a LOV column. Now edit the page item and set the <a>Tabular Form LOV Column as seen in the pictures.</a>

[<img class="size-medium wp-image-16 aligncenter" title="Create Item - Settings 2011-09-29 13-07-53" src="http://damien.antipa.at/wp-content/uploads/2011/09/create-item-settings-2011-09-29-13-07-53.png?w=300" alt="" width="300" height="124" />][3]

[<img class="size-medium wp-image-17 aligncenter" title="Report Attributes 2011-09-29 13-09-10" src="http://damien.antipa.at/wp-content/uploads/2011/09/report-attributes-2011-09-29-13-09-10.png?w=300" alt="" width="300" height="139" />][4][  
][5]

Try to click now on the LOV button in the report column and the modal dialog will appear instead of the standard LOV.

You can download the plugin here: [at\_nethead\_tabular\_form\_super_lov][6]

Update[03rd Oct. 2011]:

Unfortunatly I forgot to post the link to the original creators of the Super LOV Plugin. For the major work of the plugin the credits go to [Skillbuilders][7]. Thanks for your work and thanks for releasing it under GPL & MIT license.

 [1]: http://www.apex-plugin.com/oracle-apex-plugins/item-plugin/skillbuilders-super-lov_75.html
 [2]: http://damien.antipa.at/wp-content/uploads/2011/09/super-lov-demo-2011-09-29-12-57-37.png
 [3]: http://damien.antipa.at/wp-content/uploads/2011/09/create-item-settings-2011-09-29-13-07-53.png
 [4]: http://damien.antipa.at/wp-content/uploads/2011/09/report-attributes-2011-09-29-13-09-10.png
 [5]: http://damien.antipa.at/wp-content/uploads/2011/09/super-lov-demo-2011-09-29-12-57-371.png
 [6]: http://damien.antipa.at/wp-content/uploads/2011/10/at_nethead_tabular_form_super_lov1.zip
 [7]: http://skillbuilders.com/apex