const arr = [NaN];
console.log(arr1.includes(NaN)); // true
console.log(arr1.indexOf(NaN)); // -1

const [x, y = 10] = [5];
console.log(x, y); // 5 10

console.log([] == []); // false
console.log([] == ![]); //true

console.log(1 * "l" + 90 / 8 + "-"); //NaN-

console.log(null + 5); //5
console.log(undefined + 5); //Nan

console.log(true + true); //2

console.log(true + 3); //4

console.log("hello" + 30 / 2); //hello15

console.log(" " + 5); //" 5"

let n = " ";
console.log(n); //single space

console.log(n.length); //1 length

console.log(n + 3); //NaN

let empty = [] + []; //""
console.log(empty);
