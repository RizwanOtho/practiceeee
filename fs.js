// var div = document.getElementById("d");
// var btn = document.createElement("BUTTON");
// var value = document.createTextNode("SAWEER");
// btn.appendChild(value);
// var child = div.appendChild(btn);
// btn.setAttribute("onClick","fg()");


// function fg(){
//    var paragraph =  document.createElement("p");
//    var text = document.createTextNode("rizwan ali otho");
//    var p2 = document.createElement("p");
//    var paragraph1 = document.createElement("a");
//    paragraph1.setAttribute('href', "#");
//    paragraph1.setAttribute('id','li');
//    paragraph1.setAttribute("onClick","gf()");
//    p2.appendChild(paragraph1);
//    var text1 = document.createTextNode("read more");
//    paragraph1.appendChild(text1);
//    paragraph.appendChild(text);
//    var child2 = div.appendChild(paragraph);
//    var child3 = div.appendChild(p2);
// }


// function gf(){
// var  sa = document.getElementById('li').innerHTML = "Hello guiz assalam alaikum rizwan ali otho here";

// }

















var rizwan =document.getElementById("d");
var r = document.createElement("input");
r.setAttribute("id", "input");
r.setAttribute("onFocus", "this.style.backgroundColor='red';");
r.setAttribute("onBlur", "this.style.backgroundColor='white';");
var p = document.createElement("p");
p.setAttribute("id", "paragraph");
var btn = document.createElement("button");
btn.setAttribute("id", "button");
btn.setAttribute("onClick", "rr()");
var text = document.createTextNode("click now")
rizwan.appendChild(r);
rizwan.appendChild(btn);
rizwan.appendChild(p);
btn.appendChild(text);

function rr() {
 var d = document.getElementById("input").value;
 document.getElementById("paragraph").innerHTML= d;
}






