//.PROTOTYPE ES PARA FUNCIONES
//.__PROTO__ ES PARA OBJETOS

var arr = [1,2,3,4,5]
// CREAMOS UNA FUNCION QUE SE LLAMA GETLASTELEMENT Y TODAS LAS ARRAYS TENDRAN DISPONIBLE ESA FUNCION
Array.prototype.getLastElement = function() {return this[this.length-1]}

//CREAMOS UN CONSTRUCTOR CON SU FUNCION
function Car(name){
  this.name = name;
  this.start = function(date){
    return date + " engine of "+this.name+" starting";
  }
}

//CREAMOS UNA FUNCIÓN NUEVA FUERA DEL CONSTRUCTOR QUE SE LLAMA STOP, PERO COMO LA HACEMOS CON EL
//PROTOTYPE, TODOS LOS OBJETOS QUE SEAN CAR HEREDARAN ESTA FUNCIÓN Y LA PODREMOS UTILIZAR
Car.prototype.stop = function(){
  return "engine of "+this.name+" stoping";
}

var c1 = new Car('Tesla');
//CREAMOS UN NUEVO MÉTODO DESDE EL OBJETO, MAS ABAJO VEREMOS QUE SE HEREDAN PARA LOS OTROS OBJETOS
c1.__proto__.nonMethod = function(){
  return "hola";
}
var c2 = new Car('Porsche');
var d = new Date();
console.log(c2.start());
//LA FUNCIÓN CALL() LE PASAMOS OTRO OBJETO Y NOS COGE EL SCOPE DE ESE OBJETO, NO NOS CAMBIA
//EL OBJETO
//EL PRIMER ARGUMENTO ES EL NUEVO SCOPE, Y EL SEGUNDO ARGUMENTO ES EL ARGUMENTO QUE NECESITA START
console.log(c2.start.call(c1,d));
console.log(c2.start(d));

//CREAMOS OTRO CONSTRUCTOR ''SUBCLASE'' DE CAR Y HEREDAREMOS TODO LO DE CAR
function Tesla(model){
  Car.call(this, 'Tesla')
  this.model = model;
} 
//ESTAS DOS SENTENCIAS HACEN QUE HEREDE TODO DE CAR, PROPIEDADES, FUNCIONES Y CONSTRUCTOR
Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;

var t = new Tesla('C');
console.log(t.name);






