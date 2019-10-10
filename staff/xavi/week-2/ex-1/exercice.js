/* ************************* EJERCICIO 1 ******************* */
  /* OK */

function largerInteger(num1, num2) {
    // ************************* EJERCICIO 1 - largerInteger. *******************
    // ********* Comparar dos números y evaluar si es mayor, menor o igual.

    // 1. Delcaro dos variables y ejecuto el método prompt para que se inserten los números a calcular
    var num1Ex1 = num1
    var num2Ex1 = num2

    // 2.  Declaro dos variables que serán iguales a los prompt y los parseo:
    // 2.1 parseInt = parseo a numero entero.
    // 2.2 (variable  o valor que quiero convertir,  la base a la que convierto.)
    // 2.3 una base de 10 indica una conversión a número decimal.
    var numero1Ex1 = parseInt(num1Ex1, 10);
    var numero2Ex1 = parseInt(num2Ex1, 10);

    // 3.0 Declaro un condicional para comprobar los valores e imprimir la diferencia o igualdad entre ellos.
    // 3.1 Si(numero 1 es === a numero 2) entonces: x es igual a x
    // 3.2 O si (numero 1 es > (mayor) a numero 2 ) entoces: x es mayor que x
    // 3.3 Sino, la única opción que queda es: x es menor que x. (No hace falta declara el menos porquec ya viene por descarte de la igualdad o mayor que)
    if(numero1Ex1 === numero2Ex1){
       return numero1Ex1
    } else if(numero1Ex1 > numero2Ex1){
       return numero1Ex1
    } else {
       return numero2Ex1 
    } 
}


function signProduct(num1, num2, num3) {

    var multi = [num1 * num2 * num3]

    if( multi < 0){
        return '-'
    } else{
        return '+'
    }

  }
  
/****************** EJERCICIO 3 +++++++++++++++ */
  
function sortNumbers(num1, num2, num3) {
    var sortNum = [num1, num2, num3];
    sortNum.sort(function(a, b){return b-a});
    return (sortNum);
}
  
/****************** EJERCICIO 4 +++++++++++++++ */

function largestNumber(num1, num2, num3, num4, num5) {

    var largest = [num1, num2, num3, num4, num5];
    var compare = 0;

    for(var x = 0; x < 5; x++){
        if(largest[x]>compare){
            compare = largest[x]
        }
      }
      
    return compare;
  }
  
  
/****************** EJERCICIO 4 +++++++++++++++ */

  function oddOrEven(w) {

        if(w === 0){
           return('even')
        } else if( w % 2 == 0){
           return('even')
        } else {
           return('odd')
        }
  }



  
  
  function FizzBuzz() {
    /*
    var numerosEx6 = 100;

    for(var i = 0; i < numerosEx6; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return('FizzBuzz')
        } else if (i % 5 === 0) {
            return('Buzz')
        } else if (i % 3 === 0){
            return('Fizz')
        } else {
            return(io  +  ' Nuniguno de los dos. ')
        }
    }
    */
  }
  
  


  
  /* ************************* EJERCICIO 8 ******************* */
  /* OK */

  function under1000(number) {
    var acumulador = 0;

    for (var i = 0; i <= number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            acumulador += i
        }
    }
    return acumulador;
  }



  

