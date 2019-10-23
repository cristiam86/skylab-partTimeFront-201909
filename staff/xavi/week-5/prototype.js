function Person(firstName, lastName, age, gender, interests){
    this.firstName  = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;


    this.greeting = function() {
        return "Hi im "+this.firstName
    }

    this.farewell = function(){
        return this.firstName+'Bye for now!'
    }

    this.bio = function(){
        return this.firstName + this.lastName + 'is' + this.age + ' years old' + this.gender + ' likes ' + this.interests
    }
}


function Student(firstName, lastName, age, gender, interests, degree){
    person.call(this, firstName, lastName, age, gender, interests)
    this.degree = degree;

    this.greeting() = function(){
        return 'Yo! Im '+firstName
    }
}



Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;




// var p1 = new person('David', 'Marin', '25', 'x', 'js');
var p1 = new student('David', 'Marin', '25', 'x', 'js', 'informatica');






