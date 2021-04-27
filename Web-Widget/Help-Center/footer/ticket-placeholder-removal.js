// cleanup \{\{ticket.*}} placeholders

var re = new RegExp("\\{\\{ticket\..*?\}\}","gi");
//console.log("re = "+re); // for debugging
var container = document.querySelector("#main-content > section > div");
//console.log(`${document.querySelectorAll('#main-content > section > div > div.article-body')}`); // for debugging
if (container !== null) {
  var el = container.querySelectorAll("div.article-body");
  //console.log("el.length = "+el.length); // for debugging
  if (el !== null) {
    for(var k = 0; k < el.length; k++) { // iterate through the Selectors found
    var found = el[k].innerHTML.match(re); // save Selector that contains a match
    if(found) {
      console.log("Removing: "+found); // for debugging
    }; 
    el[k].innerHTML = el[k].innerHTML.replace(re, ''); // remove \{\{ticket.*}} placeholders in the content
    };
  };
};
