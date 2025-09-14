function tocheck(str, left, right) {
  if (left >= right) return "palindrome";
  if (str[left] != str[right]) return "not palindrome";
  return tocheck(str, left + 1, right - 1);
}
function ispalindrome(str, left, right) {
  return tocheck(str, 0, str.length-1);
}
let str = "mam";
console.log(ispalindrome(str));