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

//Rotate a string (cyclic shift)
function rotateString(str, k) {
  k = k % str.length;
  return str.slice(-k) + str.slice(0, -k);
}
console.log(rotateString("abcdef", 2)); // "efabcd"

console.log("Ha".repeat(3)); // "HaHaHa"

//Count vowels and consonants in a string
function alphabet(str) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (vowels.includes(ch)) {
      vowelCount++;
    } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}
console.log(alphabet("Accio School 123!"));

//Convert a string to uppercase/lowercase without using built-in methods.
function toLowerCaseCustom(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(toLowerCaseCustom("Hello WORLD"));
function toUpperCaseCustom(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      // convert to uppercase
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
    return result;
  }

  console.log(toUpperCaseCustom("hello World"));
}

//Remove all whitespace characters from a string.
function removeWhitespace(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch !== " " && ch !== "\t" && ch !== "\n" && ch !== "\r") {
      result += ch;
    }
  }
  return result;
}
console.log(removeWhitespace("  Hello   World \n JavaScript\t "));
// Output: "HelloWorldJavaScript"

//Find the length of a string without using .length
function stringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

console.log(stringLength("Hello World")); // 11

//Remove duplicate characters from a string.
function removeDuplicates(str) {
  let freq = new Array(256).fill(0); // frequency for all ASCII characters
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (freq[code] === 0) {
      result += str[i];
      freq[code] = 1;
    }
  }
  return result;
}

console.log(removeDuplicates("programming")); // "progamin"
console.log(removeDuplicates("banana")); // "ban"

//Print duplicate characters in a string.
function Duplicates(str) {
  let freq = new Array(256).fill(0); // frequency for all ASCII characters
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    freq[code]++;
    if (freq[code] >= 2) {
      result += str[i];
    }
  }
  return result;
}

console.log(Duplicates("programming")); // "progamin"
console.log(Duplicates("banana")); // "ban"

//find frequency of each char
function frequency(str) {
  let freq = new Array(256).fill(0); // frequency for all ASCII characters
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    freq[code]++;
  }
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (freq[code] > 0) {
      console.log(str[i], "-->", freq[code]);
      freq[code] = 0;
    }
  }
}
frequency("progarmming");

//Absolute Difference Sum
// Given an array A of size N. Value of an element Ai is defined as the sum of absolute difference of all elements of the array with Ai. More formally, the value of an element at index i is sum of |Ai - Aj| over all j (1 <= j <= N). Find the maximum such value over all i (1 <= i <= N) in the array.

// Note: Given array is 1-based index

// Input Format
// First line of the input contains a single integer N. The second line of the input contains N space seperated integers.

// Output Format
// Print the maximum such value over all i (1 <= i <= N) in the array.

// Example 1
// Input

//  6
//  1 1 5 5 8 9

// Output

//  25

// const arr = [1, 1, 5, 5, 8, 9];
// let maxsum = 0;
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//   let sum = 0;
//   for (let j = 0; j < n; j++) {
//     if (i == j) continue;
//     sum += Math.abs(A[i] - A[j]);
//   }
//   maxsum = Math.max(maxsum, sum);
// }
// console.log(maxsum);
