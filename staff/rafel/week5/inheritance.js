function Person(firstName, lastName, age, gender, interests ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests
    this.greeting = function () {
        return "Hi! I'm " + this.firstName + "."
    }
    this.farewell = function () {
        return this.firstName + " has left the building. Bye for now!"
    }
    this.bio = function () {
        if (this.gender = 'female'){
            var genderName = "She"
        } else {
            var genderName = "He"
        }

        var interestings = this.interests.join(', ')

        var result = this.firstName + " " + this.lastName + " is " + this.age + " years old. " + genderName
            + ' ' + interestings;

        return result;
    }
}

function Student (firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests)
    this.greeting = function(){
        return "Yo! I'm " + this.firstName
    }

}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher (firstName, lastName, age, gender, interests, subject) {
    Person.call(this, firstName, lastName, age, gender, interests);
    this.subject = subject;
    this.greeting = function(){
        return "Hello. My name is " + this.lastName + " and I teach " + this.subject
    };

}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var aa = new Person ('Rafel', 'Olmos', 40, 'male', 'rest')

var bb = new Student ()

