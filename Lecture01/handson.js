const nums = [1, 2, 3, 4, 5];

// map → transform each element
console.log(nums.map((n) => n * 2)); // [2, 4, 6, 8, 10]

// filter → keep some elements
console.log(nums.filter((n) => n % 2 === 0)); // [2, 4]

// reduce → accumulate into single value
console.log(nums.reduce((sum, n) => sum + n, 0)); // 15

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

//some more examples
