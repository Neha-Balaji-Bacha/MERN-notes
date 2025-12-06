//create variables to store name ,age,add,Class of student
const name = "piyush";
const age = 17;
const address = "Pune";
const Class = 12;

const studentObj = {
  name: "piyush",
  age: 17,
  address: "Pune",
  Class: 12,
};
 //create variables to store name ,age,add,Class of parent
const parentName = "Riya";
const parentage = 35;
const parentAddress = "pune";

const parentobj = {
  parentName: "Riya",
  parentage: 35,
  parentAddress: "pune",
};

//access properties in object
console.log("student name:", studentObj.name);
console.log("student name:", studentObj["name"]);
const studentProperty = "name";
console.log("student name:", studentObj[studentProperty]);

//updatinga value of an object
studentObj.name = "neha";
console.log("student name:", studentObj.name);

//add any property to an object
parentobj.gender = "female";
parentobj.standard = 12;
console.log(parentobj);

//delete any property
delete parentobj.standard;
console.log(parentobj);

//create a person properties --> name,age,city
const personObj = {
  name: "Neha",
  age: 23,
  city: "Latur",
};
personObj.hobby = "singing"; //add
personObj.city = "Nagpur"; //update
console.log(personObj.age); //print age
console.log(personObj.standard); //undefined
//checker
if (personObj && personObj.address)
  //all properties on left of dot(.) must not be undefined
  console.log(personObj.address.firstLine);

//nested objects
const employeeObj = {
  name: "Raju",
  company: "Acciojob",
  salary: "10LPA",
  address: {
    addressLine1: "Bhumkar chowk",
    addressLine2: "Wakad",
    houseNo: 31,
    city: "pune",
  },
};
console.log("city of", employeeObj.name, "is", employeeObj.address.city);

//arrays objects
const studentObjArr = [
  studentObj,
  {
    name: "pulkit",
    age: 27,
    address: "nashik",
    standard: 10,
  },
];
console.log(studentObjArr);

//or

const studentObj2 = {
  name: "pulkit",
  age: 27,
  address: "nashik",
  standard: 10,
};
const studentObjArr2 = [studentObj, studentObj2];

//using loop
for (let i in studentObj) {
  console.log(i, ":", studentObj[i]);
}

//print all keys
console.log("keys:", Object.keys(studentObj));

//print all values
console.log("values:", Object.values(studentObj));

console.log("Using object.keys() method to get the array of keys");
for (let i of Object.keys(studentObj)) {
  console.log(i, ":", studentObj[i]);
}
console.log("values:", Object.values(studentObj));

student1 = {
  name: "neha",
  age: 23,
  gender: "female",
  grade: "B",
  address: {
    addressLine1: "varje",
    addressLine2: "baner",
    city: "Latur",
    homeNo: 31,
  },
};
student2 = {
  name: "nikita",
  age: 24,
  gender: "female",
  grade: "A",
  address: {
    addressLine1: "aundh",
    addressLine2: "balewadi",
    city: "pune",
    homeNo: 32,
  },
};
student3 = {
  name: "nikhil",
  age: 25,
  gender: "male",
  grade: "A",
  address: {
    addressLine1: "katraj",
    addressLine2: "shivaji chowk",
    city: "udgir",
    homeNo: 51,
  },
};
student4 = {
  name: "dixsha",
  age: 27,
  gender: "female",
  grade: "+A",
  address: {
    addressLine1: "pisoli chowk",
    addressLine2: "chandni",
    city: "solapur",
    homeNo: 41,
  },
};
student5 = {
  name: "Mayuri",
  age: 29,
  gender: "female",
  grade: "a",
  address: {
    addressLine1: "Mahalunge",
    addressLine2: "karve",
    city: "Mumbai",
    homeNo: 52,
  },
};
const classRoom = [student1, student2, student3, student4, student5];
for (let student of classRoom) {
  if (student && student.address && student.address.city == "pune") {
    console.log(student.name, student.age, student.address, student.homeNo);
  }
}
//function inside object
const carObj = {
  car: "Mercedes GLS",
  color: "white",
  milega: 10,
  currentSpeed: 0,
  running: function running() {
    console.log("The car is running!!");
  },
};
carObj.running();

//this keyword :
const carObj1 = {
  car: "Mercedes GLS",
  color: "white",
  milega: 10,
  currentSpeed: 0,
  running: function running() {
    console.log("The car is running!! current speed is:", this.currentSpeed);
  },
  //  running: function () {   // anonymous function
  //   console.log("The car is running!! current speed is:", this.currentSpeed);
  // }
  //  running() {
  //   console.log("The car is running!! current speed is:", this.currentSpeed);
  // }
};
carObj.running();
//each obj has its own "this" keyword --> mostly used inside the object.functions can be used inside obj

//task
const portfolio = {
  name: "piyush",
  skills: ["c++", "Javascript", "MERN"],
  showSkills: function showSkills() {
    let allSkills = "";
    for (let skill of this.skills) {
      allSkills += skill + ",";
    }
    console.log(allSkills);
  },
  addskills: function addskills(skillName) {
    this.skills.push(skillName);
  },
};
portfolio.showSkills();
portfolio.addskills("node.js");
portfolio.showSkills();
