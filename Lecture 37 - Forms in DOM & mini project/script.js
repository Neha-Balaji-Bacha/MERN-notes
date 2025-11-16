const outerdiv = document.querySelector(".outer-div");
const innerdiv = document.querySelector(".inner-div");
const h1Elemnet = document.querySelector("h1");

outerdiv.addEventListener(
  "click",
  () => {
    console.log("You've clicked outerdiv");
  },
  true
);

innerdiv.addEventListener(
  "click",
  () => {
    console.log("You've clicked innerdiv");
  },
  true
);

h1Elemnet.addEventListener(
  "click",
  () => {
    console.log("You've clicked h1element");
  },
  true
);

document.body.addEventListener(
  "click",
  () => {
    console.log("You've clicked");
  },
  true
);

//Event propagation : event spreading
//capturing phase: from parent to target,
//bubbling phase : from target to parent (by default)
// at target phase:,bubbling phase
