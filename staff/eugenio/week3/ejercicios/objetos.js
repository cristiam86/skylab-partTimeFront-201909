var persona = {}

function isObject(obj){
    if(typeof obj === 'object'){
        return true;
    }else{
        return false;
    }
        
}
//console.log(isObject(persona));

var car = {
    brand: "Seat",
    model: "León",
    color: "Grey",
    descripcion : function() {
      return 'My '+ this.color + ' ' + this.brand + ' ' + this.model + ' is great!';
    }
  };
//console.log(car.descripcion());


