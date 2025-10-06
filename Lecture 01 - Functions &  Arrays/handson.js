//========closure=======
//A closure is created when a function “remembers” the variables from its outer scope even after the outer function has finished execution.

function outer() {
  let message = "Hello, I am from outer!";

  function inner() {
    console.log(message); // inner can access outer's variable
  }

  return inner;
}

const myFunc = outer(); // outer() finished, but...
myFunc(); // still prints: Hello, I am from outer!

//Each time you call createCounter(), it makes a new closure with its own count.
function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1  (new independent closure)
console.log(counter2()); // 2

let arr1 = ["a", "b", "c", "d"];
console.log(arr1.slice(2)); // ["c","d"] (from index 2 till end)
console.log(arr1.slice(-2)); // ["c","d"] (last 2 elements)
console.log(arr1); // original unchanged

sayHi(); // works
function sayHi() {
  console.log("Hi");
}

sayHello(); // Error
const sayHello = function () {
  console.log("Hello");
};

//first-class citizens.
// Functions can be assigned to variables, passed as arguments, or returned from other functions.
// This is what we mean when we say JavaScript treats functions as first-class citizens.
function greet(name) {
  return "Hi " + name;
}
const fn = greet;
console.log(fn("Neha")); // Hi Neha

// function greet(name) { return "Hi " + name; }
// const fn = greet();  error
// console.log(fn("Neha")); // Hi Neha
//const fn = greet(); throws an error later — because you stored the result of the function call (a string), not the function itself.

// greet() is executed immediately, but since you didn’t pass an argument, name = undefined.
// So greet() returns the string "Hi undefined".
// Now fn is just a string, not a function.

let arr3 = [1, , 3];
console.log(arr3.length); // 3
console.log(arr3[1]); // undefined

//flat() inbuilt function
let arr2 = [1, [2, 3], [4, [5]]];
console.log(arr2.flat(2)); // [1,2,3,4,5]

//without indexing
let arr = [1, 2, 3, 4];
arr.length = 2;
console.log(arr); // [1,2]
