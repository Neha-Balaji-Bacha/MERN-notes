// Lexicographical order
// Definition: Comparing strings character by character using Unicode/ASCII values.
//sort() modifies the original array, it does not create a new array.

// Alphabetical order
// Definition: Order we use in a human-friendly dictionary, usually ignoring case and sometimes accents.

let arr4 = [10, 2, 1, 20];

// => Ascending order
arr4.sort((a, b) => a - b);
console.log(arr4); // Output: [1, 2, 10, 20]

// => Descending order
arr4.sort((a, b) => b - a);
console.log(arr4); // Output: [20, 10, 2, 1]

// => Sorting negative numbers
let arr = [-3, -1, -7, -2];
arr.sort(); // default lexicographic sort
console.log(arr); // [-1, -2, -3, -7]

// => note : By default, sort() converts elements to strings and sorts them lexicographically.
let arr3 = [10, 2, 1, 20];
arr.sort();
console.log(arr3); // Output: [1, 10, 2, 20]  (lexicographic order!) comapre 1<2

// => sorting floating no
let arr1 = [0.2, 1.0, 2.5, 5.4];
arr1.sort((a, b) => a - b);
console.log(arr1);

// => string sorting
let arr2 = ["e", "a", "z", "aa"];
arr2.sort();
console.log(arr2);

// => Sorting objects by a key
let user = [
  { name: "nikita", age: 20 },
  { name: "neha", age: 35 },
  { name: "nikhil", age: 24 },
];
user.sort((a, b) => a.age - b.age);
console.log(user);

// => If age is same sorted lexiographically using name
let user1 = [
  { name: "nikita", age: 20 },
  { name: "neha", age: 35 },
  { name: "nikhil", age: 20 },
];
user1.sort((a, b) => {
  if (a.age == b.age) return a.name.localeCompare(b.name);
  else return a.age - b.age;
});
console.log(user1);

// => Custom sort condition
// Example: Even numbers first, then odd numbers
let arr6 = [3, 2, 1, 4, 5];
arr6.sort((a, b) => (a % 2) - (b % 2));
console.log(arr6); // [2, 4, 3, 1, 5]

// => Sort booleans (true/false)
let arr0 = [true, false, true, false];
arr0.sort((a, b) => a - b);
console.log(arr0); // [false, false, true, true]

// => Custom sort condition
//Instead of comparing strings alphabetically, we compare their .length
let arr8 = ["apple", "kiwi", "banana", "fig"];
arr8.sort((a, b) => a.length - b.length);
console.log(arr8);

// => localeCompare is insensitive for upper and lower case
let arr5 = ["apple", "Banana", "Algebra"];
// Lexicographical (default sort)
console.log(arr5.sort());
// [ 'Algebra', 'Banana', 'apple' ] → raw code points

// Alphabetical (localeCompare)
console.log(arr5.sort((a, b) => a.localeCompare(b)));
// [ 'Algebra', 'apple', 'Banana' ] → human-friendly

//case :by default, localeCompare is case-insensitive
let arr35 = ["Banana", "apple", "Algebra", "zoo"];
arr35.sort((a, b) => a.localeCompare(b));
console.log(arr35);

//this also works differently
console.log("A".localeCompare("a")); // 1 (uppercase comes before lowercase in Unicode)
console.log("a".localeCompare("A")); // -1

console.log("apple".localeCompare("banana")); // -1
console.log("banana".localeCompare("apple")); // 1
console.log("apple".localeCompare("apple")); // 0

// => 2D Array
const nestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

nestedArr.sort((a, b) => a[0] - b[0]);
console.log({ nestedArr });

/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/

const nestedArr1 = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

nestedArr1.sort((a, b) => {
  if (a[0] == b[0]) return a[1] - b[1];
  return a[0] - b[0];
});
console.log({ nestedArr1 });

// Algorithm	Key Idea
// Bubble Sort :	Swap neighbors
// Selection Sort : Pick min
// Insertion Sort : Insert in sorted
// Merge Sort : 	Divide & merge
// Quick Sort :	Partition by pivot
