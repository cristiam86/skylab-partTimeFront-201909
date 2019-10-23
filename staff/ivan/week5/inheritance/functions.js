console.log("inheritance")

var Person = function(name,last,age,gender,interests){
    this.firstname = name;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function(){
        return "Hi, I am "+this.firstname;
    }
    this.farewell = function(){
        return this.firstname + " has left the building. Bye for now!";
    }
    this.bio = function(){
        var string_from_interests = this.interests.join(", ")+".";
        return this.firstname + " " + this.lastname +" is "+this.age+" years old. "+this.gender+" likes "+string_from_interests;
    }
}

var morty = new Person("Morty","Smith",14,"He",["Robots","Jessica","Adventures"]);
console.log("Should log Morty",morty);
console.log(morty.greeting());
console.log(morty.farewell());
console.log(morty.bio());

//now, we create a new class from Person...

function Student(name,last,age,gender,interests){
    Person.call(this,name,last,age,gender,interests);
}

//this allows us to say that student is linked to Person's prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;
Student.prototype.greeting = function(){
    return "THIS IS "+this.firstname;
}

var birdperson = new Student("Birdperson","Feathers",45,"He",["flying, traveling"]);
console.log("Should log Birdperson ",birdperson);
console.log(birdperson.__proto__.greeting());