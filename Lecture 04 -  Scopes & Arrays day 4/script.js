// console.log("Hello World");
//YESTERDAY TOPICS : FREQUENCY ARRAYS,MODULE QUESTION ,toFixed() FUNCTION:RETURN OUTPUT IN STRING FORMAT, PREFIX METHOD,
//TIME AND SPACE COMPLEXITY.

//YESTERDAY GIVEN TASK : TO FIND THE FREQUENCY OF ELEMENTS IN AN ARRAY
//TIME COMPLEXITY : O(n) AND SPACE COMPLEXITY : O(n) => O(2n)
const arr1 = [1, 2, 1, 4, 2, 2, 4];
function findFrequency(arr) {
  const frequency = new Array(arr);
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (frequency[arr[i]]) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    result.push([i, frequency[arr[i]]]);
  }
  return result;
}
console.log(findFrequency(arr1));

//scope
// x = 10; //global scope
// console.log(x); //10
// function myFunction() {
//   for (let i = 0; i < x; i++) console.log("Hi", i); //0,1,2,3,4,5,6,7,8,9
// }
// myFunction();

// //let, const
// {
//   let z = 5; //local scope
//   console.log(z); //5
// }
// console.log(z); //error

// //var : function scope

// {
//   var y = 7; //function scope
//   console.log(x); //10
// }
// console.log(y); //7

// //nested scopes
// function outerFunction() {
//   var outerVariable = "Hello";
//   console.log(outerVariable); //Hello

//   function innerFunction() {
//     var innerVariable = "World";
//     console.log(innerVariable); //World
//     console.log(outerVariable); //Hello
//   }
//   console.log(innerVariable); //undefined
//   innerFunction();
// }

//print all array elements

//Method one : Using isArray()
// const arr = [1, [1, 2, 3], 4, 5, [6, 95, 71], 80];
// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       printArray(arr[i]);
//     } else {
//       console.log(arr[i]);
//     }
//   }
// }

// printArray(arr);

//Method two :  Using undefined
// const arr = [1, [1, 2, 3], 4, 5, [6, 95, 71], 80];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length === undefined) {
//     console.log(arr[i]);
//   } else {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
// }

//Method two :  Using typeOf
// const arr = [1, [1, 2, 3], 4, 5, [6, 95, 71], 80];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") console.log(arr[i]);
//   else {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
// }

//To check given array is mtarix or not
// function matrix(arr) {
//   if (!Array.isArray(arr)) return false; //arr = 5 or arr= 'a'
//   if (!Array.isArray(arr[0])) return false; //[1,3,4,6]
//   let colsize = arr[0].length;
//   for (let array of arr)
//     if (array.length != colsize) {
//       return false;
//     }
//   return true;
// }
// console.log(
//   matrix([
//     [1, 2],
//     [3, 4],
//   ])
// );

//zero and infinity

//calculate prooduct of sum of each rows
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function product(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     product *= sum;
//   }
//   return product;
// }
// console.log(product(arr));

//sum of matrix
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function product(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum;
// }
// console.log(product(arr));

//assignment : print all subarrays
//print sum of all subarrays
// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   let result = "";
//   for (let j = i; j < arr.length; j++) {
//     result += arr[j];
//     console.log([result.trim()]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j <= arr.length; j++) {
//     console.log(arr.slice(i, j));
//   }
// }

//sum of subarray
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     let sum = 0;
//     for (let k = i; k <= j; k++) {
//       sum += arr[k];
//     }
//     console.log(sum);
//   }
// }
