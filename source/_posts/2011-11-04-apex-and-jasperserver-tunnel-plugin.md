---
title: APEX and JasperServer Tunnel + Plugin
author: Damien
layout: post
comments: true
permalink: /2011/11/04/apex-and-jasperserver-tunnel-plugin/
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
  - Application Express
tags:
  - Application Express
  - Jasper Server
  - PL/SQL
  - Plugin
---
Application Express provides a good integration of the Oracle BI Publisher, not everyone wants to invest in this pretty expensive piece of software. A good open source alternative is JasperReports. I think most of the APEX developer out there use it. So do I!

Hopefully you are familiar with the concept but here a short explanation. JasperReports is a open source Java Modul to generate different report outputs. For easier use there is a Server Application available called JasperServer. In fact this server is a Apache Tomcat bundled with JasperReports, an Administration for the report files and configuration and several other moduls. However, reports can be called through a URL. All information which is necessary to execute a report on the server will be passed through GET parameters, including the authentication data in plain text.

<pre class="brush: html; ">http://localhost:8084/jasperserver/flow.html?_flowId=viewReportFlow&amp;amp;reportUnit=%2Freports%2Fsamples%2FAllAccounts&amp;amp;output=pdf&amp;amp;


</pre>

You can now create a Button or Link in APEX and redirect to this URL to see a report, but obviously this is not the way how passwords should be transfered&#8230;.

For that reason I wrote a package in PL/SQL, which makes it possible to tunnel all requests to hide login data and to close the jasperserver port to public.

You can download [my package including the APEX plugin here][1] but first please read the tutorial.

HOW TO INSTALL THE PACKAGE  
========================

1.  Just install the including two sql files: jasperserver.pkg.sql and jasperserver.pkg.body.sql
2.  Give the execution rights of the sys package utl_http to your apex schema user like that(Please change the username):  <pre class="brush: sql; ">grant execute on utl_http to scott;
</pre>

3.  For 11g only: Configure the ACL list for the utl_http packge to give your apex schema user the permission to establish a connection. (Please change the username of your apex user, host and port of your JasperServer installation) <pre class="brush: sql; ">begin
dbms_network_acl_admin.create_acl (
acl         =&gt; &#039;utl_http.xml&#039;,
description =&gt; &#039;HTTP Access&#039;,
principal   =&gt; &#039;SCOTT&#039;,
is_grant    =&gt; TRUE,
privilege   =&gt; &#039;connect&#039;,
start_date  =&gt; null,
end_date    =&gt; null
);dbms_network_acl_admin.add_privilege (
acl        =&gt; &#039;utl_http.xml&#039;,
principal  =&gt; &#039;SCOTT&#039;,
is_grant   =&gt; TRUE,
privilege  =&gt; &#039;resolve&#039;,
start_date =&gt; null,
end_date   =&gt; null
);dbms_network_acl_admin.assign_acl (
acl        =&gt; &#039;utl_http.xml&#039;,
host       =&gt; &#039;localhost&#039;,
lower_port =&gt; 8080,
upper_port =&gt; 8080
);
commit;
end;
</pre>

4.  The testcase explains how to set the parameter and call the report <pre class="brush: sql; ">DECLARE
P_REPORT_NAME VARCHAR2(200);
P_PARAMETER JASPERSERVER.TYPE_PARAMETER;
BEGIN
P_REPORT_NAME := &#039;AllAccounts&#039;;
P_PARAMETER(&#039;p1&#039;) := &#039;val1&#039;;
P_PARAMETER(&#039;p2&#039;) := &#039;val2&#039;;JASPERSERVER.port := 8084;
JASPERSERVER.reports_folder := &#039;/reports/samples/&#039;;JASPERSERVER.CALL_REPORT(
P_REPORT_NAME =&gt; P_REPORT_NAME,
P_PARAMETER =&gt; P_PARAMETER
);
END;

</pre>

5.  You can change the following parameters for your needs within the package <pre class="brush: sql; ">host            VARCHAR2(255);
port            NUMBER(5,0);
path            VARCHAR2(255);
username        VARCHAR2(255);
password        VARCHAR2(255);
https           BOOLEAN;
reports_folder  VARCHAR2(255);
output_format   VARCHAR2(50);
</pre>

6.  Now everything is ready to be used in the APEX. There are two ways to achieve that. You can copy the testcase code in a on-demand process or in a page process which is executed &#8220;Before Header&#8221;
7.  That&#8217;s it, but instead of point 4 to 6 you can use the included APEX Plugin

&nbsp;

HOW TO USE THE PLUGIN  
=====================  
Everything is straight forward and most parameters are self explainable. Just look at the screens of the plugin settings and the process settings.

[<img class="aligncenter size-medium wp-image-110" title="plugin_options" src="http://damien.antipa.at/wp-content/uploads/2011/11/plugin_options-300x142.png" alt="" width="300" height="142" />][2]<a><img class="aligncenter size-medium wp-image-111" title="process_options" src="http://damien.antipa.at/wp-content/uploads/2011/11/process_options-300x192.png" alt="" width="300" height="192" /></a>

If you want to use parameters for the report, choose a page item which contains a string in this pattern: param1=val1&param2=val2

That&#8217;s it a simple and clean solution to tunnel your reports.

Cheers

 [1]: http://damien.antipa.at/wp-content/uploads/2011/11/jasperserver_plugin.zip
 [2]: http://damien.antipa.at/wp-content/uploads/2011/11/plugin_options.png