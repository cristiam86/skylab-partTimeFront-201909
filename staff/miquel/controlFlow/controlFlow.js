function largerInteger(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}


function signProduct(num1, num2, num3) {
  if(num1 * num2 * num3 > 0) return '+';
  else return '-';
}


function sortNumbers(num1, num2, num3) {
  return [num1, num2, num3].sort(function(a, b){return b-a});
}

function largestNumber(num1, num2, num3, num4, num5) {
  return [num1, num2, num3, num4, num5].sort(function(a, b){return b-a})[0];
}


function oddOrEven(num) {
  if(num % 2 === 0) return 'even';
  else return 'odd';
}


function FizzBuzz(num) {
  var str = '';

  for(var i = 1; i <= num; i++) {
    if(i % 3 === 0) str += 'Fizz';
    else if(i % 5 === 0) str += 'Buzz';
  }
  
  return str;
}


function contructPattern() {

}


function under1000(num) {
  var total = 0;

  for(var i = 1; i <= num; i++) {
    if(i % 3 === 0) total += i;
    else if(i % 5 === 0) total += i;
  }
  
  return total;
}

