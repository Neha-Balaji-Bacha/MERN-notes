const user1 = {
    name: "Vaibhav",
    age: 23,
    city: "Pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    }
};

const user2 = {
    name: "Prajwal",
    age: 20,
    city: "Pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    }
};

const user3 = {
    name: "Devanshi",
    age: 21,
    city: "Mumbai",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} years old and currently living in ${this.city}`
        );
    }
};
// conventional – traditional way of using objects
console.log(user1.printDetails());
console.log(user2.name);

// why we used constructor ?
// A constructor is a blueprint to create objects easily.
// obj all have same type of properties (name, age, city, etc.)
// It helps make many similar objects without repeating code.
// Instead of writing object structure again and again, we write it once. 

// constructor
function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetails = function () {
        console.log(`${this.name} is living in ${this.city}`);
    };
}

const user4 = new User("Neha", 20, "Nashik");
const user5 = new User("Ajay", 25, "Nashik");

// using objects
console.log(user4.name);
console.log(user4.printDetails());

console.log(user1.name.__proto__);

function normalFunction(){
    console.log(this);//by default functions has global obj stored in 'this'
}
console.log(normalFunction());

// In a normal function this refers to the window object in the browser.
// The window object is the global object that gives access to things like
// console, alert, toUpperCase,toLowerCase.
// When a function is called using the new keyword, this points to a
// new empty object, and properties are added to that object.


const names = ["raj","shivam","pratik","priya"];
const age = [12,32,10,13];
const city = ["Mumbai","Delhi","pune","Bangalore"];

function Bio(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const objArray = [];
for(let i=0;i<age.length;i++){
    objArray.push(new Bio(name[i],age[i],city[i]));
}
console.log(objArray);

function product(name,price,qty){
 this.name=name;
 this.price=price;
 this.qty=qty;
 this.toatl=price*qty;
}

const product1 = new product("Bat",100,50);
const product2 = new product("Ball",200,80);
console.log(product1,product2);

const boolean = true;
const string = "true";
const number = "7880";
const arr = [7,44,2];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);

function Student(name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
}

Student.prototype.greetMe = function(name){
    console.log("Hi " + this.name);
};

const student1 = new Student("Neha",30,40);
student1.greetMe(student1.name);

//Find the output
function Test() {
  this.value = 10;
}
Test.prototype.value = 100;

const test = new Test();

console.log(test.value); // 10 -> first it will search value inside its own "test" object, so it prints 10 as it's found in "test"
delete test.value; //deleting the value property from test object
console.log(test.value); // 100 --> since the "test" object does not have any "value" property, it'll now look in prototype of Test, it's found there, so it prints its value i.e., 100


//mixing up constructor and prototypes
// creating a task queue, that will add, remove and display all tasks
function TaskQueue() {
  this.tasks = [];
}

//adding the new task to end of the queue
TaskQueue.prototype.add = function (taskName) {
  this.tasks.push(taskName);
};

//removing the first task
TaskQueue.prototype.remove = function () {
  this.tasks.shift();
};

//displaying all tasks
TaskQueue.prototype.display = function () {
  console.log(this.tasks.join(", "));
};

const task1 = new TaskQueue();
task1.add("Task1");
task1.add("Task2");
task1.remove();
task1.add("Task3");
task1.add("Task4");
task1.display();
task1.remove();
task1.display();
