console.log("inheritance")

var Person = function(name,last,age,gender,interests){
    this.firstname = name;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.farewell = function(){
        return this.firstname + " has left the building. Bye for now!";
    }
    this.bio = function(){
        var string_from_interests = this.interests.join(", ")+".";
        return this.firstname + " " + this.lastname +" is "+this.age+" years old. "+this.gender+" likes "+string_from_interests;
    }
}

Person.prototype.greeting = function(){
    return "Hi, I am "+this.firstname;
}

var morty = new Person("Morty","Smith",14,"He",["Robots","Jessica","Adventures"]);
console.log("Should log Morty",morty);
console.log(morty.greeting());
console.log(morty.farewell());
console.log(morty.bio());

//now, we create a new class from Person...

var Student = function(name,last,age,gender,interests){
    Person.call(this,name,last,age,gender,interests);
}

//this allows us to say that student is linked to Person's prototype.
//it changes it from __proto__ object to __proto__ Person
Student.prototype = Object.create(Person.prototype);

//this adds a constructor (just like greeting below) to the proto too...
Student.prototype.constructor = Student;

//this just adds a new greeting to the __proto__
Student.prototype.greeting = function(){
    return "Forceful setup of greeting... "+this.firstname;
}

var birdperson = new Student("Birdperson","Feathers",45,"He",["flying, traveling"]);
console.log("Should log Birdperson ",birdperson);
console.log(birdperson.greeting());