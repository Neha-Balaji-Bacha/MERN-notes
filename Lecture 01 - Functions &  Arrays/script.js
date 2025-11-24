// console.log("Hello World");
//function craetion or defination
// function result(){
//     console.log("Hello World");
// }
// //calling or invoking
// result();
// result();
// console.log("Bye World");
// console.log("Bye World");
// result();
// console.log("Bye World");
// console.log("Bye World");
// result();
// result();

//parameterized function
// function result(username){
//     console.log("Hello World" + username);
// }
// result("Neha");
// result("Nikita");

//multiple parameters
// function result(name,server){
//     console.log("Hello " + name +" Welcome to our " + server);
// }
// result("Rahul","website");
// result("Rani","app");

//default value (not passing second parameter)
// function result(name,server="App"){
//     console.log("Hello " + name +" Welcome to our " + server);
// }
// result("Rahul","website");
// result("Rani"); //undefined

//2. Function Hoisting
// greetUser("Neha");  // works even before declaration!

// function greetUser(name) {
//   console.log("Hello " + name);
// }

//NaN
// function sum(a,b){
//     console.log(a+b);
// }
// sum(8);

//nested function
// function personDetails(name,birthyear){
//     console.log("Name: " + name);
//     console.log("Age: ", calculateAge(birthyear));
// }
// function calculateAge(birthyear){
//     return 2025 - birthyear;
// }
// personDetails("Neha",2024);

//must same parameter name and num*num
// function squared(num){
//     console.log(num*num);
// }
// squared(20);
// squared(21);

// function squared(num){
//     return num*num;
// }
// console.log(squared(20));
// console.log(squared(21));

// function result(name,server="App"){
//     console.log("Hello " + name + server);
// }
// result("Rahul ","website");
// result("Rani "); //undefined

//array 
// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// console.log(students[4]);

// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// for(let i=0;i<students.length;i++){
//     if(i%2 === 0){
//         console.log(Number(i+1),students[i]);
//     }
//}

//Return index and value (i gives o/p in string)
// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// for(let i in students){
//     if(i%2 === 0){
//         console.log(Number(i)+1,students[i]);
//     }
// }

//only returns values
const marks = [1, 2, 4, 8, 9, 7];
for (let i of marks) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//forEach → can’t break and continue
// arr = [1,2,3,9,8];
// arr.forEach(v => {
//   if (v === 2) {
//     break; //Error: Illegal break statement
//   }
//   console.log(v);
// });

// [1, 2, 3].forEach(v => {
//   if (v === 2) return; // just skips this iteration
//   console.log(v);
// });

// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// students[0]=5
// console.log(students);
// const students = new Array["neha","nikita","nikhil","kapil","vaish","dixsha"];

//array manipulation
// const iplTeams = ["csk","rcb","mi","srh"];
// iplTeams.push("Gt");
// console.log(iplTeams);
// iplTeams.unshift("kkr");
// console.log(iplTeams);
// iplTeams.shift("kkr");
// console.log(iplTeams);
// iplTeams.pop("Gt");
// console.log(iplTeams);
// console.log(iplTeams.slice(2));
// console.log(iplTeams.slice(-1));

// //Class Notes
// console.log("Hello World");

/* FUNCTIONS
 - reuse some line of code  - for loop?
 - kuch values pass krke kuch operations kr skte h -- customize any function through parameters
 - if we want to use some code repeatedly - for loop?
 - whenever we need, we can have a function of that action, and call it
 - block of code that performs specific tasks - true
 - function is set of code that allows reusability to perform same task


 - when we want to use some specific lines of code (code snippet) to be executed multiple times
    and we don't want when and where to use this code snippet
 - follow DRY Principle - Do not Repeat Yourself
*/

// Function creation or Definition
/* function greetUser() {
  console.log("Hello World again");
  console.log("Welcome to function lecture");
}

// calling/invoking a function
greetUser();
console.log("Bye World");
greetUser();
greetUser();
greetUser();
console.log("Bye World");
greetUser();
greetUser(); */

/* ================================== */
/* output
Hello World
Hello World again
Welcome to function lecture
Bye World
Hello World again
Welcome to function lecture
Hello World again
Welcome to function lecture
Hello World again
Welcome to function lecture
Bye World
Hello World again
Welcome to function lecture
Hello World again
Welcome to function lecture
*/

