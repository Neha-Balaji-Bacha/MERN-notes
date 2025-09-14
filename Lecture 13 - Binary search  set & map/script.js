// Date : 08/09/2025
//Binary search
/*1. search space must be sorted
2.Find mid in between low and high
3.Ans will always come at mid otherwise look for ans in left or rigth
*/

// mid = low idx +(high idx-low idx) /2
//array must be sorted
// arr[mid] < target-- > mid + 1;
// arr[mid] > target-- > mid - 1;
// arr[mid] == target, return mid.

//lower bound : first index of target element greater than or equal to target element
//higher bound : first index of element that's just greater than the target element

//find square root of N in o(log(N))
let N = 36;
function squareroot(N) {
  let low = 0;
  let high = N;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid * mid == N) {
      return mid;
    } else if (mid * mid > N) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log("square root is " + squareroot(36));
// let sqrt = console.log("square root is " + squareroot(36));
// if(!(sqrt = -1)){
//     console.log("a perfect square");
// }

//find target of in array
function findtarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log(findtarget([1, 3, 3, 6, 7, 9, 11, 15], 11));

//find first occurrance of array
function findFirstOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == target) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}
console.log(findFirstOccurrence([1, 2, 6, 6, 11, 11, 11, 15], 6));

function findLastOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == target) {
      result = mid;
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}
console.log(findLastOccurrence([1, 2, 6, 6, 11, 11, 11, 15], 6));

//lowerbound
function lowerbound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) {
      index = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return index;
}
console.log(lowerbound([1, 2, 6, 6, 11, 11, 11, 15], 6));

//H.W : HigherBound

//=================Set=======================
//DS : Type of container => ex. arrays,strings,object,map,set,tree,stack,queue,graphs
//algorithms : sorting , searching

//note : store only unique element
//not included duplicates
//Notation : {}

let set = new Set([1, 2, 4, 4, 5, 6]);
console.log(set);
set.add(200);
set.add(2);
set.add(3);
console.log(set);

//method to check if a no is in set or not
console.log(set.has(30));
console.log(set.has(200));

console.log(set.size);
console.log(set);
console.log(set.delete(200)); //boolean output
console.log(set);

//ex : Remove duplicates from the array
let array = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let set1 = new Set(array);
let arr1 = [...set1];
let arr2 = Array.from(set1);

let set2 = new Set([...array]);
let arr3 = [...set2];
console.log({ array, arr1, arr2, arr3 });

//=============Map=======================
// -contains key-value pairs
// -ket must be different across all pairs
// -key can be anything

// Map accepts a 2D array ([[key,value], [key,value]]) for initialization.
// Internally, it’s stored as a hash table, not as a simple 2D array.

let map = new Map([
  ["name3", "sultan"],
  ["name4", "sunny"],
]);
//or
map.set("name", "sultan");
map.set("name2", "sunny");

const mapArr = [...map];
console.log(mapArr);

//checking if a key is present or not
console.log("checking if `name` is present or not?", map.has("name"));

//getting the value of a specific key
console.log("value of `name2` key is: ", map.get("name2"));

//deleting a key in map
console.log("deleting `name4`: ", map.delete("name4"));

//loop
for (let i of map) {
  console.log("key: " + i[0], ",value: " + i[1]);
}

console.log("printing keys");
for (let i of map.keys()) {
  console.log(i);
}

//find the frequency of each elemnt in the arr
let arr4 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];

//find intersection & union
let arr5 = [1, 2, 4, 5, 6],
  arr6 = [2, 5, 6, 3, 1, 3];

//intersection : 1,2,5,6
//union : 1,2,3,4,5,6

const unionSet = new Set([...arr5, ...arr6]);
const unionArr = [...unionSet];
console.log({ unionArr });

//Intersection
let intersection = [];
let arr4Set = new Set(arr4);
for (let i = 0; i < arr5.length; i++) {
  if (arr4Set.has(arr5[i]));
  intersection.push(arr5[i]);
}
intersection = [...new Set(intersection)];
console.log({ intersection });
