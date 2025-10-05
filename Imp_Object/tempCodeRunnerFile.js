let obj = { name: "John", age: 25, 1: 2 };
//access ele
console.log(obj.name);
//delete ele
console.log(delete obj["age"]);
//invalid
// console.log(delete obj[age]); //age without quotes is treated as a variable, not a string.because of that age is undefined → error
//valid - automatically convert in string
console.log(obj[1]);
//add ele
// obj.id = 1;
// console.log(obj);

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));