/*
Function properties

- Naming rules are same as variable naming rules
- calling/invoking a function
- Function creation or Definition
- Parameters?
 */

/* Parameterized Functions */
function greetUser(userName) {
  console.log("Hello " + userName);
}

greetUser("Rahul");
greetUser("Rani");

// Multiple parameters
function greetUser2(firstName, lastName) {
  console.log("Hello " + firstName, lastName);
}

greetUser2("Rahul", "Wanjare");
greetUser2("Rani", "Kumari");

// TASK
/*OUTPUT: 
Hello Rahul, Welcome to our Website 
Hello Rani, Welcome to our App 
Hellp Prateek, Welcome to our Office
 */

//CODE of above task
function welcomeUser(userName, place = "App") {
  console.log("Hello " + userName + " Welcome to our " + place);
}
welcomeUser("Rahul", "Website");
welcomeUser("Rani", "App");
welcomeUser("Prateek", "Office");
welcomeUser("Sargar"); // not passing the second argument

function sum(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
  //console.log("Hello"); <-- unreachable code
}

let sum34 = sum(3, 4);
console.log(sum34);

// nested functions
function personalDetails(name, birthYear) {
  console.log("Name: " + name);
  console.log("Age: ", calculateAge(birthYear));
}

function calculateAge(birthYear) {
  return 2025 - birthYear;
}

console.log(personalDetails("Jayesh", 2004));

// function to calculate sqaure of numbers
/* output
squared(20); // 400
squared(21); // 441
squared(5); // 25
*/

//parenthesis -> () -> function

console.log("Hello", 2 + 2); // will treat everything after comma as a single arguments
console.log("Hello " + 2 + 2); // will treat everything as a one argument

//==================== Arrays =====================
const students = ["Rahul", "Puneet", "Prateek", "Rani", "Riya", "Sumit"];
//print 2nd student
console.log(students[1]);

//print roll number and name of 4th student
console.log(4, students[3]);

//print all students
/* console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); */

//print all students using loops
for (let i = 0; i < 5; i++) {
  console.log(students[i]);
}

//print all students using loops, roll number wise
for (let i = 0; i < students.length; i++) {
  console.log(i + 1, students[i]);
}

//for .. in loop
console.log("for .. in loop");
for (let i in students) {
  // i -> datatype -> string
  console.log(Number(i) + 1, students[i]);
}
console.log(students["2"]);

//TASK - print all students with even roll numbers
console.log("Student with even roll numbers: ");
for (let i in students) {
  (Number(i) + 1) % 2 == 0 ? console.log(students[i]) : null;
}

//for ..of loop --> only gives values and not indices
for (let student of students) {
  console.log(student);
}

// declaration -> creating a new variable
// definition -> defining the variable or function

// read about primitive datatypes

// other types of array declarations
const arr1 = [1, 2, 4, 5, 6];
const arr2 = new Array(1, 2, 3, 4, 5);
arr1[2] = 10;
console.log(arr1);

const emptyArr1 = [];
const emptyArr2 = new Array();
console.log(emptyArr1, emptyArr2);

// homogenous property in array
const arr3 = [1, 2, 3, 4, 5, 6];

// heterogenous property of array
const arr4 = ["hello", 45, "world", 5.6, welcomeUser];
console.log(arr4);

// some functions of Arrays
const iplTeams = ["CSK", "MI", "RCB", "SRH"];

//add some elements
//1
console.log("PUSH: ", iplTeams.push("GT")); // insert at end
//2
iplTeams.unshift("KKR"); //insert at begining

//Remove some elements
//1
iplTeams.pop(); // deletes from end
//2
iplTeams.shift(); // deletes from begining

console.log("IPL teams: ", iplTeams);

//length
console.log("No. of IPL teams", iplTeams.length);
// print IPL teams
console.log("IPL teams: ", iplTeams);

//slice
// keeps all elements after first 2 elements
console.log("Sliced: ", iplTeams.slice(2));
// keeps 2 elements from end
console.log("Negative Sliced: ", iplTeams.slice(-2));

console.log("Real teams: ", iplTeams);
