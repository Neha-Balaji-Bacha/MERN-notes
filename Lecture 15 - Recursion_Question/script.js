//write a recursive function to find the sum of first n natural no
function sum(n) {
  if (n <= 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(5));

//GCD
function GCD(n, m) {
  let minno = Math.min(n, m);
  for (let i = minno; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      console.log(i);
      break;
    }
  }
}
console.log(GCD(12, 60));

// Time Complexity: O(log(min(a, b)))
// Space Complexity: O(1)
function GCD1(a, b) {
  while (a != 0) {
    let temp = a;
    a = b % a;
    b = temp;
  }
  return b;
}
console.log(GCD1(15, 25));

// Time Complexity: O(log(min(a, b)))
// Space Complexity: O(log(min(a, b)))
//Recursion
function GCD2(a, b) {
  if (a == 0) return b;
  return GCD2(b % a, a);
}
console.log(GCD2(15, 25));

//GCD of array
let arr = [27, 12, 18, 24, 30];
let gcdArr = 0;
for (let i = 0; i < arr.length; i++) {
  gcdArr = GCD1(gcdArr, arr[i]);
}

//TCnd SC of n always less than 10^7
//GCD of more that 2 no
//gcd(a,b,c)=gcd(gcd(a,b),c)=gcd(a,gcd(b,c)= gcd(b,gcd(a,c))

//H.W
//Fibonacci  : O(2^n)
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

//find pow
function pow(a, b) {
  let ans = Math.pow(a, b);
  return ans;
}
console.log(pow(2, 3));

//TC : O(n)
function pow1(a, b) {
  let ans = 1;
  for (let i = 1; i <= b; i++) {
    ans = ans * a;
  }
  return ans;
}
console.log(pow1(2, 3));

//Binary exponetiantion
function BinaryExp(a, n) {
  if (n == 0) return 1;
  if (n == 1) return a;
  let temp = BinaryExp(a, Math.floor(n / 2));
  return temp * temp * a ** (n % 2);
}
console.log(BinaryExp(5, 15));

// function power(a, b) {
//   if (b === 0) return 1;

//   let half = power(a, Math.floor(b / 2));

//   if (b % 2 === 0) {
//     return half * half;
//   } else {
//     return a * half * half;
//   }
// }
