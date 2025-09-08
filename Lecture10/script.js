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

//method 2
const caseObject = {
  //camelCase - studentFirstName
  camelCase: function (str) {
    let ccase = "";
    str.trim();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        ccase += str[i + 1].toUpperCase();
        i++;
      } else ccase += str[i];
    }

    return ccase;
  },
  //snake_case: student_first_name
  snakeCase: function (str) {
    return str.trim().replaceAll(" ", "_");
  },
};
const str = "student first name";
console.log("camelCase of '" + str + "' is: ", caseObject.camelCase(str));
console.log("snake_case of '" + str + "' is: ", caseObject.snakeCase(str));

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
  str = str.trim();
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
  str = str.trim();
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
//method 2
function firstNonRepeatingCharacter(str) {
  str = str.trim();

  let n = str.length;

  for (let character of str) {
    if (str.indexOf(character) === str.lastIndexOf(character)) return character;
  }

  return "No repeating character";
}

//HW : Reverse each word of a string
function reverseString(str) {
  let input = str.split(" ");
  let result = "";
  for (let j = 0; j < input.length; j++) {
    let ans = "";
    for (let i = input[j].length - 1; i >= 0; i--) {
      ans += input[j][i];
    }
    result += ans + " ";
  }
  console.log(result.trim());
}
reverseString("I am happy");
