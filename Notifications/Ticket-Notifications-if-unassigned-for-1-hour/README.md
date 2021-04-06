Ticket Notifications if unassigned for 1 hour
==============================

Have you ever wanted a way to get notifications if a ticket has been unassigned for 1 hour. If so, then this code is exactly what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates
-------
* 04/06/21 - Initial Commit



Knowledge Needed
-----------
* Automations
* Triggers

Prerequisites:
-----------

* You must be using Zendesk Support
* You must be able to edit/add Triggers
* You must be able to edit/add Automations

How it works:
--------------

Uses an automation to check to see if a ticket has been unassigned for more than 1 hour. 


How to Install
--------------

* Create an automation based on the Conditions and Actions in Automation.md
* Create a Trigger based on the Conditions and Actions in Trigger.md
* That's it.


Notes:
--------------

* If this requires more information/elaboration/photographs, please let me know and I will update it.
* Due to the limitations of Automations, there is no current way to make the notification interval smaller than 1 hour. 
* Due to the limitations of Automations, the notification will not be exactly 1 hour after the ticket was received. 
* The steps listed above defaults to be notified between 1 and 2 hours. 

Customizations
--------------
### To adjust the notifications to be between 0 and 1 hour. Use the below instead of the listed above.
* Hours Since Update | Greater Than | 0