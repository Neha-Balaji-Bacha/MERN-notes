let n = 5;
for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n - i; j++) {
    result += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k == 1 || k == 2 * i - 1 || i==n) {
      result += "*";
    } else {
      result += " ";
    }
  }
   console.log(result);
}