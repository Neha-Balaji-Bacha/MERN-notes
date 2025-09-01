const classroom = [
  { name: "Aarav", city: "Pune" },
  { name: "Rohan", city: "Mumbai" },
];

// for...of → objects
for (let student of [classroom[0]]) {
  console.log("for...of:", student.name, student.city);
}

// for...in → keys inside each object
for (let key in classroom[0]) {
  console.log("for...in (first obj):", key, classroom[0][key]);
}