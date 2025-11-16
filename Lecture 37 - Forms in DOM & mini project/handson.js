//H.W : submit button make disable when required field not fill
const users = [];
const submitbtn = document.querySelector("button");
const form = document.querySelector("form");

const inputs = document.querySelectorAll("input, select");
submitbtn.disabled = true;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const name = document.querySelector("#name").value;
    const mobile = document.querySelector("#mobile").value;
    const gender = document.querySelector("input[name=gender]:checked")?.value;
    const consent = document.querySelector("#consent").checked;
    const city = document.querySelector("#city").value;

    if (name && mobile && gender && consent && city) {
      submitbtn.disabled = false;
    } else {
      submitbtn.disabled = true;
    }
  });
});
