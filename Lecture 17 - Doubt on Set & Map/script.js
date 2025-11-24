//compute time complexity of this function
function recursion(n) {
  if (n == 0) retrun;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

//hollow diamond
function hollowDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
  for (let i = n - 1; i >= 1; i--) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}
hollowDiamond(4);

//set and map
//function to find length of longest substring with non repeating char
// input :  "abbcda"
// output : 4 (bcda)

function substring(str) {
  // let map = new Map();
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let ans = "";
    for (let j = i; j < str.length; j++) {
      ans += str[j];
    }
    if (longest < ans) {
      longest = ans;
    }
  }
  return longest;
}
console.log(substring("abbcda"));

//print this pattern ,given N=5
// A
// AB
// BCD
// CDEF
// DEFGH
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let ans = "";
    let startCharCode;

    if (i === 0) {
      console.log("A");
      continue;
    } else if (i === 1) {
      startCharCode = 65;
    } else {
      startCharCode = 65 + (i - 1);
    }

    for (let j = 0; j <= i; j++) {
      ans += String.fromCharCode(startCharCode + j);
    }

    console.log(ans);
  }
}

pattern(5);

function longestDistinctSubstr(s) {
  let set = new Set();
  let left = 0,
    maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
// Example
console.log(longestDistinctSubstr("abbcda")); // 4 ("bcda")
