//============Map============

//Need of Map in DS (In array map function is different and this map is different)
// If you want to check if 30 exists, you have to scan each element (linear search) in array.

//Need
//When we want fast searching.
// With a Map, you can check directly using the key.
// Arrays only store values with numeric indexes.`
// Objects can store key–value, but keys must be strings/symbols.
// Map solves this by allowing any type of key.
//Map preserves the insertion order.
//Can use any type of key (numbers, strings, objects, functions).
//TC : o(1)

//Map → stores unique keys (but values may repeat).
//If you insert the same key again → old value gets updated.

//example : 1
let myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("a", 99);

console.log(myMap);

//example : 2
let myMap2 = new Map();

myMap2.set("x", 100);
myMap2.set("y", 100);

console.log(myMap2);

//Why does it show "object"?
// In JavaScript, typeof is very limited:
// It only knows about basic categories: "string", "number", "boolean", "undefined", "symbol", "bigint", "function", and "object".
// Anything that’s not primitive (arrays, dates, maps, sets, regex, etc.) will return "object".

let myMap3 = new Map();
console.log(typeof myMap3); // "object"

// 1️ Create a Map
let newMap = new Map();

// Map accepts a 2D array ([[key,value], [key,value]]) for initialization.
// Internally, it’s stored as a hash table, not as a simple 2D array.
//or
// let newMap = new Map([
//   ["name", "Neha"],
//   ["age", 22],
// ]);

console.log("Initial Map:", newMap);

// 2️ Add (set) key-value pairs
newMap.set("name", "Neha");
newMap.set(1, "Number key");
newMap.set(true, "Boolean key");
newMap.set({ x: 10 }, "Object key");
console.log("After:", newMap);

// 3️ Get values
console.log(newMap.get("name"));
console.log(newMap.get(1));
console.log(newMap.get(true)); //Boolean key
console.log(newMap.get(-1)); //undefined

// 4️ Check if key exists
console.log(newMap.has("name"));
console.log(newMap.has("age"));
console.log(newMap.has(-1));

// 5️ Update value (unique keys only)
newMap.set("name", "Updated Neha");
console.log(newMap.get("name")); // Updated Neha
newMap.set(true, "Updated");
console.log(newMap.get(true));

console.log(newMap);

// 6️ Delete a key
newMap.delete(1);
newMap.delete(true);
console.log(newMap);

// 7️ Size of Map
console.log(newMap.size); // number of key-value pairs

// 8️ Iterate over Map
for (let [key, value] of newMap) {
  console.log(key, "=>", value);
}

// 9️ Keys, Values, Entries
console.log([...newMap.keys()]);
console.log([...newMap.values()]);
console.log([...newMap.entries()]);

//  Clear all entries
// newMap.clear();

// Interesting Things:

// Keys are unique
newMap.set("name", "Again Neha"); // overwrites, not duplicate
console.log(newMap.get("name")); // Again Neha

// Values can repeat
newMap.set("city1", "Delhi");
newMap.set("city2", "Delhi"); // duplicate values allowed

// Insertion order preserved
let orderedMap = new Map();
orderedMap.set("first", 1);
orderedMap.set("second", 2);
orderedMap.set("third", 3);
console.log([...orderedMap.keys()]); // ["first", "second", "third"]

//  Any type can be a key
let objKey = { id: 101 };
newMap.set(objKey, "Special value");
console.log(newMap.get(objKey)); // Special value

//==============set=================
//Need

// Unique → No duplicates allowed
// TC → has() is O(1)
// Math Ops → Union, Intersection, Difference
// Order → Preserves insertion order
// Efficient → Handles large data uniquely
// No Index → Access via iteration only
//typeOf set is object (bydefault).

//Internally, a Set is implemented using a hash table

// Create a Set (with some duplicates)
// new Set(1, 2, 3);    // Invalid
// new Set([1, 2, 3]);  //Valid

// let mySet = new Set([1, 2, 2, 3, 4, 5]);
let arr8 = [9, 7, 1, 2];
let mySet = new Set(arr8);

console.log("Initial Set:", mySet);

// Add elements
mySet.add(6);
mySet.add(7);
mySet.add(100);

console.log("After Set:", mySet);

// Check existence
console.log("Has 3?", mySet.has(3));
console.log("Has 10?", mySet.has(10));

//Delete element
mySet.delete(2);

// Size of Set
console.log("Size:", mySet.size);

//accessing
//set doesn't have index -> for accessing particular ele first convert in array.
let set = new Set(["a", "b", "c"]);
let arr5 = [...set]; // Convert to array
console.log(arr5[1]); // b  (index 1)

// Iterate
console.log("Iterating:");
for (let val of mySet) {
  console.log(val);
}

// Convert Set -> Array
let arr1 = [...mySet];
console.log("Array from Set:", arr1);

// Remove duplicates from an array
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];
console.log("Unique numbers:", uniqueNumbers);

// Union, Intersection
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Union
let union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
let intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersection:", intersection);

// Lower Bound
// Definition: The lower bound of a value x in a sorted array is the first index where the element is greater than or equal to x.
let arr6 = [1, 2, 4, 4, 5, 7];
let x1 = 4;
// Lower bound of 4 is index 2 (first 4)

// Upper Bound
// Definition: The upper bound of a value x in a sorted array is the first index where the element is strictly greater than x
let arr7 = [1, 2, 4, 4, 5, 7];
let x = 4;
// Upper bound of 4 is index 4 (element = 5, first greater than 4)

function upperbound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > target) {
      index = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}
console.log(upperbound([1, 2, 6, 6, 11, 11, 11, 15], 6));

// | Feature / Function                Object                                                           Map                                                | Set                                       |
// | ----------------------------| --------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------- |
// | Add item                    | `obj[key] = value`                                              | `map.set(key, value)`                              | `set.add(value)`                          |
// | Check existence             | `key in obj`                                                    | `map.has(key)`                                     | `set.has(value)`                          |
// | Get value                   | `obj[key]`                                                      | `map.get(key)`                                     | N/A (use `has`)                           |
// | Delete item                 | `delete obj[key]`                                               | `map.delete(key)`                                  | `set.delete(value)`                       |
// | Size                        | `Object.keys(obj).length`                                       | `map.size`                                         | `set.size`                                |
// | Iterate keys                | `for (let key in obj)` or `Object.keys(obj).forEach()`          | `for (let key of map.keys())` or `map.forEach()`   | `for (let val of set)` or `set.forEach()` |
// | Iterate values              | `Object.values(obj)`                                            | `for (let val of map.values())` or `map.forEach()` | `for (let val of set)` or `set.forEach()` |
// | Iterate entries (key-value) | `Object.entries(obj)`                                           | `for (let [key, val] of map)` or `map.forEach()`   | Not applicable (no key-value)             |
// | Clear all items             | `for (let key in obj) delete obj[key]`                          | `map.clear()`                                      | `set.clear()`                             |
// | Convert to Array            | `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)` | `Array.from(map)` or `[...map]`                    | `Array.from(set)` or `[...set]`           |
// | Default key type            | Strings or Symbols                                              | Any type                                           | Values only, unique                       |
