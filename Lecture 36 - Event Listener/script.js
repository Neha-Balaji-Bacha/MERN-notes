// Creating an element
// Note: If the element already exists in the DOM, appendChild will move it to the end
const h3element = document.createElement("h3");
h3element.textContent = "Hi, I'm an h3 element";
document.querySelector("div").appendChild(h3element);

// Selecting the paragraph
const para1 = document.querySelector("p");

// Event listeners
// Click event on paragraph
para1.addEventListener("click", (event) => para1Clicked(event));

//mouseover event
para1.addEventListener(
  "mouseover",
  () => (para1.style.backgroundColor = "yellow")
);

//mousedown event
para1.addEventListener(
  "mousedown",
  () => (para1.style.backgroundColor = "green")
);

//mouseup event
para1.addEventListener(
  "mouseup",
  () => (para1.style.backgroundColor = "yellow")
);

//keydown event
document.addEventListener(
  "keydown",
  () => (para1.style.backgroundColor = "blue")
);

// Function to remove h3 element
function para1Clicked(event) {
  if (h3element) h3element.remove();
  console.log("You've clicked a paragraph. Event type:", event.type);
}
