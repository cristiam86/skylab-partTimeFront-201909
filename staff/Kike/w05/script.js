function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.greeting = () => {
        return console.log("Hi! I'm " + this.firstName);
    }

    this.farewell = () => {
        return console.log(this.firstName + " has left the building. Bye for now!");
    }

    this.bio = () => {
        var strArr = '';
        interests.forEach((element, idx) => {
            if (idx === interests.length - 2) {
                strArr += element + ' and ';
            } else if (idx === interests.length - 1) {
                strArr += element + '.';
            } else {
                strArr += element + ',';
            }
        });

        return console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old. " + this.gender + " likes " + strArr);
    }
}

niño = new Person("kike", "garcia", 28, "chico", ['dormir', 'jugar', 'roomscapes']);

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = () => { return console.log("Yo! I'm " + this.firstName) };

estudiante = new Student("kike", "garcia", 28, "chico", ['dormir', 'jugar', 'roomscapes']);



function Professor(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests);
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.greeting = () => { return console.log("Hi! I'm " + this.firstName) };

profe = new Professor("kike", "garcia", 28, "chico", ['dormir', 'jugar', 'roomscapes']);
