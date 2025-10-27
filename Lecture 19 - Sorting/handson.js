function frequencySort(arr) {
  let freq = {};

  let maxPos = 0,
    maxNeg = 0;
  for (let num of arr) {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }

    if (num >= 0) {
      if (num > maxPos) maxPos = num;
    } else {
      if (-num > maxNeg) maxNeg = -num;
    }
  }

  let sorted = [];
  for (let i = -maxNeg; i < 0; i++) {
    while (freq[i] > 0) {
      sorted.push(i);
      freq[i]--;
    }
  }
  for (let i = 0; i <= maxPos; i++) {
    while (freq[i] > 0) {
      sorted.push(i);
      freq[i]--;
    }
  }

  return sorted;
}
let arr = [5, -2, 4, 2, -2, 8, -5, 0];
console.log(frequencySort(arr));

//FIBONACCI (CONTEST)
function isFibonacci(n) {
  function helper(a, b) {
    if (a === n || b === n) return true;
    if (b > n) return false;
    return helper(b, a + b);
  }
  return helper(0, 1);
}
console.log(isFibonacci(13)); // true
console.log(isFibonacci(14)); // false

// Bubble Sort : keeps swapping adjacent elements until large ones  to the end SO On (many swaps).
// Selection Sort : directly finds the minimum and swaps only once per pass (fewer swaps, but more comparisons).
