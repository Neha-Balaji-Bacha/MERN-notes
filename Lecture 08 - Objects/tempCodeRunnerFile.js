const studentnew = {
  name: "Neha",
  age: [23, 90],
  city: "Pune",
};
// 🔹 Using Object.keys()
console.log("---- Keys ----");
for (let values of Object.values(studentnew)) {
  console.log(values); // only keys
}