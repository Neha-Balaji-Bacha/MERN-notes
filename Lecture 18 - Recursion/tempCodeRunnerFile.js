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
