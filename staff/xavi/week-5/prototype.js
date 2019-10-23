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

    
}



Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function(){
    alert('ya im' + this.firstName)
}




// var p1 = new person('David', 'Marin', '25', 'x', 'js');
var p1 = new student('David', 'Marin', '25', 'x', 'js', 'informatica');






