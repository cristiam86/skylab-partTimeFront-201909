function largerInteger(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}


function signProduct(num1, num2, num3) {
  if (num1 * num2 * num3 > 0) return '+';
  return '-';
}


function sortNumbers(num1, num2, num3) {
      if (num1 > num2 && num1 > num3 && num2 > num3 ){
        return [num1,  num2, num3];
    } else if (num2 > num1 && num2 > num3 && num1 > num3 ) {
        return [num2, num1, num3];
    } else if (num3 > num2 && num3 > num1 && num1 > num2){
        return [num3,  num1, num2];
    } else {
      return [num1,  num3, num2];
    } 
}

function largestNumber(num1, num2, num3, num4, num5) {
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ){
      return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 ){
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 ){
    return num3;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 ){
    return num4;
  } else {
    return num5;
  }
}


function oddOrEven(num) {
    if(num % 2 !== 0) {
      return 'odd';
      } else {
        return 'even';
      }
}


function FizzBuzz(number) {
  resultado = '';
  for (i = 1; i < number+1; i++) {
      i % 3 === 0 ? i % 5 === 0 ? resultado+='FizzBuzz' : resultado+='Fizz' : i % 5 === 0 ? resultado+='Buzz' : '';
    }
  return resultado;
  
}


function contructPattern() {

}


function under1000(numMax) {
    var num = 0;
    var resultado;
    for (i = 1; i < numMax+1; i++) {
        (i % 3 === 0)||(i % 5 === 0) ? num += i : '';
    }
    resultado = num;
    return resultado;
}

