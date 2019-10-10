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
  console.log(inputs.sort().reverse())
  return inputs.sort(function(a,b){
    return a>b ? -1 : 1;
  });
}

function largestNumber(num1, num2, num3, num4, num5) {
  return 0;
}


function oddOrEven() {
  return '';
}


function FizzBuzz() {
  return '';
}


function contructPattern() {

}


function under1000() {
  return 0;
}

