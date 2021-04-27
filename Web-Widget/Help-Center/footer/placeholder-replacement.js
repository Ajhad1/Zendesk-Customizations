// Replace \{\{dc.*}} placeholders with appropriate content 

// manually entered variables that will automatically update whenever changes are made
var dcItems = {'testdc': `{{dc 'testdc'}}`, 'Custom_Placeholder-CCs': `{{dc 'Custom_Placeholder-CCs'}}`, 'Custom_Placeholder-CCs-Default': `{{dc 'Custom_Placeholder-CCs-Default'}}`, 'Custom_Placeholder-CCs-Names': `{{dc 'Custom_Placeholder-CCs-Names'}}`, 'Custom_Placeholder-New_Line_One': `{{dc 'Custom_Placeholder-New_Line_One'}}`, 'Custom_Placeholder-New_Line_Quote': `{{dc 'Custom_Placeholder-New_Line_Quote'}}`, 'Custom_Trigger-Slack-Comment': `{{dc 'Custom_Trigger-Slack-Comment'}}`, 'Custom_Trigger-Slack-Comment-No_Comment': `{{dc 'Custom_Trigger-Slack-Comment-No_Comment'}}`, 'Custom_Trigger-Slack-Full': `{{dc 'Custom_Trigger-Slack-Full'}}`, 'Email-Section-Actions_Available': `{{dc 'Email-Section-Actions_Available'}}`, 'Email-Section-Comment_History-Full': `{{dc 'Email-Section-Comment_History-Full'}}`, 'Email-Section-Comment_History-Hide_First': `{{dc 'Email-Section-Comment_History-Hide_First'}}`, 'Email-Section-Comment-Latest': `{{dc 'Email-Section-Comment-Latest'}}`, 'Email-Section-Comment-New': `{{dc 'Email-Section-Comment-New'}}`, 'Email-Section-Received_Request-Full': `{{dc 'Email-Section-Received_Request-Full'}}`, 'Email-Section-Received_Request-Missing_Info': `{{dc 'Email-Section-Received_Request-Missing_Info'}}`, 'Email-Section-Request_Info_Documentation-No_Comment': `{{dc 'Email-Section-Request_Info_Documentation-No_Comment'}}`, 'Email-Section-Request_Info_Documentation-With_Comment': `{{dc 'Email-Section-Request_Info_Documentation-With_Comment'}}`, 'Email-Section-Request_Info_Intro': `{{dc 'Email-Section-Request_Info_Intro'}}`, 'Email-Section-Request_Info-No_Comment': `{{dc 'Email-Section-Request_Info-No_Comment'}}`, 'Email-Section-Request_Info-With_Comment': `{{dc 'Email-Section-Request_Info-With_Comment'}}`, 'Email-Section-Ticket_Summary': `{{dc 'Email-Section-Ticket_Summary'}}`, 'employee_cc_email': `{{dc 'employee_cc_email'}}`};

for(var j = 0; j < 3; j++) { // Iterate through the text a few times
  for (const property in dcItems) { // check every dc instance in the object
    //console.log(`${property}:\n${dcItems[property]}`); // for debugging
    var re = new RegExp("\\{\\{dc\."+`${property}`+"\}\}","gi");
    //console.log("re = "+re); // for debugging
    var container = document.querySelector("#main-content > section > div");
    //console.log(`${document.querySelectorAll('#main-content > section > div > div.article-body')}`); // for debugging
    if (container !== null) {
      var el = container.querySelectorAll("div.article-body");
      //console.log("el.length = "+el.length); // for debugging

      dcItems[property] = dcItems[property].replace(/(?:\r\n|\r|\n)/g, '<br>'); // replace new lines with html line break

      for(var i = 0; i < el.length; i++) { // iterate through the Selectors found
        var found = el[i].innerHTML.match(re); // save Selector that contains a match
        if(found) {
          console.log("Found:\n"+found+"\n\nReplacing with:\n"+dcItems[property]); // for debugging
        }; 
        el[i].innerHTML = el[i].innerHTML.replace(re, dcItems[property]); // replace \{\{dc.*}} placeholders in the content
      };
    };
  };
};
