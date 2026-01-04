// function test() {
//   return Promise.resolve(90);
// }
//Equivalent to:
async function test() {
  return 10;
}

console.log(test()); // Promise


function getProducts() {
  const res = fetch("https://dummyjson.com/products");
  console.log(res);//not a actual data
  const data = res.json();//res.json() itself is asynchronous and also returns a Promise, so both steps must be awaited.(take a time). so it occurs error.
  console.log({data});
}

getProducts();
