function Car(color, wheels){
  this.color = color;
  this.wheels = wheels;
  this.start = function(){
    return "engine of "+this.name+" starting...";
  }
}

