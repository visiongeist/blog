---
title: APEX Webcam Plugin
author: Damien
layout: post
comments: true
permalink: /2012/03/01/apex-webcam-plugin/
geo_latitude:
  - 48.856614
geo_longitude:
  - 2.352221900000017
geo_address:
  - Paris, Île-de-France, France
geo_enabled:
  - 1
geo_public:
  - 1
categories:
  - Application Express
tags:
  - Application Express
  - JQuery
  - PL/SQL
  - Plugin
---
This plugin allows you to receive pictures of a webcam in a PL/SQL execution. I used a jquery plugin from [xarg.org][1].

After installation, t is pretty simple to handle though you have to grab the BLOB from the collection on your own. Create a new page item from the webcam plugin and look at the attribute &#8220;PL/SQL execution&#8221;.

<pre class="brush: sql; ">DECLARE
c_collection_name constant varchar2(200) := &#039;CLOB_CONTENT&#039;;
l_blob BLOB;
BEGIN
select apex_web_service.clobbase642blob(substr(clob001, instr(clob001, &#039;,&#039;)+1, length(clob001))) into l_blob
from apex_collections
where collection_name = c_collection_name;

insert into table1(id, img) values (1, l_blob);
END;

</pre>

In the example above a local variable l_blob holds the image and you can easily write it into a table with a BLOB column. Additionally you can pass page/application items to the PL/SQL execution to use them like regular APEX bind parameters.

[<img class="aligncenter size-medium wp-image-171" title="webcam_config" src="http://damien.antipa.at/wp-content/uploads/2012/03/webcam_config-300x101.jpg" alt="" width="300" height="101" />][2]

Requirements: Flash, HTML5 (canvas)

Download [item\_type\_plugin\_at\_nethead\_apex\_webcam.sql][3]

 [1]: http://www.xarg.org/project/jquery-webcam-plugin/
 [2]: http://damien.antipa.at/wp-content/uploads/2012/03/webcam_config.jpg
 [3]: http://damien.antipa.at/wp-content/uploads/2012/03/item_type_plugin_at_nethead_apex_webcam.sql_.zip