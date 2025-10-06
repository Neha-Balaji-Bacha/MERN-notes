try {
  let a = 10;
  let b = 0;
  if (b == 0) throw "can not divide by zero!";
  console.log(a / b);
} catch (error) {
  console.log("Error");
}

try {
  let fileopened = false;
  if (!fileopened) throw new Error("file not found");
  console.log("Reading file...!!");
} catch (err) {
  console.log("caught", e.message);
} finally {
  console.log("I am always execute");
}

//Theory concept
//1.Once
// The once() function ensures that a given function can only be executed once.
// After the first call, it always returns the same result without running again.

//2.Memoization
// When the same inputs occur again, the function returns the cached result for same input instead of recomputing.
//ex : Fibonacci
