const submitbtn = document.querySelector("button");
submitbtn.addEventListener("click", () => {
  const inputs = {};
  inputs.password = document.querySelector("input[type=password]").value;
  inputs.allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

  inputs.date = new Date(document.querySelector("[type=date]").value);
  inputs.time = document.querySelector("[type=time]").value;

  inputs.radiobutton1 = document.querySelector("[name=mcq]:checked")?.value; //when multiple radio buttons instead of type we used name
  inputs.radiobutton2 = document.querySelector("[name=mcq2]:checked")?.value;

  //This gets the single-select dropdown value
  inputs.selectedOption = document.querySelector("select")//all options & selected one is true 
  inputs.selectedOption = document.querySelector("select").value; //returns only selected option

  //This gets all options from the multi-select dropdown
  // const multiSelectOption = document.querySelector("[multiple=true]")?.value;//?.value returns the first selected value only, not all values.
  // console.log(multiSelectOption);

  // const multiSelectOption = document.querySelector("[multiple=true]");
  // console.log(multiSelectOption);//returns only all potions (not return ticked option by user)

  const multiSelectOption = document.querySelector("[multiple=true]").options;//all options & selected all is true 
  //problem : In multi-select if we used .value it returns only first selected value , when .options used it returns all options inside that selected option only true
  //for getting actual option firstly we convert in array because multiSelectOption data type is HTMLCollection (when we used filter,map then it is required i/p is array) 
  // we used filter for to Keep only selected options & map used for to Convert options to an array of their values

  inputs.multiSelectedOption = Array.from(multiSelectOption)//[ optionA, optionB, optionC, optionD ]

    .filter((ele) => ele.selected) //[ optionB, optionD ]

    .map((ele) => ele.value); //["B", "D"]

  console.log(inputs);
});

const pin = document.querySelector("[type=password]");

// input : fires on every keystroke
pin.addEventListener("input", (e) => {
  console.log("INPUT:", e.target.value);
});

// change : fires only after user leaves the field
pin.addEventListener("change", (e) => {
  console.log("CHANGE:", e.target.value);
});

//focus : When clicks 
pin.addEventListener("focus", () => {
  pin.style.background = "pink";
  console.log("FOCUS:", pin.value);
});

// blur : when focus leaves
pin.addEventListener("blur", () => {
  pin.style.border = "2px solid red";
  console.log("BLUR:", pin.value);
});
 //triggering sequence : focus,input,change,blur