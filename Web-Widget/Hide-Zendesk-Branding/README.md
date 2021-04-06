Hide Zendesk Branding on Web Widget
==============================

Have you ever wanted an easy way to remove the Zendesk Branding on your Web Widget. If so, then this code is exaclty what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates
-------
* 04/05/21 - Initial Commit



Knowledge Needed
-----------
* CSS
* HTML
* JS

Prerequisites:
-----------

* You must be using Zendesk Support
* You must have access to the Web Widget
* You must be able to modify the code where the Web Widget will be inserted as HTML

How it works (simplified):
--------------

Uses the default ability to run Javascript on Web Widget open to append CSS to the Web Widget itself.

How to Install
--------------

* Copy the default Web Widget Script from the admin menu in the Agent interface.
* Navigate to the website where you will be inserting the Web Widget.
* Paste the HTML code into the HTML source code of the website.
* Below where the code has been inserted, input the code in index.js.
* Adjust the CSS to match your needs.
* That's it.

How it works (detailed):
--------------

There is a command in the Web Widet API that allows you to run Javascript when the Web Widget opens, outlined here: https://developer.zendesk.com/embeddables/docs/widget/introduction#commands . Using this command, the Web Widget will be able to inject predefined CSS into its own code. This CSS will be inserted with the other CSS of the Web Widget and therefore will allow user-defined CSS to modify the look and feel of the Web Widget.

Notes:
--------------

* If this requires more information/elaboration/photographs, please let me know and I will update it.

Customizations
--------------
### None at the moment
