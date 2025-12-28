// // class vehicle{
// //  start(){
// //     ("vehicle is starting")}
// //  }
// // class car extends vehicle{
// //   start(){
// //     ("car is starting")
// //  }
// // }
// // class electriccar extends car{
// //    start(){
// //     ("elctricacr is starting")
// //  }
// // }

//Inheritance
class Employee{
    constructor(yearsOfExp){
        this.yearsOfExp=yearsOfExp;
    };
    salary(){
        return 5000 * this.yearsOfExp;
    };
}

class SalesEmployee extends Employee{
    constructor(yearsOfExp){
        super(yearsOfExp);
    };
    salary(){
      return 5000 * this.yearsOfExp;
    }
}

class LeadEmployee extends Employee{
    constructor(leadEmployeeYearsOfExp){
        super(leadEmployeeYearsOfExp);
    };
    salary(){
      return 10000 * this.yearsOfExp;
    }
}
const leadEmployee = new LeadEmployee(6);
console.log(leadEmployee.salary());
const salesEmployee = new SalesEmployee(4);
console.log(salesEmployee.salary());

//polymorphism
class Interest{
    constructor(p,n,t,r){
        this.p = p;
        this.n = n;
        this.t = t;
        this.r = r;
    };
    Interest(){
         return this.p + (this.r * this.t);
    }
}

class simpleInterest extends Interest{
    constructor(p,t,r){
      super(p,null,t,r);
    }
    Interest(){
        return (this.p*this.r*this.t)/100;
    }
}
class compoundInterest extends Interest{
    constructor(p,n,t,r){
      super(p,n,t,r);
    }
    Interest(){
        return (this.p * Math.pow(1 +this.r/this.n,this.n*this.t));
    }
}
const compoundInterestavg = new compoundInterest(2,3,4,5);
console.log( compoundInterestavg.Interest());
const simpleInterestavg = new simpleInterest(2,4,5);
console.log(simpleInterestavg.Interest());

//Abstraction
class Student{
    constructor(marks){
        this._marks = marks;
    }
    #calculateMarks(){
        const totalSubjects = Object.keys(this._marks).length;
        let totalMarks = 0;
        for(let marks in this._marks){
            totalMarks += this._marks[marks];
        }
          return totalMarks/totalSubjects;
    }
    get marks(){
        return this.#calculateMarks();
    }
}
const marks = {
    math : 80,
    science: 45,
    english:80,
};
const Neha = new Student(marks);
console.log(Neha.marks);

//composition
class PersonalDetails {
    constructor({ name, age, dob }) {
        this.name = name;
        this.age = age;
        this.dob = dob;
    }
    print() {
        console.log(this.name, this.age, this.dob);
    }
}

class EducationalDetails {
    constructor({ college, gradyear, cgpa }) {
        this.college = college;
        this.gradyear = gradyear;
        this.cgpa = cgpa;
    }
    print() {
        console.log(this.college, this.gradyear, this.cgpa);
    }
}

class Person {
    constructor(aadharNumber, personalDetails, educationalDetails) {
        this.aadharNumber = aadharNumber;
        this.personalDetails = new PersonalDetails(personalDetails);
        this.educationalDetails = new EducationalDetails(educationalDetails);
    }

    print() {
        console.log("Aadhar Number:", this.aadharNumber);
        console.log("Personal Details:");
        this.personalDetails.print();
        console.log("Educational Details:");
        this.educationalDetails.print();
    }
}

const personalDetails = {
    name: "Neha",
    age: 22,
    dob: "2 Dec 200"
};

const educationDetails = {
    college: "SGGS",
    gradyear: 2020,
    cgpa: 8
};

const Neha1 = new Person(987, personalDetails, educationDetails);
Neha1.print();
