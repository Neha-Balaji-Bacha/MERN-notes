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

//array : undefined
// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// console.log(students[4]);



// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// for(let i=0;i<students.length;i++){
//     if(i%2 === 0){
//         console.log(Number(i+1),students[i]);
//     }
//}


// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// for(let i in students){
//     if(i%2 === 0){
//         console.log(Number(i)+1,students[i]);
//     }
// }

// const students = ["neha","nikita","nikhil","kapil","vaish","dixsha"];
// students[0]=5
// console.log(students);
// const students = new Array["neha","nikita","nikhil","kapil","vaish","dixsha"];

//array manipulation
const iplTeams = ["csk","rcb","mi","srh"];
// iplTeams.push("Gt");
// console.log(iplTeams);
// iplTeams.unshift("kkr");
// console.log(iplTeams);
// iplTeams.shift("kkr");
// console.log(iplTeams);
// iplTeams.pop("Gt");
// console.log(iplTeams);
console.log(iplTeams.slice(2));
console.log(iplTeams.slice(-1));