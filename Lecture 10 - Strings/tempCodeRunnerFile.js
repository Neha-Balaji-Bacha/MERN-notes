function numberTriangle(n) {
  console.log("1");
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = i; j < i+i+1; j++) {
      row += j;
    }
    console.log(row);
  }
}
numberTriangle(5);