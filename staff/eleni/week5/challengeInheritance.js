function Person(firstName,lastName,age,gender,interests){
this.firstName=firstName;
this.lastName=lastName;           
this.age=age;               
this.gender=gender;             
this.interests=interests;           
this.greeting=function(){
    return "Hi!I´m "+this.firstName;
}
this.farewell=function(){
    return this.firstName+" has left the building.Bye for now!"
}
this.bio=function(){
 return this.firstName+this.lastName+ " is"+this.age+" years old. "+this.gender+" likes"+this.interests[0]+this.interests[1]
}
}

function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests);  
    this.greeting=function () {
        console.log('Yo, I´m ' + this.firstName);
    }
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor=Student;

var s=new Student();

function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName,lastName,age,gender,interests,subject);
    this.subject=subject;
    this.greeting=function () {
        console.log('Hello, my name is ' + this.firstName+" "+this.lastName+" and I teach "+this.subject);
}
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;


/***************************************************************************************************** */

//COURSE NOTES

//c1.start.call(c2)---call method start in c2 with the scope of c2
//c1.start.call(c2,d)---call method start in c2 with the scope of c2 with all arguments
//c1.start.apply(c2,[d,..])---call method start in c2 with the scope of c2 with all arguments
