//H.W
const box = document.getElementById("container");

const para1 = document.createElement("p");
para1.textContent = "I am paragraph 1";

const para2 = document.createElement("p");
para2.textContent = "I am paragraph 2";

//adds multiple element : modern  browser use
// box.append(para1, para2);

//adds only one element : older browser use
box.appendChild(para1);

//box.appendChild("Hello"); // ERROR : need to createElement
//add text directly using append : here no need to createElement
box.append("Hello from append!");

//remove and removechild
const container1 = document.getElementById("container1");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

// const r1 = p1.remove(); // remove itself :modern meth
// console.log(r1);

const r2 = p2.removeChild(p2); //error
//const r2 = container1.removeChild(p2); // remove from the parent :older meth
console.log(r2);

//remove ,append : returns undefined in console
//removechild, appendchild : returns node ele in console
