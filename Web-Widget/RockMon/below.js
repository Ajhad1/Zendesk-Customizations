// sets default article that explains how to use widget
// to do - add this script to each page with appropriate search terms
zE('webWidget', 'helpCenter:setSuggestions', { search: 'widget' });

// adds user Identification via name and email -->
/* Turning off Identify feature for now for easier integration
// finds user in Zendesk
// if there is no user that matches it will create one
zE('webWidget', 'identify', {
  // to do - add RockMon Name Variable
  name: 'Akira Kogane',
  // to do - add RockMon Email Variable
  email: 'akira@voltron.com'
});
*/

// adds Prefilling to fields
/* Turning off Prefill for easier integration
zE('webWidget', 'prefill', {
  // prefills name
  // to do - add RockMon Name Variable
  name: {
    value: 'Akira Kogane',
    readOnly: true // optional
  },
  // prefills email
  // to do - add RockMon Email Variable
  email: {
    value: 'akira@voltron.com',
    readOnly: true // optional
  }
});
*/

// adds CSS to be added to the Web Widget for internals
// on-click of the web widget the following code will run
zE('webWidget:on', 'open', function() {
  // creates any CSS to be added to the Web Widget for internals
  var style = document.createElement('style');
    style.innerHTML = `
      /* hides the zendesk link */
      .kkUEer {
        visibility: hidden !important;
      }
      /* hides the name field */
      /*
      #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(1) {
        display: none;
      }
      */
      /*
      /* hides the email field */
      #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(2){
        display: none;
      }
      */
      /*
      /* fixes margin for new top field */
      #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(3){
        margin-top: 0px;
      }
      */
      /* hides stupid description label */
      #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(9) > div > label {
        display: none;
      }
      /* hides the url field */
      /*
      #Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(4){
        display: none;
      }
      */
      `;
  // appends the css in the web widget
  parent.document.getElementById('webWidget').contentDocument.head.appendChild(style);

    // creates any CSS to be added to the Web Widget for launcher
  var style = document.createElement('style');
  style.innerHTML = `
      /* Hides text in widget badge next to Question Mark */
      .label-3kk12 {
          display: none !important;
      }
      /* fixes margin of the icon after removing label */
      .icon-3E9qF {
          padding-right: 0px;
      }
    `;
  // appends the css in the web widget
  parent.document.getElementById('launcher').contentDocument.head.appendChild(style);

  // Creates Script Variable
  /* attempt at adding javascript into iframe to change label - not working currently - turned off
  var script = document.createElement('script');
  // Inserts code into Script Variable
    script.innerHTML = `
      // Gets Selector of Description Label
      var labSelector = document.querySelector("#Embed > div > div > div > form > div > div.sc-cpmKsF.fvnioU > div:nth-child(7) > div > label");
      // if selector is correct changes text of label
      if (labSelector !== null) {
        labSelector.innerHTML = "Description";
      }
    `;
  // appends JS into iframe to run
  parent.document.getElementById('webWidget').contentDocument.body.innerHTML.appendChild(script);
  */
});


// opens widget to run code above
// closes widget to reset it
setTimeout(function(){
    zE('webWidget', 'open')
    zE('webWidget', 'close');
}, 600)
