console.log("week5")

var Car = function(name){
    this.name = name;
}

var c1 = new Car("Optra");
var c2 = new Car("Elantra");

//prototype adds to the objects __proto__ attribute.
Car.prototype.start = function(){
    return "Engine of "+this.name+" starting...";
}

console.log(c1.start());

//call allows us to take a different scope!!
console.log(c2.start.call(c1));

//

function Tesla(model){
    Car.call(this,"Rampage");
    this.model = model;
}

var t = new Tesla("model 1");
console.log(t);