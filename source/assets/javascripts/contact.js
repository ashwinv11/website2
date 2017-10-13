var a = document.createElement("a");
a.setAttribute('href', "mailto:ashwin@vaswani.us?Subject=Hello%20Ashwin");
a.setAttribute('target', '_top');

var h1 = document.createElement("h1");
var node = document.createTextNode("ashwin [at] vaswani.us");
h1.appendChild(node);
a.appendChild(h1);

function showAddress(){
  var check = document.getElementById("checker");
  check.parentNode.replaceChild(a, check);
}