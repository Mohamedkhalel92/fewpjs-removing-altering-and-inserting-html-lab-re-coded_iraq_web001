main.remove();
//let h1 = createElement("h1.victory")
let h1 = document.createElement('h1')
h1.setAttribute("id", "victory");
let bo = document.getElementsByTagName('body');
bo[0].appendChild(h1);
var newHeader = document.getElementById('victory');
//let newHeader ;
newHeader.innerHTML ="Myname is the champion";
