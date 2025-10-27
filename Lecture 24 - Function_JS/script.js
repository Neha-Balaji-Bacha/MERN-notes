let arr = [2, 5, 3, 10, 34];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//find the count of even no
let even = arr.reduce((acc, val, index, array) => {
  acc += val % 2 == 0;
  return acc;
}, 0);
console.log(even);

//find the fre of each ele
let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "apple", "Guava"];
let fruits1 = fruits.reduce((acc, val, index, array) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(fruits1);

//find()
/*-returns a value
-returns the first ele that matches the condition */

let findkiwi = fruits.find((val, ind, arr) => val.toLowerCase() === "kiwi");
console.log(findkiwi);

//1.given an array of object ,containing details of users, console the name of first user aged above 30
const users = [
  { name: "alice", age: 25, isactive: true },
  { name: "neha", age: 24, isactive: false },
  { name: "nikhil", age: 30, isactive: true },
  { name: "nikita", age: 35, isactive: false },
];
let result = users.find((val) => val.age > 25).name;
console.log(result);

//2. print the name and age of each user
let result1 = users.forEach((val) => {
  console.log(val.name, val.age);
});

//3 function to create an array of names from above users
let ans = users.map((val) => val.name);
let ans1 = [...ans];
console.log(ans1);

//4 function to display all the active users from above users array
let output = users.filter((val) => val.isactive);
console.log(output);

//5 function to find the sum of age for all users below 30
let out = users.reduce((acc, val) => val.age + acc, 0);
console.log(out);

//6 function to get the names of all active users
let output1 = users
  .filter((val) => val.isactive == true)
  .map((val) => val.name);
console.log(output1);

//===========passing a function as an argument and returning a function======
function calculator(a, b, operation) {
  return operation(a, b);
}
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function sub(a, b) {
  return a - b;
}
let sum1 = calculator(3, 4, add);
console.log({ sum1 });

//======Error Handlling==============
try {
  console.log(name);
  let name = "neha";
  console.log(name);
  if (name === "neha") throw new error();
} catch {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("always run");
}
//once,memoization
