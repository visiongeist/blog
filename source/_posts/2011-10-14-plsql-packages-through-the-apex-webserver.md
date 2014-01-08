---
title: PL/SQL packages through the APEX Webserver
author: Damien
layout: post
comments: true
permalink: /2011/10/14/plsql-packages-through-the-apex-webserver/
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
  - PL/SQL
---
The integrated web server of Oracle Application Express allows you to access PL/SQL packages through a simple HTTP call, like that: http://my-server/apex/package.procedure . So it is possible to produce output within your package through the Oracle build-in HTP package.

First it is necessary to grant execute rights to the APEX\_PUBLIC\_USER to let him access the package:

<pre class="brush: sql; ">GRANT execute ON mypackage TO apex_public_user;

</pre>

Second there is a function in your apex schema (e.g. apex\_040000 depends on the actual version) called wwv\_flow\_epg\_include\_mod\_local. This function is responsible for the access management. Each time someone tries to call a procedure over http, the function will be asked if it is allowed to execute the requested procedure. If you want to implement any complex authorization handling, do everything necessary in this function. Here is a simple example how to restrict the access:

<pre class="brush: sql; ">create function wwv_flow_epg_include_mod_local (procedure_name in varchar2)
return boolean
is
begin
    if upper(procedure_name) like (
          &#039;schema.http_package%&#039;) then
        return TRUE;
    else
        return FALSE;
    end if;
end wwv_flow_epg_include_mod_local;

</pre>