SLA for 1 hour Unassigned during Business Hours
==============================

Have you ever wanted an SLA for 1 hour only for Unassigned tickets that only applied during Business Hours. If so, then this code is exaclty what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates:
-------
* 04/06/21 - Initial Commit



Knowledge Needed:
-----------
* SLAs

Prerequisites:
-----------

* You must be using Zendesk Support
* You must have edit access to SLAs

How it works (simplified):
--------------

Uses the default ability to order SLAs and the ability for a ticket to get a new SLA based on conditions. 


How to Create:
--------------

* Create an SLA where the only target is "First Reply Time" to "1 hour".
* The only condition required is the "Assignee" is "Not Present"
* Move this SLA above other SLAs if present.
* That's it.

How it works (detailed):
--------------

When tickets come in they receive a Temporary SLA that is set using the "First Reply Time" to "1 hour" target. This SLA will be removed once the ticket is assigned. Then the rest of the SLAs will be applicable. 

Notes:
--------------

If this requires more information/elaboration/photographs, please let me know and I will update it. 

Customizations:
--------------
### None at the moment
