function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function() {
        return ("Hi! I'm " + this.firstName);
    }
    this.farewell = function() {
        return (this.firstName + "has left the building. Bye for now!");
    } 
    this.bio = function() {
        var result = this.firstName + " " + this.lastName + " is " + this.age + " years old."
        
        if (this.gender.toUpperCase() == 'F')  result = result + " She ";
        else result = result + " He";
        
        result = result + " likes " + this.interests.join(", ");
        
        return result; 
    }
}

function Student(firstName, lastName, age, gender, interests){
    Person.call(this,firstName, lastName, age, gender, interests);
    this.greeting = function(){
        return ("Yo! I'm " + this.firstName);
    }
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher(firstName, lastName, age, gender, interests, subject){
    Person.call(this,firstName, lastName, age, gender, interests);
    this.subject = subject;
    this.greeting = function(){
        var resultGender;
        if (this.gender.toUpperCase() == "F") resultGender = "Mr "
        else resultGender = "Mrs "
        return ("Hello, My name is " + resultGender + this.lastName + " and I Teach " + this.subject)
    } 
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.farewell = function (){
    return " Hola " + this.firstName;
};