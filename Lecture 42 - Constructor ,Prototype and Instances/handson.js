function Vehicle(brand,features,price){
  this.brand = brand;
  this.features = features;
  this.price = price;
  this.info = function(){
    console.log(`My new car brand:${brand} features:${features} & price:${price}`);
  };
}
//constructor : For Different Obj
const car1 = new Vehicle("Honda", "Bulletproof",6000000);
const car2 = new Vehicle("GLS", "Driverless",90000000);

//__proto__ is the link that connects the object to the blueprint
car1.info();
car2.info();
//If we put methods inside the constructor, they are copied again and again for every object.
console.log(car1===car2);//false:two different functions copies are created in memory.

//car1 & car2 are instances
//Instance : Each time Object created from that blueprint that is called instances.

// why we used prototype ?
// To avoid method recreating them repeatedly in memory all objects can share the same methods using prototype.

//prototype : It refers same method for different obj & info have only one copy,saving memory
 Vehicle.prototype.color = function(){
    console.log(`My new car brand:${this.brand} features:${this.features} & price:${this.price}`);
  };
  car1.color();
  car2.color();
console.log(car1.color===car2.color);

console.log(car1.__proto__ === Vehicle.prototype);     // true
console.log(Vehicle.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);               // null


// __proto__ is automatically created when you create an object using new keyword.
// Every object in JavaScript has __proto__, 
// and it uses that __proto__ link to inherit methods from its prototype(wrapper obj).

// __proto__ is just a pointer.
// It doesn’t store methods.
// It only points to where methods are stored.

// .prototype = PLACE where shared methods live
// __proto__ = CONNECTOR that gives access to them

//EX:Methods like toUpperCase exist in the prototype. __proto__ allows your object to access them.

// EX:.prototype : Library of shared books 
//   __proto__  : Your library card       
//   Object     : You                     

//prototype chain
// object -> __proto__ -> parent prototype -> ... -> null
