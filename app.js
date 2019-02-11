// var liElements = document.getElementsByTagName("li");
// console.log(liElements);

// var howManyLi = liElements.length;
// console.log(howManyLi);

//  for (var i = 0; i < howManyLi; i++) {
//      if (liElements[i].innerHTML === "") {
//      liElements[i].innerHTML = "tiddi";
//      }
//      }

//       var parentNode = document.getElementById("ol");
//  var nodeList = parentNode.childNodes;
//  console.log(nodeList);

//  var howManyKids = nodeList.length;
//  console.log(howManyKids);

// //   var numberPics = 0;
// //  for (var i = 0; i < howManyKids; i++) {

// //  if (nodelist[i].nodeName.toLowerCase() === "img") {
// //  numberPics++;
// //  }
// //  }


// var parentDiv = document.getElementById("p1");
// var newParagraph = document.createElement("p");
// var t = document.createTextNode("Hello world!");
// newParagraph.appendChild(t);
// paragraph1 = parentDiv.firstChild;
// parentDiv.insertBefore(newParagraph, paragraph1);


// var target = parentDiv.childNodes[1];
// parentDiv.insertBefore(target.nextSibling);
// console.log(parentDiv);

// var parentDiv = document.getElementById("div1");
//  var nodeToRemove = parentDiv.childNodes[0];
//  parentDiv.removeChild(nodeToRemove);
//  console.log(parentDiv);


//  var target = document.getElementById("p1");
//  var hasClass = target.hasAttribute("class");
//  console.log(hasClass);

// var target = document.getElementById("ol");
// var attVal = target.getAttribute("id");
// console.log(attVal);

//  var target = document.getElementById("ol");
//  target.setAttribute("class", "special");
//  console.log(target);


//  var list = document.getElementsByTagName("p");
//  console.log(list);

//  var list = document.getElementById("p1").childNodes;
//  console.log(list)

//  var list = document.getElementById("p1").attributes;
//  console.log(list)


//  var numOfItems = list.length;
//  console.log(numOfItems );


//  var numOfItems = document.getElementById("p1").attributes.length;
//  console.log(numOfItems);

//  var nName = list[0].nodeName;
//  console.log(nName);

//  var nValue = list[0].nodeValue;
//  console.log(nValue);

//  var nodeToAdd = document.createElement("p");
//  nodeToAdd.setAttribute("class", "regular");
//  var newTxt = document.createTextNode("Hello!");
//  nodeToAdd.appendChild(newTxt);
//  console.log(nodeToAdd);

//  var imgNodeToAdd = document.createElement("img");
//  imgNodeToAdd.setAttribute("border", "1");

//  console.log(imgNodeToAdd);






var parentDiv = document.getElementById("p1");
var newParagraph = document.createElement("h1");
var t = document.createTextNode("Todo App");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);
var d = document.createElement("input");
var z = document.createTextNode("d")
d.appendChild(z)

document.body.appendChild(d);

var x = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
x.appendChild(t);
document.body.appendChild(x);






var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

