console.log(+"23.50" + 12); //35.5
const arr1 = [1, 2, 3];
arr1[5] = 10;
console.log(arr1.length); // 6
console.log(arr1); // [ 1, 2, 3, <2 empty items>, 10 ]

//toFixed() method returns a string representing the number with a specified number of digits after the decimal point.
const num = 23.5;
console.log(num.toFixed(3) + 7); // 23.5007
console.log(+num.toFixed(3) + 7); // 30.5


//Passing parameters in different brackets is valid only if the function is curried (returns another function after the first call).
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(2)(3)); 

//Find the missing number in an array (1 to n).

function missingNo(arr) {
  let n = arr.length + 1; //since one no is missing
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}
console.log(missingNo([1, 3, 4, 5]));