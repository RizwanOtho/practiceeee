// function fun1(){
// var img = document.getElementById("q");
// var neww = ["10.png"];
// for (var i = 0; i < img.attributes.length; i++){
//     img.attributes[i].value =neww[i]
// }
// var img = document.getElementById("w");
// var neww = ["fh.jpg", ];
// for (var i = 0; i < img.attributes.length; i++){
//     img.attributes[i].value =neww[i]
// }
// var img = document.getElementById("e");
// var neww = ["sss.jpg","180",];
// for (var i = 0; i < img.attributes.length; i++){
//     img.attributes[i].value =neww[i]
// }
// }


var q = document.getElementById("main-content");
var w = q.childNodes;
console.log(w);
var e = document.getElementsByClassName("render");
for (var i = 0; i <e.length; i ++){
    document.write(e[i].innerHTML);
}

var r = document.getElementById("first-name").value = "RIZWAN ALI OTHO";
var t = document.getElementById("last-name").value = "ZAKAULLAH";
var y = document.getElementById("email").value = "rizwan14118@gmail.com";


var a = document.getElementById("form-content").nodeType;
console.log(a);
var s = document.getElementById("lastName");
console.log(s.nodeType);
console.log(s.childNodes[0].nodeType);
s.innerHTML= "RIZWAN ALI OTHO";

var d = document.getElementById("main-content");
console.log(d.firstChild);
console.log(d.lastChild);

console.log(s.nextSibling);
console.log(s.previousSibling);
var email = document.getElementById("email");
console.log(email.nodeType);
console.log(email.parentNode);







