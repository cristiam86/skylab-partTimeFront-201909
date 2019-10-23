console.log("week5")

var Car = function(name){
    this.name = name;
}

var c = new Car("Optra");
console.log(c);

//prototype adds to the objects __proto__ attribute.
Car.prototype.start = function(){
    return "Engine of "+this.name+" starting...";
}

console.log(c.start());