//print 1 to n natural no
function printno(n) {
  if (n === 0) return;
  printno(n - 1);
  console.log(n);
}
printno(5);

//print n to 1 natural no
function printno(n) {
  if (n === 0) return;
  console.log(n);
  printno(n - 1);
}
printno(5);

//sum of n natural no
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(5));

//power of function
function power(n, m) {
  if (m == 0) return 1;
  return n * power(n, m - 1);
}
console.log(power(5, 2));

//factorial
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

///fibonacci
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(3));

//reverse a string
function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("hello"));

//To check palindrome
function palindrome(str) {
  if (str.length <= 1) return "palindrome";
  if (str[0] !== str[str.length - 1]) return "not palindrome";
  return palindrome(str.slice(1, str.length - 1));
}
console.log(palindrome("madam"));

function tocheck(str, left, right) {
  if (left >= right) return "palindrome";
  if (str[left] != str[right]) return "not palindrome";
  return tocheck(str, left + 1, right - 1);
}
function ispalindrome(str, left, right) {
  return tocheck(str, 0, str.length - 1);
}
let str = "mam";
console.log(ispalindrome(str));

//to check palindrome
