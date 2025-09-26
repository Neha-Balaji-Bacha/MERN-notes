//Types of function : arrow function
//write an arrow fun to check if a no is divisible by 3 or not
//arrow function are not hoisted
const arrow = (a, b) => {
  if (a % b == 0) return true;
  return false;
};
console.log(arrow(5, 3));

//Using single line
const arrow1 = (num) => num % 3 == 0;
console.log(arrow1(5, 3));

const isDivisibleBy3 = (num) => !(num % 3);
console.log(isDivisibleBy3(19));

//arrow function do not have their own 'this' keyword they uses parents 'this'.
const student = {
  fullName: "Pratik Mane",
  age: 2,
  result1: function (resultStatus) {
    console.log(this.fullName + " has " + resultStatus + " the exam");
    console.log(this); //shows the object properties
  },
  result2: (resultStatus) => {
    //this.fullName gives undefined, as parent's this doesn't have `fullName` property
    console.log(this.fullName + " has " + resultStatus + " the exam");
    console.log(this); //doesn't shows the properties of object, instead shows window object(parent's this)
  },
};

student.result1("passed");
student.result2("failed");

/* =========== Anonymous Functions =========== */
/* basically a function with no name */

/* =========== Higher Order Functions (HOFs) =========== */
/* These functions are either functions that takes functions as arguments or returns a function */

/* Types of HOFs */
/* 1. forEach() 
  - applies the callback function on each element
  - iterates over each element and doesn't break like other for loops
  - doesn't change the original array
  - returns undefined
  - can be used to iterate and do some operations on array
*/

let arr = [2, 1, 6, 3, 9];

console.log(
  //undefined
  arr.forEach((value, index, array) => {
    value *= 2;
    array[index] = value;
    console.log(value, index, array);
  })
);
console.log({ arr }); //modified in-place

//print name and age of users array using forEach
let users = [
  { name: "ramesh", age: 20 },
  { name: "suresh", age: 10 },
  { name: "rani", age: 40 },
];
users.forEach((value) => {
  console.log(value.name + " " + value.age);
});

//2.map
/*
-transforms the array
-returns an array
- doesn't change the original array
 */

arr = [3, 2, 9, 0, 10];
let squaredArr = arr.map((value, index, array) => {
  return value * value;
});

console.log({ squaredArr });

//transform the name of each user to uppercase
let user1 = [
  { name: "ramesh", age: 20 },
  { name: "suresh", age: 10 },
  { name: "rani", age: 40 },
];
let result = user1.map((value) => {
  return { name: value.name.toUpperCase(), age: value.age };
});
console.log(result);
console.log(user1);

//3.filter
/*
  - keeps the elements that passes the condition
  - returns an array
  - doesn't change the original array
  - nums.filter((value, index, array) => condition)
 */
let nums = [2, 12, 9, 18, 27];
const even = nums.filter((value) => value % 2 == 0);
console.log(even);

//filter above names array in a way that names less than 5 char ar eleminted
let fruits = ["pranjal", "bhavesh", "uday", "neha"];
const name = fruits.filter((value) => value.length > 5);
console.log(name);
