Hide System Fields
==============================

Have you ever wanted a way to hide the system fields in your Web Widget. If so, then this code is exactly what you are looking for.

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
* Paste the HTML code into the HTML source code of the website.
* Below where the code has been inserted, input the code in index.html.
* Adjust the CSS to match your specific Web Widget and your needs.
* That's it.

Notes:
--------------

* If this requires more information/elaboration/photographs, please let me know and I will update it.
* You will need to uncomment specific portions of the code to activate those portions of the code. 

Troubleshooting
--------------

Code not working for you. Try using the below to get your CSS values.

<img src="https://media.giphy.com/media/lMTrnzIfKvvuSBcFro/giphy.gif" alt="Copy Unique Class" /> <img src="https://media.giphy.com/media/VKKP4LsSY82RWbYAJE/giphy.gif" alt="Copy Selector" />

How it works (detailed):
--------------

There is a command in the Web Widet API that allows you to run Javascript when the Web Widget opens, outlined here: https://developer.zendesk.com/embeddables/docs/widget/introduction#commands . Using this command, the Web Widget will be able to inject predefined CSS into its own code. This CSS will be inserted with the other CSS of the Web Widget and therefore will allow user-defined CSS to modify the look and feel of the Web Widget.

Customizations
--------------
### Display Zendesk Branding
Remove or comment out the following code:
```
        /* hides the zendesk branding */
        /* inspect using developer tools to get the correct class */
        .kkUEer {
          visibility: hidden !important;
        }
```

### Hide the name field
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* hides the name field */
        /* the div:nth-child(?) will change based on what number your field is */
        /* inspect using developer tools to get the correct identifier */
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(1) {
          display: none;
        }
        */
```

### Hide the email field
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* hides the email field */
        /* the div:nth-child(?) will change based on what number your field is */
        /* inspect using developer tools to get the correct identifier */
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(2){
          display: none;
        }
        */
```

### Fix the new top field margin
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* fixes margin for new top field */
        /* the div:nth-child(?) will change based on what new field will be the top field */
        /* inspect using developer tools to get the correct identifier */
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(3){
          margin-top: 0px;
        }
        */
```

### Hide the label description
Remove the comment code `/*` and `*/` on their own lines that are surrounding the following code:
```
        /* hides stupid description label */
        /* the div:nth-child(?) will change based on how many fields you have change the number to match your field */
        /* inspect using developer tools to get the correct identifier */
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(8) > div > label {
          display: none;
        }
        */
```
