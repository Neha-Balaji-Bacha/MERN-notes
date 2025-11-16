const users = [];
const submitbtn = document.querySelector("button");
const form = document.querySelector("form");

submitbtn.addEventListener("click", (event) => {
  event.preventDefault();

  const user = {};
  user.name = document.querySelector("input[type=text]").value;
  user.number = document.querySelector("input[type=number]").value;
  user.gender = document.querySelector("input[name=gender]:checked")?.value;
  user.consent = document.querySelector("input[type=checkbox]")?.checked;
  user.city = document.querySelector("#city")?.value;

  if (
    !user.name ||
    !user.number ||
    !user.gender ||
    !user.consent ||
    !user.city
  ) {
    alert("Please fill out all the fields");
  } else {
    users.push(user);
    form.reset();
    console.log(users);
    submitbtn.disabled = true;
  }
});

//H.W
// const inputs = document.querySelectorAll("input, select");
// submitbtn.disabled = true;

// inputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     const name = document.querySelector("#name").value;
//     const mobile = document.querySelector("#mobile").value;
//     const gender = document.querySelector("input[name=gender]:checked")?.value;
//     const consent = document.querySelector("#consent").checked;
//     const city = document.querySelector("#city").value;

//     if (name && mobile && gender && consent && city) {
//       submitbtn.disabled = false;
//     } else {
//       submitbtn.disabled = true;
//     }
//   });
// });
