Create a Trigger with the following Conditions and Actions
==============================

Conditions
-----------

* Hours Since Update | Greater Than | 1
* Tags | Contains None of the Following | not_assigned_notification_sent
* Assignee | is | -

Actions
-----------

* Add Tags | not_assigned_notification_sent
* Notification | (Choose whatever ever notification method you would like to use)