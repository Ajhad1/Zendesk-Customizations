// This code needs to be copied below the initialization of the web widget. 
// This code may need to be modified to identify the correct values of your form.

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
        `;
    // appends the CSS in the web widget
    parent.document.getElementById('webWidget').contentDocument.head.appendChild(style);
  });
</script>