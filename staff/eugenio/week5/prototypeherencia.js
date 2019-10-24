function Person(firstName, lastName, age, gender, interests){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.greeting = function(){
    return "Hi! I'm "+this.firstName; 
  }
  this.farewell = function(){
    return this.firstName+" has left the building. Bye for now!"; 
  }
  
}
//HEMOS CREADO FUNCIONES DE FORMA DIFERENTE PERO FUNCIONAN IGUAL, UNAS LAS CREAMOS DENTRO DEL CONSTRUCTOR
//Y LA OTRA LA CREAMOS CON EL PROTOTYPE
Person.prototype.bio = function(){
  return this.firstName + " " + this.lastName +" is " + this.age + " years old. "+ this.gender +
   " likes " + this.interests[0]+", "+this.interests[1]+ " and "+this.interests[2]
}

var p1 = new Person("Eugenio", "Fernandez", 31, "Sr.", ["Cine", "Deporte", "Videojuego"] );
console.log(p1.bio());

//CREAMOS OTRO CONSTRUCTOR ''SUBCLASE'' DE STUDENT Y HEREDAREMOS TODO LO DE PERSON
function Student(firstName, lastName, age, gender, interests){
  Person.call(this, firstName, lastName, age, gender, interests)
  this.greeting = function(){
    return "Yo! I'm "+this.firstName; 
  }
} 

//ESTAS DOS SENTENCIAS HACEN QUE HEREDE TODO DE PERSON, PROPIEDADES, FUNCIONES Y CONSTRUCTOR
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var s1 = new Student("Alberto", "Garcia", 36, "Sr.", ["Series", "Food", "Motos"] );
console.log(p1.greeting());
console.log(s1.greeting());

//CREAMOS OTRO CONSTRUCTOR ''SUBCLASE'' DE TEACHER Y HEREDAREMOS TODO LO DE STUDENT Y A LA VEZ DE PERSON
function Teacher(firstName, lastName, age, gender, interests, subject){
  Student.call(this, firstName, lastName, age, gender, interests)
  this.subject = subject;
  this.greeting = function(){
    return "Hello. My name is "+this.gender+" "+this.lastName+" and i teach "+this.subject;
  }
} 
//ESTAS DOS SENTENCIAS HACEN QUE HEREDE TODO DE STUDENT, PROPIEDADES, FUNCIONES Y CONSTRUCTOR
Teacher.prototype = Object.create(Student.prototype);
Teacher.prototype.constructor = Teacher;

var t1 = new Teacher("Enzo", "Fernandez", 8, "Sr.", ["Videojuegos", "Football", "Youtube"], "IT");
console.log(t1.greeting());