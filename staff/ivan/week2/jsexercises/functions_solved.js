function largerInteger(int1, int2) {
    if(int1>int2){
      return int1;
  } else if(int2>int1){
      return int2;
  } else{
      return int2
  }
}


function signProduct(num1, num2, num3) {
  var product = num1*num2*num3;
  if(product>0){
      return "+";
  } else if(product<0){
      return "-";
  } else{
      return "0";
  }
}


function sortNumbers(num1, num2, num3) {
  var inputs = [num1,num2,num3];
  return inputs.sort(function(a,b){
    return a>b ? -1 : 1;
  });
}

function largestNumber(num1, num2, num3, num4, num5) {
  var inputs = [num1, num2, num3, num4, num5];
  return inputs.sort(function(a,b){
    return a>b ? -1 : 1;
  })[0];

  return 0;
}


function oddOrEven(i) {
  return i%2===0 ? "even" : "odd";
}


function FizzBuzz(loops) {
  var text = '';
  for (var i=1; i<=loops; i++){
    if(i%3===0){
        text += "Fizz";
    } else if(i%5===0){
        text += "Buzz";
    } else if(i%15===0){
        text += "FizzBuzz";
    }
  }
  return text;
}


function contructPattern() {

}


function under1000(loops) {
  total = 0;
  for(var i=1; i<=loops; i++){
    if(i%3===0 || i%5===0){
      total += i;
    }
  }
  return total;
  }

