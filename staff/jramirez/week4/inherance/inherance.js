var person =  function (firstName, lastName, age, gender, interests) {
    this.firstName = firstName;     
    this.lastName = lastName;         
    this.age = age;              
    this.gender = gender;           
    this.interests = interests;
    this.greeting = function() {
        return 'Hola colegas! Soy ' +this.firstName;
    }
    this.farewell = function() {
        return this.lastName + " has left the building. Bye for now!";
    }
    this.bio = function() {
        return "Hola soy "+this.firstName+ " "+this.lastName+ " soy "+this.gender+ " y nací en República Dominicana hace " +this.age+ " años, mis intereses son:" +this.interests;
    }
}

var colgao = new person('Jesus', 'Ramírez', 33, 'Machote', ['Programar', 'Comer', 'Dormir']);

estudiante.prototype = Object.create(estudiante.prototype);
estudiante.prototype = estudiante;

function estudiante(coSa, firstName, lastName, age, gender, interests){
    person.call(this, firstName, lastName, age, gender, interests);
    this.coSa = coSa;
}
function maestro(){
    person.call(this, "Maestro", "Juan", 89, "Hombre", ["Enseñar", "Ser viejo verde", "Mirar obras"]);
}

 var chica = new estudiante('yo soy tu padre','Antonia', 'Juana', 33, 'Muejer', ['Correr', 'Comer', 'Dormir']);
 var maestro = new maestro();


console.log(colgao.greeting());
console.log(chica.farewell());
console.log(maestro.bio());
console.log(chica.bio());
console.log(chica.coSa);