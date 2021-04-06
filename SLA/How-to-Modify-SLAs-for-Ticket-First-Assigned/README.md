How to Modify SLAs for Ticket First Assigned
==============================

Have you ever wanted an SLA for Ticket First Assigned. If so, then this code is exaclty what you are looking for.

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

* Create an SLA where the only target is First Reply Time.
* The only condition required is the "Assignee" is "Not Present"
* Move this SLA above other SLAs if present. 
* That's it.

How it works (detailed):
--------------

When tickets come in they receive a Temporary SLA that is set using the "First Reply Time" target. This SLA will be removed once the ticket is assigned. Then the rest of the SLAs will be applicable. 

My Specific Example:
--------------

* Create an SLA called "Assign within 1 Hour" where the only target is "First Reply Time "set to "1 hour". I have mine set to Business Hours but feel free to customize to meet your needs.
* The only condition for this SLA is "Assignee" is "Not Present" In my circumstances, all end users on Zendesk have this default SLA but your circumstances may vary.
* This SLA needs to be moved to the top of the list so it takes precedence when SLAs are assigned.
* The next SLA I have is called "Response Times" and this is where I set the correct SLA time frames.
* The conditions for this SLA are essentially all tickets. Again in my case, this is how we want it. Adjust as necessary to meet your needs.


Notes:
--------------

* If this requires more information/elaboration/photographs, please let me know and I will update it. 

Customizations:
--------------
### None at the moment
