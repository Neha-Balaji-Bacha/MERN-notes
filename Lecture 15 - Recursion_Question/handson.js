//string reverse
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));

//calculate power
function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}
console.log(power(2, 5));
