//The split() method is used on strings to divide them into an array of substrings, based on a separator (like space, comma)
//Double NOT (!!) to Convert to Boolean
// console.log(!!"hello"); // true
// console.log(!!0);       // false

//Diamond pattern
// function Diamond(n) {
//   //top
//   for (let i = 1; i <= n; i++) {
//     let result1 = "";
//     for (let j = 1; j <= n - i; j++) {
//       result1 += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       result1 += "*";
//     }
//     console.log(result1);
//   }

//   //bottom
//   for (let i = n - 1; i >= 1; i--) {
//     let result2 = "";
//     for (let j = 1; j <= n - i; j++) {
//       result2 += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       result2 += "*";
//     }
//     console.log(result2);
//   }
// }
// Diamond(5);

//hollow pattern
function hollowDiamond(n) {
  //top
  for (let i = 1; i <= n; i++) {
    let result1 = "";
    for (let j = 1; j <= n - i; j++) {
      result1 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result1 += "*";
      } else {
        result1 += " ";
      }
    }
    console.log(result1);
  }

  //bottom
  for (let i = n - 1; i >= 1; i--) {
    let result2 = "";
    for (let j = 1; j <= n - i; j++) {
      result2 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result2 += "*";
      } else {
        result2 += " ";
      }
    }
    console.log(result2);
  }
}
hollowDiamond(5);
