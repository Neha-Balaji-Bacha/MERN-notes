//🔹 Basic Loop Questions
//1.// 1. Print numbers from 1 to N
function loop(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
loop(5);

//2.Print even numbers from 1 to N
function loop(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
loop(5);

// 3. Print odd numbers from 1 to N
function loop(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}
loop(5);

// 4. Multiplication table of a number
function loop(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
loop(5);

// 5. Sum of first N natural numbers
function loop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
loop(5);

// 6. Factorial of a number
function loop(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}
loop(5);

// 7. Reverse a number
function loop(n) {
  let rev = 0;
  while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }
  console.log(rev);
}
loop(598);

// 8. Count digits in a number
function loop(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  console.log(count);
}
loop(598);

// 9. Sum of digits in a number
function loop(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  console.log(sum);
}
loop(598);

//🔹 Intermediate Loop Questions
// 10. Check if a number is prime
function loop(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(loop(4));

// 11. Print all prime numbers from 1 to N
function loop(n) {
  for (let i = 2; i < n; i++) {
    let isprime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
      console.log(i);
    }
  }
}
loop(20);

// 12. GCD of two numbers
function GCD(n, m) {
  let min = Math.min(n, m);
  for (let i = min; i > 0; i--) {
    if (n % i == 0 && m % i == 0) {
      console.log(i);
      break;
    }
  }
}
GCD(12, 60);
//or
function GCD(n, m) {
  while (m !== 0) {
    let temp = m;
    m = n % m;
    n = temp;
  }
  console.log("GCD:", n);
}

GCD(12, 60);
//or
function GCD(n, m) {
  if (m === 0) return n;
  return GCD(m, n % m);
}

console.log("GCD:", GCD(60, 12));

// 13. LCM of two numbers
function lcm(a, b) {
  let result = (a * b) / GCD(a, b); //call above GCD
  console.log("LCM:", result);
}
lcm(12, 18);

// 14. Fibonacci series up to N terms
function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  console.log("Fibonacci(" + n + ") =", b);
}

Fibonacci(5);

//15. Armstrong number check
function Armstrong(n) {
  let digit = n.toString().length;
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let digits = temp % 10;
    sum += Math.pow(digits, digit);
    temp = Math.floor(temp / 10);
  }
  console.log(sum === n);
}
Armstrong(154);

// 16. Palindrome number check
function palindrome(num) {
  let original = num;
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  console.log(original == rev);
}
palindrome(129);

// 17. Factors of a number
function printFactors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i);
  }
}
printFactors(28);

//🔹 Pattern Questions
// 18. Right triangle star pattern
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
rightTriangle(7);

// 19. Inverted triangle
function invertedrightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}
invertedrightTriangle(7);

// 20. Pyramid pattern
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}
pyramid(7);

// 21. Number triangle
function numberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}
numberTriangle(5);

// 22. Floyd’s triangle
function floydTriangle(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}
floydTriangle(5);

// 24. Largest digit in a number
function largestDigit(num) {
  let max = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit > max) max = digit;
    num = Math.floor(num / 10);
  }
  console.log("Largest Digit:", max);
}
largestDigit(7594);

// 25. Smallest digit in a number
function smallestDigit(num) {
  let min = 9;
  while (num > 0) {
    let digit = num % 10;
    if (digit < min) min = digit;
    num = Math.floor(num / 10);
  }
  console.log("Smallest Digit:", min);
}
smallestDigit(7594);

//26.prime factors
function primeFactors(num) {
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      // check if i divides num
      console.log(i); // i is a prime factor
      num /= i; // divide num by i
    }
  }
}

primeFactors(7);

//27.Diamond
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      result += "*";
    }
    console.log(result);
  }

  for (let i = n - 1; i >= 1; i--) {
    let result1 = "";
    for (let j = 1; j <= n - i; j++) {
      result1 += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      result1 += "*";
    }
    console.log(result1);
  }
}
diamond(4);

//28.Hollow Diamond
function hollowDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
  for (let i = n - 1; i >= 1; i--) {
    let result = "";
    for (let j = 1; j <= n - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}
hollowDiamond(5);

//29.Alphabet pattern
for (let i = 0; i < 5; i++) {
  let ch = String.fromCharCode(65 + (i % 26));
  console.log(ch.repeat(i + 1));
}

//30.Descending no pattern
for (let i = 1; i <= 5; i++) {
  let result5 = "";
  for (let j = i; j >= 1; j--) {
    result5 += j;
  }
  console.log(result5);
}

//31.Staircase
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}

//32.Print Continuous Character Patternlet n = 5;
for (let i = 0; i < 5; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += String.fromCharCode(65 + ((i + j) % 26));
  }
  console.log(result);
}
