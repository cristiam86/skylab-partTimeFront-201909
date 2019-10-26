
function Person(firstName, lastName, age, gender, interests) {
  this.name = {
    first: firstName,
    last: lastName
  }; 
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};


Person.prototype.bio = function() {

        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';

        var pronoun;

        if(this.gender[0].toLowerCase() === 'm') {
          pronoun = 'He likes ';
        } else if(this.gender[0].toLowerCase() === 'f') {
          pronoun = 'She likes ';
        } else {
          pronoun = 'They like ';
        }

        string += pronoun;

        if(this.interests.length === 1) {
          string += this.interests[0] + '.';
        } else {
          for(var i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) {
              string += 'and ' + this.interests[i] + '.';
            } else if(i === this.interests.length - 2){
                string += this.interests[i] + ' ';
            } else {
              string += this.interests[i] + ', ';
            }
          }
        }
        alert(string);
};

Person.prototype.greeting1 = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

// Teacher class:

function Teacher(firstName, lastName, age, gender, interests, subject) {
  Person.call(this, firstName, lastName, age, gender, interests);

  this.subject = subject;
}



Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  return 'Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.';
};

// Student class:

function Student(firstName, lastName, age, gender, interests) {
  Person.call(this, firstName, lastName, age, gender, interests);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function() {
  return 'Yo! I\'m ' + this.name.first + ' and I like: '+this.interests;
};

Person.prototype.greeting1 = function() {
  return 'HEY o! I\'m ' + this.name.first + ' and I like: '+this.interests;
};

var t = new Teacher('Cristiam', 'Da Silva', 57, 'male', '🚗,💻', 'Frontend' );

var s = new Student('Cristiam', 'Da Silva', 27, 'male', '🚗,💻' );

console.log(s);
//console.log(t.greeting());