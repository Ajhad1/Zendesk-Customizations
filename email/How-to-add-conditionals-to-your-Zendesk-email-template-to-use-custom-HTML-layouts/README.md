How to add conditionals to your Zendesk email template to use custom HTML layouts
==============================

Have you ever wanted a way to add different custom HTML layouts to your Zendesk email template. If so, then this code is exaclty what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates
-------
* 04/06/21 - Initial Commit



Knowledge Needed
-----------
* Liquid
* HTML
* Email Template Editing
* Trigger Template Editing

Prerequisites:
-----------

* You must be using Zendesk Support
* You must have edit access to the email template.
* You must have edit access to the triggers.

How it works (simplified):
--------------

An invisible HTML element is added to each trigger that allows for parsing at the email template level. 


How to Install
--------------

* Add code to the respective locations.
* Modify conditional based on your needs.
* That's it.

How to Use It:
--------------

Pass whatever data needed for the conditional. Modify the conditional to search for whatever data is required.

How it works (detailed):
--------------

A "div" is created with an attribute added that includes any data to be parsed at the email template level. This "div" is not displayed to email recipients using the "display:none;" style.

At the email template level the attribute is parsed and is used to activate a conditional. 

Explanation:
--------------

In this example, I am passing the {{ticket.tags}} in the invisible "div" and then escaping the {{content}} and then creating an array by parsing the {{content}} using a space as a delimiter.

This allows for a conditional to check for specific tags in the {{content}} without having the recipient seeing them. 

Notes:
--------------

* There is plenty of things that can be done to avoid false positives. The first that comes to mind is only running the conditional on the invisible "div"
* This is more of a proof of concept than anything else.
* This does work as is but there may be issues with false positives.
* If anyone would like to add some validation or other code improvements, I have no issue with updating the article to reflect.

Troubleshooting:
--------------

For troubleshooting, you can use the following code to give a better idea of what is being run through the conditional. 

```
{% for k in contents %}
{{k}}{% if k == 'test_send_email' %}=true{% else %}=false{% endif %}
{% endfor %}
```

This should output each item with its outcome based on the condition.

Customizations
--------------
### None at the moment
