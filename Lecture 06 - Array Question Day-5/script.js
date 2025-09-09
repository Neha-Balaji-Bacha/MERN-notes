//slice :  does not change the original array
//task --1
// let arr = [1, 2, 34, 9];
// arr = arr.slice(0, arr.length - 1);
// console.log(arr);

//modify the original array
// arr.splice(arr.length - 1, 1);
// console.log(arr);

//by changing length of array
// arr1.length = arr1.length - 1;
// console.log(arr1);

//task -- 2
// let arr1 = [1, 2, 3, 4];
// let a = arr1.shift();
// console.log(a);

// let arr1 = [1, 2, 3, 4];
// let a = arr1.push(8);//retrun the length shift and pop after remove ele ,unshift & push return len of after adding element
// console.log(a)//5
// console.log(arr1);//[ 1, 2, 3, 4, 8 ]

// const arr2 = [1,2,3,4,5,6];
// let b = arr2.pop(6);
// console.log(b)//6
// console.log(arr2);//[ 1, 2, 3, 4, 5]

// arr1.shift();
// console.log(arr1);

//using loops
let arr1 = [1, 2, 3, 4];
for (let i = 0; i < arr1.length - 1; i++) {
  arr1[i] = arr1[i + 1];
}
arr1.length = arr1.length - 1;
console.log(arr1); //[ 2, 3, 4 ]

//task--3
//Rotate array left direction
let arr2 = [10, 20, 30, 40, 50];
arr2.pop();
arr2.unshift(50);
console.log(arr2);

let ans = [];
arr2.pop();
ans.unshift(50);
let out = ans.concat(arr2);
console.log(out);

let arr3 = [10, 20, 30, 40, 50];
arr3.shift(10);
arr3.push(10);
console.log(arr3);
