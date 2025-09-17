console.log(+"23.50" + 12); //35.5
const arr1 = [1, 2, 3];
arr1[5] = 10;
console.log(arr1.length); // 6
console.log(arr1); // [ 1, 2, 3, <2 empty items>, 10 ]

//toFixed() method returns a string representing the number with a specified number of digits after the decimal point.
const num = 23.5;
console.log(num.toFixed(3) + 7); // 23.5007
console.log(+num.toFixed(3) + 7); // 30.5
