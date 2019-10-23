Array.prototype.getLastElement = function() {
    return this[this.length-1];
}

arr = [1,2,3];
console.log(arr.getLastElement());
arr2 = [4,5,6]; // arr2 hereda getLastElement()
console.log(arr2.getLastElement());

function Car(name) {
    this.name = name;
    this.start = function() {
        return "engine of "+this.name+" starting...";
    }
}
// extendemos clase
Car.prototype.stop = function() {
    return "engine of "+this.name+" stopped";
}
var c1 = new Car('Tesla');
console.log(c1.start());
console.log(c1.stop());
var c2 = new Car('Ford');

// extendemos instancia
c1.__proto__.engineSize = function() {
    return "electric engine";
}
console.log(c1);
console.log(c1.engineSize());
console.log(c2.engineSize());
var d = new Date();
console.log("llamar funcion para pasar otro scope", c2.start.call()); // call sin nada => window
console.log("llamar funcion para pasar otro scope", c2.start.call(c1, d)); // acepta parámetros opcionales adicionales
console.log("llamar funcion para pasar otro scope", c2.start.apply(c1, [d]));

function Tesla(model) {
    Car.call(this, 'Tesla'); // crear un nuevo Car, pero no tiene en proto al objecto Car
    this.model = model;
}
// enlazar prototypes
Tesla.prototype = Object.create(Car.prototype);
// para poder hacer el new hay que igualar el constructor a la función Tesla
Tesla.prototype.constructor = Tesla;

var t = new Tesla('C1');

function Person(name, surname, age, gender, interest) {
    this.firstName = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
    this.greeting = function() {
        return `Hi, I'm ${this.firstName}`;
    }
    this.farewell = function() {
        return `${this.firstName} has left the building. Bye for now.`
    }
    this.bio = function() {
        return `${this.firstName} ${this.surname} is ${this.age} years old. <He/She> likes <interest-1>, <interest-2>, .... and <interest-n>.`
    }
}

function Student(name, surname, age, gender, interest) {
    Person.call(this, name, surname, age, gender, interest);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function() {
    return `Yo! I'm ${this.firstName}`;
}

var person1 = new Student("Pepe", "Manteca", 36, "hombre", ["musica", "comida"]);
console.log(person1);
console.log("p1",person1.greeting());
