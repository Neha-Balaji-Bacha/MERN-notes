class Animal{
    constructor({name,age,color}){
      this.name = name;
      this.age = age;
      this.color = color;

    }
    details(){
      return `name : ${this.name};
      age : ${this.age};
      color : ${this.color}`;
    }
}
class Dog extends Animal{
 constructor({name,age,color}){
    super({name,age,color});
 }
 dogDetails(){
    return this.details();
 }
 bark(){
    console.log("bark bark");
 }
}
class Cat extends Animal{
 constructor({name,age,color}){
    super({name,age,color});
 }
 catDetails(){
    return this.details();
 }
 maw(){
    console.log("mawmaw");
 }
}
const d1 = new Dog({name:"Dog",age:"22",color:"red"});
const c1 = new Cat({name:"cat",age:"22",color:"white"});
console.log(c1.catDetails());
console.log(d1.dogDetails());
d1.bark();
c1.maw();

