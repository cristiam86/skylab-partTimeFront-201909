function Car(name) {
  this.name = name;
  this.start = function(date){
      console.log(this);
      return date+" engine of "+this.name+" starting...";
  }
}

Car.prototype = Object.create(Array.prototype);
Car.prototype.constructor = Car;

function Tesla(model) {
  Car.call(this, 'Tesla');
  this.model = model;
}

Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;

var t = new Tesla('C');

console.log(t);