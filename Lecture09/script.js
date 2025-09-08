//creating a new property
//creating object
const newObj = new Object();
newObj.a = "a";
newObj.b = "b";
newObj.c = "c";
console.log({ newObj });

/*notes
- key-value */

//===================strings=================
let str = "a";
console.log(typeof str); //string

str = "abc";
console.log(typeof str); //string

str = "abc";
console.log(typeof str); //string

str = ["a", "b", "c"];
console.log(typeof str); //object
console.log(typeof str[0]); //string

str = `abc`;
console.log(typeof str); //string

str = "hi I'm neha";
console.log(str);

str = 'Hi you must do "java" classes';
console.log(str);

str = `Hi I'm neha and you must do "java" classes`;
console.log(str);

let personName = "neha";
str = `Hi I'm ${personName} and you must do "java" classes`;
console.log(str);

personName = "nikita"; //not valid
console.log(str);

//some methods in string
//includes function --> returns if given string present in str or not
str = "we're going to see some methods of strings";
console.log(str.includes("going"));

//replace only the first occurrence of 'w' with 'x'
console.log(str.replace("w", "x"));
console.log(str); //does not change original str

//replaceAll --> replace all 'w' with 'x'
console.log(str.replaceAll("w", "x"));
console.log(str); //does not change original str

//trim () --> removes all leading and trailling spaces
console.log(str);
console.log(str.trim()); //trim() does not change the original string.

//substring()--> gives substring --> doesn't changes the original array
console.log(str.substring(3, 9)); //gives substring starting from 3 AND ENDING AT 8 (9-1)
console.log(str.substring(3)); //gives substring from index=3 till end
console.log(str.substring("3")); //consider no.gives substring from index=3 till end
console.log(str.substring(-3));
console.log(str.substring(-3, -10)); //gives empty string --> (0,0)
console.log(str.substring(-3, 1000)); //behaves as   (0,n)

//slice() --> almost same as substring, but changes (-)ves differently
//never modifies the original string
console.log(str.slice(3)); //(3,n)
console.log(str.slice(3, 5)); //gives elements from index = 3 to 4
console.log(str.slice(-3)); //gives last 3 elements
console.log(str.slice());
console.log(str.slice(-100)); //gives all string elements in case the no is greater than the length of the string
console.log(str.slice(-9, -3));
console.log(str.slice(-3, -3)); //empty
console.log(str.slice(-9, 0)); //gives empty string as end is smaller than start

//split() --> splits the string based on given char
console.log(str.split(","));
const line = "Hello welcome to MERN stack course";
console.log(line.split(" "));
line = "Hello welcome to MERN stack course  ";
console.log(line.split(" "));

//toUpperCase()
console.log("hello".toUpperCase());

//==============wrapper objects =============
const string = "Neha";
const no = 67;
const bool = true;
const object = { name: "nikita" };
console.log(string.__proto__);
console.log(no.__proto__);
console.log(bool.__proto__);
console.log(object.__proto__);

//spread & rest operator
//rest operator --> combines all the arguments and transforms them into an array
function addStudent(students, ...studentsName) {
  //rest parameter always last
  console.log(studentsName); //prints array
  students.push(studentsName);
  console.log({ students });
}
const students = ["neha", "nikita", "nikhil"];
addStudent(students, "Dixsha", "mayuri");
// addStudent(students,"mayuri")

//Destructuring
const [hi, ...bye] = ["hi", "Bye", "Byee", "Byeee"];
console.log([hi, bye]);
//spread operator
const arr1 = [1, 2, 3, 4];
console.log(arr1);
console.log("spreaded array:", [0, ...arr1, 67, 89, 90]);

//HW:use spread operators with objects
