// Every time a recursive function calls itself, JS adds a new stack frame to the call stack.
// If recursion gets too deep → you’ll get an error:
function recurse(n) {
  console.log(n);
  if (n === 0) return;
  recurse(n - 1);
}

recurse(10000); //  RangeError: Maximum call stack size exceeded

//repeat()
function printStars(n) {
  if (n === 0) return;
  printStars(n - 1);
  console.log("*".repeat(n));
}

printStars(5);

function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("neha")); // ahen

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam")); // true
