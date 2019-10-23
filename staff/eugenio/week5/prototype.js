//.PROTOTYPE ES PARA FUNCIONES
//.__PROTO__ ES PARA OBJETOS

var arr = [1,2,3,4,5]
// CREAMOS UNA FUNCION QUE SE LLAMA GETLASTELEMENT Y TODAS LAS ARRAYS TENDRAN DISPONIBLE ESA FUNCION
Array.prototype.getLastElement = function() {return this[this.length-1]}

//CREAMOS UN CONSTRUCTOR CON SU FUNCION
function Car(name){
  this.name = name;
  this.start = function(){
    return "engine of "+this.name+" starting";
  }
}

//CREAMOS UNA FUNCIÓN NUEVA FUERA DEL CONSTRUCTOR QUE SE LLAMA STOP, PERO COMO LA HACEMOS CON EL
//PROTOTYPE, TODOS LOS OBJETOS QUE SEAN CAR HEREDARAN ESTA FUNCIÓN Y LA PODREMOS UTILIZAR
Car.prototype.stop = function(){
  return "engine of "+this.name+" stoping";
}

var c = new Car('tesla');
//CREAMOS UN NUEVO MÉTODO DESDE EL OBJETO, MAS ABAJO VEREMOS QUE SE HEREDAN PARA LOS OTROS OBJETOS
c.__proto__.nonMethod = function(){
  return "hola";
}
var d = new Car('Porsche');
console.log(c.stop());
console.log(c.nonMethod());
console.log(d.nonMethod());





