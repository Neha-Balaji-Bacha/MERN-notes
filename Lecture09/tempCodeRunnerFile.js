let str = "Hello World";
console.log(str.substring("1vd")); // "Hello World"-->Number("1vd")  // NaN --->If start is NaN → it’s treated as 0. --> str.substring(0);  // returns the whole string
console.log(str.substring()); //whole string
console.log(str.substring(1)); // "ello World"
console.log(str.substring(NaN)); // "Hello World" --> NaN --> It’s treated as 0. --> str.substring(0);  // returns the whole string
//Unlike slice(), if start > end, substring() swaps them (substring(2,7)).
console.log(str.substring(7, 2)); // "llo W"