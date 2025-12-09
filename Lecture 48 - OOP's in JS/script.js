class Employee {
  constructor({ name, gender, id, designation, joiningDate, salary }) {
    this.name = name;
    this.gender = gender;
    this.id = id;
    this.designation = designation;
    this.joiningDate = joiningDate;
    this.salary = salary;
  }

  checkIn(time) {
    this.checkInTime = time.toLocaleTimeString();
  }

  checkOut(time) {
    this.checkOutTime = time.toLocaleTimeString();
  }
}

const employee = new Employee({
  name: "Neha",
  gender: "female",
  id: "987",
  designation: "Intern",
  joiningDate: new Date(),
  salary: 608900,
});

console.log({ employee });

document.querySelector("button:first-of-type").addEventListener("click", () => {
  employee.checkIn(new Date());
});

document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click", () => {
    employee.checkOut(new Date());
    console.log(
      `Check in: ${employee.checkInTime} \nCheck out: ${employee.checkOutTime}`
    );
  });

class Manager extends Employee {
  constructor({ employeeDetails, subordinates }) {
    super(employeeDetails);
    this.subordinates = subordinates;
  }
}

const employeeDetails = {
  name: "Mansi",
  gender: "female",
  id: "9878",
  designation: "Software Engineer",
  joiningDate: new Date(),
  salary: 6988,
};

const manager = new Manager({ employeeDetails, subordinates: ["e1", "e2"] });
console.log(manager);

document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click", () => {
    manager.checkIn(new Date());
  });

document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click", () => {
    manager.checkOut(new Date());
    console.log(
      `Check in: ${manager.checkInTime} \nCheck out: ${manager.checkOutTime}`
    );
  });

// create an Animal class, and then create a Dog class & Cat class, 
// inherit the property from Animal for both Dog & Cat class  

class Animal {
  constructor({ name, age, color }) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log("Speak method inside Animal class");
  }
}

const dogDetails = {
  name: "Dog",
  age: 21,
  color: "red",
};

const catDetails = {
  name: "cat",
  age: 32,
  color: "white",
};

class Dog extends Animal {
  constructor(dogDetails) {
    super(dogDetails);
  }
}

class Cat extends Animal {
  constructor(catDetails) {
    super(catDetails);
  }

  speak() {
    console.log("meow meow ");
  }
}

const catInstance = new Cat(catDetails);
const dogInstance = new Dog(dogDetails);

console.log({ catInstance, dogInstance });

catInstance.speak();
dogInstance.speak();