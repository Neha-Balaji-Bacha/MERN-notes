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