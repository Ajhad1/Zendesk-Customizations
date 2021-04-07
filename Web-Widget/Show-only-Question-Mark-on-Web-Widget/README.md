Show only Question Mark on Web Widget
==============================

Have you ever wanted a way to show only the question mark on your Web Widget. If so, then this code is exactly what you are looking for.

A fair amount of time and effort went into this solution.  If you use it then show your love.

<a href='https://ko-fi.com/Y8Y346MT1' target='_blank'><img height='100' style='border:0px;height:100px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Updates
-------
* 04/06/21 - Initial Commit



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
* Above where the code is to be inserted, input the code in above.js.
* Paste the HTML code into the HTML source code of the website.
* Below where the code has been inserted, input the code in below.js.
* Adjust the CSS to match your specific Web Widget and your needs.
* That's it.

How it works (detailed):
--------------

There is a command in the Web Widet API that allows you to run Javascript when the Web Widget opens, outlined here: https://developer.zendesk.com/embeddables/docs/widget/introduction#commands . Using this command, the Web Widget will be able to inject predefined CSS into its own code. This CSS will be inserted with the other CSS of the Web Widget and therefore will allow user-defined CSS to modify the look and feel of the Web Widget.

Notes:
--------------

* If this requires more information/elaboration/photographs, please let me know and I will update it.
* You will need to update certain values to match your Web Widget
* You will need to uncomment specific portions of the code to activate those portions of the code. 

Customizations
--------------
### Display Zendesk Branding
Remove or comment out the following code:
```
        /* hides the zendesk branding */
        // inspect using developer tools to get the correct class
        .jwZNfp {
          visibility: hidden;
        }
```

### Hide an entire field
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* hides a field */
        // the div:nth-child(?) will change based on what field you would like to hide
        // inspect using developer tools to get the correct identifier
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(1) {
          display: none;
        }
        */
```

### Fix the new top field margin, if needed
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* fixes margin for new top field */
        // the div:nth-child(?) will change based on what new field will be the top field
        // inspect using developer tools to get the correct identifier
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(3) {
          margin-top: 0px;
        }
        */
```

### Hide a label
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* hides stupid description label */
        // the div:nth-child(?) will change based on how many fields you have change the number to match your field
        // inspect using developer tools to get the correct identifier
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(8) > div > label {
          display: none;
        }
        */
```