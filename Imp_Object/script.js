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
//loop
Object.keys(obj).forEach((x) => console.log(x));
Object.values(obj).forEach((x) => console.log(x));
Object.entries(obj).forEach(([x, y]) => console.log(x, y));

//merge two objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = { ...obj1, ...obj2 }; //obj2 overrides duplicates
console.log(merged);

// Using Object.assign()
let merged2 = Object.assign({}, obj1, obj2);
console.log(merged2);

//count frequency
let arr = [{ name: "John" }, { name: "Baba" }, { name: "John" }];
let ans = arr.reduce((acc, curr) => {
  acc[curr.name] = (acc[curr.name] || 0) + 1;
  return acc;
}, {});
console.log(ans);

//check if key in exist or not
let obj3 = { name: "John" };
console.log("name" in obj3);
console.log(obj3.hasOwnProperty("name"));
