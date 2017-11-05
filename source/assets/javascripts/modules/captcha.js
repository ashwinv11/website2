const linkEl = document.createElement('a');
linkEl.setAttribute('href', 'mailto:ashwin@vaswani.us?Subject=Hello%20Ashwin');
linkEl.setAttribute('target', '_top');

const h1 = document.createElement('h1');
const node = document.createTextNode('ashwin [at] vaswani.us');
h1.appendChild(node);
linkEl.appendChild(h1);

function showAddress() {
  let check = document.getElementById('checker');
  check.parentNode.replaceChild(a, check);
}
