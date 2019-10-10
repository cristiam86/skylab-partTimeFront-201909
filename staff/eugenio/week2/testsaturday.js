function under1000(){
  var mult3 = 0;
  var mult5 = 0;
  for(var x =1; x <= 1000; x++){
    var reset3 = 0;
    var reset5 = 0;
    if(x % 3 == 0){
      reset3 = x;
      mult3 = mult3 + reset3;
    }
    if(x % 5 == 0){
      reset5 = x;
      mult5 = mult5 + reset5;
    }
  }
  return mult3+", "+mult5+", "+(mult3+mult5);
}

console.log(under1000());