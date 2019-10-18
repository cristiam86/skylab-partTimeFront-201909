function Car(name) {
    this.name = name;
  }
  Car.prototype.start = function() {
    return "engine of "+this.name + " starting...";
  };
  var c1 = new Car("Santa Fe");
  var c2 = new Car("Fiesta");
  c2.speak = function() {
    console.log("Hello, " + this.start());
};

//console.log(c1.__proto__ === Car.prototype);    // true
//console.log(c1.__proto__ === c2.__proto__);     // true
//console.log(c1.constructor === Car);            // true
//console.log(c1.constructor === c2.constructor); // true
//console.log(c1.__proto__ === Object.getPrototypeOf(c1)); //true
//console.log(c2.__proto__ === c2.constructor.prototype);  //true

function Human(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Human ("Virat", "Kohli"); 
var person2 = new Human ("Sachin", "Tendulkar");

console.log(person1);
console.log(person2);
console.log(Human.prototype);
console.log(Human.prototype === person1 .__proto__);

//Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)//Output: Ashwin

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);

function Person(){

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create an object using the Person constructor function
var person1 = new Person();

//Access the name property using the person object
console.log(person1.name)// Output" Ashwin