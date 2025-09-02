function reverse(str) {
  let result = "";
  let n = str.length;
  for (let i = n - 1; i >= 0; i++) {
    result += str[i];
  }
  console.log(result);
}
reverse("hello");