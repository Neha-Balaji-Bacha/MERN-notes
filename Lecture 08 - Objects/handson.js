const classRoom = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
// const classRoom = [student1, student2, student3, student4, student5];
for (let student of classRoom) {
  //   if (student && student.address && student.address.city == "pune") {
  //     console.log(student.name, student.age, student.address, student.homeNo);
  //   }
  if (student?.address?.city === "pune") {
    console.log(student.name, student.age, student.address, student.homeNo);
  }
}

const person = {
  name: "Neha",
  age: 23,
  address: {
    city: "Pune",
    pin: 411001,
    geo: {
      lat: 18.52,
      lng: 73.85,
    },
  },
};

console.log(person.address.city); // Pune
console.log(person.address.geo.lat); // 18.52

//avoid errors
console.log(person.address.geo.lng); // 73.85
console.log(person.work?.company); // undefined (safe, no error)

//Adding a property inside a nested object
person.address.country = "India";
console.log(person.address);
// { city: 'Pune', pin: 411001, geo: { lat: 18.52, lng: 73.85 }, country: 'India' }

//Updating nested values
person.address.geo.lat = 19.07; // change latitude
console.log(person.address.geo.lat); // 19.07

//loop
const obj = { name: "Neha", age: 23, city: "Pune" };
console.log("for...of on object:");
for (let val of obj) {
  console.log(val);
} //TypeError: obj is not iterable

const arr10 = ["Neha", 23, "Pune"];
console.log("for...of on array");
for (let val of arr10) {
  console.log(val);
}
// Neha
// 23
// Pune

const studentnew = {
  name: "Neha",
  age: 23,
  city: "Pune",
};
// Using Object.keys()
console.log("---- Keys ----");
for (let key of Object.keys(studentnew)) {
  console.log(key); // only keys
}

// Using Object.values()
console.log("---- Values ----");
for (let value of Object.values(studentnew)) {
  console.log(value); // only values
}

// Using Object.entries()
console.log("---- Entries ----");
for (let [key, value] of Object.entries(studentnew)) {
  console.log(key, value); // both key and value
}

const arr1 = ["a", "b", "c"];

console.log("for...in on array:");
for (let i in arr1) {
  console.log(i, arr1[i]);
}
// for...in on array:
// 0 a
// 1 b
// 2 c

const obj1 = { name: "Neha", age: 23, city: "Pune" };
console.log("for...in on object:");
for (let key in obj1) {
  console.log(key, obj1[key]);
} //op
// for...in on object:
// name Neha
// age 23
// city Pune

//Array inside Object
const stu = { name: "Priya", skills: ["JS", "C++", "MERN"] };

// for...in - keys of object
for (let i in stu) {
  console.log("for...in (obj):", stu.skills[i]);
}

// for...of - values of skills array
for (let skill of stu.skills) {
  console.log("for...of (skills):", skill);
}

const student = {
  name: "Neha",
  greet() {
    console.log("Hello " + this.name);
  },
};

//Objects inside Array
const classroom = [
  { name: "Aarav", city: "Pune" },
  { name: "Rohan", city: "Mumbai" },
];

// for...of - objects
for (let student of [classroom[0]]) {
  console.log("for...of:", student.name, student.city);
}

// for...in - keys inside each object
for (let key in classroom[0]) {
  console.log("for...in (first obj):", key, classroom[0][key]);
}

const student1 = { name: "Piyush", address: {} };
console.log(student1); //{ name: 'Piyush', address: {} }
