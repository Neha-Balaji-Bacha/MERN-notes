//Give a variable name,separated by space write two functions convert this variable to camel case and convert this variable name to snake case
//camel case
function camelCase(Name) {
  const words = Name.split(" ");
  let camelCaseName = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    camelCaseName +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return camelCaseName;
}
console.log(camelCase("student first name"));

//snake case
function snakeCase(Name) {
  const words = Name.split(" ");
  let snakeCase = "";
  for (let i = 0; i < words.length; i++) {
    snakeCase += words[i].slice(0).toLowerCase();
  }
  return snakeCase;
}
console.log(snakeCase("student first name"));

//Reverse string
function reverse(str) {
  let result = "";
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}
reverse("hello");

//palindrome
function palindrome(str) {
  let original = str;
  let result = "";
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result == original) {
    console.log("string is palindrome");
  } else {
    console.log("not a palindrome");
  }
}
palindrome("hello");

//no of words in string
function words(str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  console.log(count);
}
words("my name is neha");

//longest word in string
function longest(str) {
  let words = str.split(" ");
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      word = words[i];
    }
  }
  console.log(word);
}
longest("MERN Batch");

//find first non-repeating char in a string use indexOf aand lastIndexOf
function nonRepaeting(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let char in charCount) {
    if (charCount[char] == 1) {
      return char;
    }
  }
}
console.log(nonRepaeting("abacd"));
