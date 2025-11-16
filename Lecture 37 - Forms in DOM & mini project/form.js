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
