How to include Article in Multiple Sections
==============================

Have you ever wanted a way to add an article to multiple section of the Help Center without having to duplicate the effort and changes. If so, then this code is exactly what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates
-------
* 04/06/21 - Initial Commit



Knowledge Needed
-----------
* Guide Template Editing
* JS

Prerequisites:
-----------

* You must be using Zendesk Help Center.
* You must have access to the article_page.hbs file.
* Your customers must allow Javascript in their browser.

How it works (simplified):
--------------

If an article ID is a label in an article, the article will be redirected to the article ID in the label.

How to Install:
--------------

* Navigate to the Guide Admin Center to edit the themes.
* Add the code to the respective locations within the appropriate tags.
* To test add an article ID to the tag of an article.
* That's it.

How to Use It:
--------------

Once the code has been implemented, all that is necessary is for an article ID to be added as a label to the article.


How it works (detailed):
--------------

Code takes the article's labels and adds them to an array aptly named "labels"

Code then checks to see if the labels array exists. If it does, it searches the labels for a number that is larger than 200000000. If there is a match, the page is redirected to the article page of the label. 


Notes:
--------------

* This is not a true duplicate or replication of data in the articles. It is simply a redirect to another article.
* There is plenty of validation that can be added for article IDs added to the label.
* This is more of a proof of concept than anything else.
* It does work as is but there may be issues if the labels are not validated and an invalid label is added.
* If anyone would like to add some validation or other code improvements, I have no issue with updating the article to reflect.
* Removed the need to manually adjust the code for the specific subdomain and language. It should pull the current language and subdomain for use in redirection.

Troubleshooting:
--------------

You should not have to place the code on a specific line/section in the file. 

That being said, I put the code for the article_page.hbs at the very top. Make sure you are not putting the code inside another code block. This could stop the code from working.
![image](https://user-images.githubusercontent.com/24377175/113754098-da0a1f00-96dc-11eb-808c-08d2f9e5a58f.png)


I have included some console logging to help diagnose any issues.

Open any article and pull up the console (usually the console can be opened with control + shift + i) and see if something along the lines of the following is visible:
![image](https://user-images.githubusercontent.com/24377175/113754109-df676980-96dc-11eb-8393-d7689d2e88b3.png)


If you do not see "Labels:" and an array then the issue may reside in the implementation of the code in the file.

Customizations:
--------------
### None at this time
