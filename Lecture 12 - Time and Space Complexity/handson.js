// Key Intuition
// Multiply = when the inner loop is repeated for every outer loop iteration.
// Add = when the inner loop is repeated for only a constant number of times (like once, or twice, or 10 times).

// 1. Linear Loops
// for (i = 0; i < n; i++) {...}
// while (i < n) { i++; }

// O(n) (direct proportional to n).

//  2. Decreasing by Division
// while (n > 0) { n = n / 2; }

// Each step reduces by factor → O(log n).
// (Any n = n / k → O(log n)).

// 3. Increasing by Multiplication
// for (i = 1; i < n; i *= 2) {...}

// O(log n).

// 4. Nested Loops Multiply
// for (i = 0; i < n; i++) {
//    for (j = 0; j < n; j++) {...}
// }

// O(n²) (outer × inner).

//  5. Nested Different Growth
// for (i = 1; i < n; i *= 2) {   // log n
//    for (j = 0; j < n; j++) {...} // n
// }

// Multiply → O(n log n).

// 6. Shrinking Loop Work
// i = n;
// while (i > 0) {
//    for (j = 0; j < i; j++) {...}
//    i = i / 2;
// }

// Work = n + n/2 + n/4 + … ≈ O(n).

// 7. Constant Work Inside Loop
// while (n > 0) {
//    n--;  // or n += constant
// }

// Runs n times → O(n).

// 8. Polynomial Growth
// for (i = 0; i < n; i++) {
//    for (j = 0; j < n; j++) {
//       for (k = 0; k < n; k++) {...}
//    }
// }

// 3 loops → O(n³).

// 9. Multiple Independent Loops
// for (i = 0; i < n; i++) {...}
// for (j = 0; j < n; j++) {...}

// Add them → O(n + n) = O(n).

// Time Complexity: O(n)
// Space Complexity: O(1)
let string = {
  countVowels: function (str) {
    let vowels = "aeiouAEIOU"; //fixed length hence o(1)
    let count = 0;

    let i = 0;
    while (i < str.length) {
      if (vowels.includes(str[i])) {
        count++;
      }
      i++;
    }

    return count;
  },
};
console.log(string.countVowels("Neha Bacha"));
