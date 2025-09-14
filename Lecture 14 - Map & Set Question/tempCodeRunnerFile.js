function num(N) {
  if(N>1) return;
  let output = num(N-1);
  return output;
}
console.log(num(5));