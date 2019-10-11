// 1. EJERCICIO PARA EVALUAR MAYOR O MENOR

function largerInteger(num1, num2){
  //parseamos con parseInt las variables que vienen por argumento ya que nos vienen como String
  if(num1 > num2){
    return num1;
  }else if(num1 < num2){
    return num2;
  }else{
    return num2;  
  }
}

// 2. EJERCICIO PARA EVALUAR SI EL VALOR PASADO ES NEGATIVO


function signProduct(num3, num4, num5){
  var resultado = num3*num4*num5;
  if(resultado < 0){
    return '-';
  }else{
    return '+';
  }
}

// 3. EJERCICIO PARA ORDENAR VALORES


function sortNumbers(num1, num2, num3){
  var arr = [num1, num2, num3];
  arr.sort(function(a,b){
    return b - a
  })
    return arr;
}

/*
function sortNumbers(a, b, c){
  if (a < b && b < c) {
    return a + ", " + b + ", " + c;
  } else if (a > b && b > c && c > a) {
    return c + ", " + b + ", " + a;
  } else if (a < b && b > c && a < c) {
    return a + ", " + c + ", " + b;
  } else if (a < b && b > c && a > c) {
    return c + ", " + a + ", " + b;
  } else if (a > b && b < c) {
    return a + ", " + c + ", " + b;
  } else if (a > b && b < c && c > a) {
    return "hola";
  } else if (a === b && b === c && a === c) {
    return 'Introduce números distintos, no pongas los mismos números!!';
  } else {
    return 'vuelve a revisar el código!!';
  }
  
}
*/
// 4. MUESTRA EL MAYOR NÚMERO DE TODOS


function largestNumber(num1, num2, num3, num4, num5){

  if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    return num1;
  }else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    return num2;
  }else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    return num3;
  }else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    return num4;
  }else if(num5>num1 && num5>num2 && num5>num3 && num5>num4){
    return num5;
  }else if(num1===num2 && num1===num2 && num1===num3 && num1===num4 && num1===num5){
    return "No pongas todos los números iguales!!!";
  }else{
    return "hola";
  }

}


// 5. HACEMOS UN LOOP DE 0 A 15 Y NOS DIRÁ CADA NÚMERO SI ES PAR O IMPAR

function oddOrEven(num){
  
    if(num % 2){
      return "odd";
    }else{
      return "even";
    }
  
}

//oddOrEven();

// 6. HACEMOS UN LOOP DE 0 A 100 Y LOS MULTIPLES DE 3 DIRA FIZZ, MULTIPLES DE 5 BUZZ Y MULTIPLES DE AMBOS FIZZBUZZ

function FizzBuzz(num){
  var resultado = "";
  for(x = 1; x <= num; x++){
    if (x % 3 === 0){
      resultado += "Fizz";
    }else if(x % 5 === 0){
      resultado += "Buzz";
    }
  }
  return resultado;
}

//FizzBuzz();

// 7. CONSTRUIMOS LA ESTRUCTURA DE ASTERISCOS MEDIANTE DOS BUCLES FOR ANIDADOS

function contructPattern(){
  var pattern = "*";
  for(var x = 0; x < 5; x++){
    console.log(pattern)
    for(var y = 0; y < 1 ; y++){
      pattern = pattern+"*";
    }
        
  }

}

//contructPattern();

// 8. CREAMOS UNA FUNCIÓN QUE NOS SUME LOS MULTIPLOS DE 3 Y 5 POR DEBAJO DE 1000

function under1000(num){
  var mult3 = 0;
  var mult5 = 0;
  for(var x =1; x <= num; x++){
    if(x % 3 === 0){
      mult3 += x;
    }
    if(x % 5 === 0){
      mult5 += x;
    }
  }
  return mult3+mult5;
}


