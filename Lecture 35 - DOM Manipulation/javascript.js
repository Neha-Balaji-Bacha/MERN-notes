console.log(window.document.body); //NodeList(11) [text, div, text, div, text, script, text, comment, text, script, text]
//here browser text consider as space
console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

//selectors in DOM
//modern
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".first-div-child"));
console.log(document.querySelectorAll("#second-div"));
console.log(document.querySelectorAll("div.first-div"));
console.log(document.querySelectorAll("div#second-div"));

//other specific selectors
//select an element based on class
//old
console.log(document.getElementsByClassName("first-div-child"));
console.log(document.getElementById("second-div"));
console.log(document.getElementsByTagName("div"));

const para = document.querySelector("p");
console.log(para);
//changing the css styles using js
para.style.color = "blue";
para.style.backgroundColor = "yellow";

//setting, editing and deleteing an attribute val
const imageElement = document.querySelector("img");

//Upadating the value of existing attribute
imageElement.setAttribute("src", "image2.png");

//creating data attribute
const h1Element = document.querySelector("h1");
h1Element.setAttribute("data-product", 500);

//deleting an attribute, by setting its value to null
h1Element.setAttribute("data-product", null);

//accessing and updating text of an element
console.log(para.innerHTML);
para.innerHTML = "<strong>Lorem voluptas, qui ab quis quae</strong>"; //updating

const secondPara = document.querySelector(".para");

//accessing and upadating text of an element using textcontent
console.log(secondPara.textContent); //accessing
secondPara.textContent = "this is new content"; //updating

//H.W -> 1. write difference between innerhtml and textcontent
//2. Difference between classlist and classname

//classname property
// const sectionElement = document.querySelector(".class1");
//deleting ele
// const classes = sectionElement.className.split(" ");
// classes.splice(2, 1);
// sectionElement.className = classes.join(" ");

const sectionElement = document.querySelector(".class2");

// Shows all classes on the element as a DOMTokenList
console.log(sectionElement.classList);

// Add a class
sectionElement.classList.add("class5");

// Remove a class
//sectionElement.classList.remove("class3");

// Toggle a class (adds if missing, removes if present)
//sectionElement.classList.toggle("class4");

// Replace an existing class with a new one
//sectionElement.classList.replace("class1", "class8");

// Check if the element contains a class
//console.log(sectionElement.classList.contains("class2"));
