// This code needs to be copied below the initialization of the web widget. 
// This code may need to be modified to identify the correct values of your form.
// You will need to uncomment the code for the area you would like to affect.

<script type="text/javascript">
  // on-click of the web widget the following code will run
  zE('webWidget:on', 'open', function() {
    // creates any CSS to be added to the Web Widget
    var style = document.createElement('style');
      style.innerHTML = `
        /* hides the zendesk branding */
        .jwZNfp {
          visibility: hidden;
        }
        // uncomment the code to hide the section you would like to hide
        // the div:nth-child(?) will change based on how many fields you have change the number to match your field
        /* hides the name field */
        // the div:nth-child(?) will change based on what number your field is
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(1) {
          display: none;
        }
        */
        /* hides the email field */
        // the div:nth-child(?) will change based on what number your field is
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(2){
          display: none;
        }
        */
        /* fixes margin for new top field */
        // the div:nth-child(?) will change based on what new field will be the top field
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(3){
          margin-top: 0px;
        }
        */
        /* hides stupid description label */
        // the div:nth-child(?) will change based on how many fields you have change the number to match your field
        /* 
        #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(8) > div > label {
          display: none;
        }
        */
        `;
    // appends the CSS in the web widget
    parent.document.getElementById('webWidget').contentDocument.head.appendChild(style);
  });
</script>
