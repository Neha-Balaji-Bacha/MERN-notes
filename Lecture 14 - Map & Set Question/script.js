//find frequency of each element in the arr
let arr = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

//method - 1
for (let key of map.keys()) {
  console.log(key, map.get(key));
}
//method - 2
for (let [key, value] of map) {
  console.log({ key, value });
}
//method - 3
let obj = {};
for (let key of map.keys()) {
  obj[`${key}`] = map.get(key);
}
console.log(obj);

//Remove duplicates from an array and print the array
let arr2 = [1, 2, 3, 2, 3, 5, 1, 3, 2];
arr3Set = [...new Set(arr2)];
console.log(arr3Set);

//Anagrams TC : O(n+m) SC : O(26)
let a = "mao";
let b = "dam";
function Anagrams(a, b) {
  if (a.length != b.length) return false;
  let freObj = {};
  for (let i = 0; i < a.length; i++) {
    freObj[a[i]] = (freObj[a[i]] || 0) + 1;
  }
  for (let i = 0; i < b.length; i++) {
    if (!freObj[b[i]]) return false; //silent , sillent
    freObj[b[i]] = freObj[b[i]] - 1;
  }
  for (let value of Object.values(freObj)) {
    if (value) {
      return false;
    }
    return true;
  }
}
console.log(Anagrams(a, b));
//Find the frequency of alll words in a paragraph (only spaces, A-Z & a-z letters will be there)
// const paragraph = "Hello how are you How was your daay Did you eat how did you find that";
// let str = paragraph.toLowerCase().split(" ");
// console.log(str);
// let map1 = new Map();
// for(let i=0;i<str.length;i++){
//     if(map1.has(str[i])){
//         map1.set(str[i],map1.get(str[i])+1);
//     }
//     else{
//         map1.set(str[i],1);
//     }

//    // map1.set(str[i],(map1.get(str[i])+0) + 1);
// }
// for(let key of map1.keys()){
//     console.log(key,map1.get(key));
// }

// let wordfre = {};
// for(let [key,value] of map1.keys()){
//     wordfre[key]=value;
// }
// console.log(wordfre);

//================Recursion=================
//factorial
//TC : o(n)
//SC : O(1), however it uses callstack space, but this is not considered in spce complexity
function factorial(n) {
  if (n == 0) return 1;
  let fact = n * factorial(n - 1);
  return fact;
}
console.log(factorial(5));

//print no from 1 to n
function num(N) {
  if (N == 0) return;
  num(N - 1);
  console.log(N);
}
num(5);

//Two things to look for a correct recrsive code 
//A. Base condition must always get hit
//B. combining retun value of recursive 
