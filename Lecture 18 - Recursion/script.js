//Generate all valid parenthesis of length n
//Given a parenthesis sequence,determine if it's valid or not
//Input : ()()(())
function parenthesis(str) {
  let n = str.length;
  if (n % 2) return false;
  let open = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] == "(") {
      open++;
    } else {
      if (open > 0) open--;
      else return false;
    }
  }
  if (open != 0) return false;
  return true;
}
console.log(parenthesis("()()(())())"));

//using recursion
let result = [];
function parenthesis1(n, str = "", ind = 0, open = 0, close = 0) {
  if (open < close) {
    return;
  }
  if (ind == n) {
    if (open === close) {
      result.push(str);
    }
    return;
  }
  parenthesis1(n, str + "(", ind + 1, open + 1, close);
  parenthesis1(n, str + ")", ind + 1, open, close + 1);
}
parenthesis1(6);
console.log({ result });

//method 2
//TC : O(2^N) SC : O(n)
let result1 = [];
function parenthesis1(n, str = "", ind = 0, open = 0, close = 0) {
  if (open < 0) {
    return;
  }
  if (ind == n) {
    if (open === 0) {
      result1.push(str);
    }
    return;
  }
  parenthesis1(n, str + "(", ind + 1, open + 1);
  parenthesis1(n, str + ")", ind + 1, open - 1);
}
parenthesis1(6);
console.log({ result1 });

//permutation of string
function swapStr(str, i, j) {
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr.join("");
}

/* T.C -> ~O(N^N) */
let strPermutations = [];
function permutations(str, ind = 0) {
  if (ind == str.length - 1) {
    strPermutations.push(str);
    return;
  }
  for (let i = ind; i < str.length; i++) {
    //creating a new swapperStr, inorder to keep str unchanged after swapping
    let swappedStr = swapStr(str, ind, i);
    permutations(swappedStr, ind + 1);
  }
}

permutations("abc");
console.log({ strPermutations });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Solution {
  // Swap characters i and j in a string
  swapStr(str, i, j) {
    let arr = str.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
  }
  solve(input) {
    const str = input.trim();
    let strPermutations = [];
    const permutations = (s, ind = 0) => {
      if (ind === s.length - 1) {
        strPermutations.push(s);
        return;
      }
      for (let i = ind; i < s.length; i++) {
        let swappedStr = this.swapStr(s, ind, i);
        permutations(swappedStr, ind + 1);
      }
    };
    permutations(str);
    // Remove duplicates and sort lexicographically
    const uniqueSorted = Array.from(new Set(strPermutations)).sort();
    uniqueSorted.forEach((p) => console.log(p));
  }
}
rl.on("line", (input) => {
  const solution = new Solution();
  solution.solve(input);
  rl.close();
});
