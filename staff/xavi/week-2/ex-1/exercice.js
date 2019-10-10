// ************************* EJERCICIO 1 - largerInteger. *******************
// ********* Comparar dos números y evaluar si es mayor, menor o igual.

// 1. Delcaro dos variables y ejecuto el método prompt para que se inserten los números a calcular
var num1Ex1 = prompt('inserte el primer número');
var num2Ex1 = prompt('inserte el segundo número');

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
  console.log(numero1Ex1 + ' es igual que ' + numero2Ex1);
} else if(numero1Ex1 > numero2Ex1){
  console.log(numero1Ex1 + ' es mayor que ' + numero2Ex1);
} else {
  console.log(numero1Ex1 + ' es menor que ' + numero2Ex1);
} 





/********************************** EJERCICIO 2  signProduct (num1, num2, num3) */

/*signProduct (num1, num2, num3)

var numb1 = 3;
var numb2 = -7;
var numb3 = 2

var numerob1 = parseInt(numb1, 10);
var numerob2 = parseInt(numb2, 10);
var numerob3 = parseInt(numb3, 10);

var numbers = [3, -7, 2]
var parsedNumbers = numbers.map((number) =>  Number(number))
console.log('array modified ->', parsedNumbers) */


/********************************** EJERCICIO 3  sortNumbers (num1, num2, num3) */


var sortNum = [0, -1, 4];
sortNum.sort(function(a, b){return b-a});
console.log(sortNum)



/********************************** EJERCICIO 4 / MayorNúmero (num1, num2, num3, num4, num5) ****************************/

// 1. Insertar 5 números y mediante un condicional imprimir cual de los 5 es el mayor 

// 2.1 Declaro cinco variables que son iguales a un prompt para introducir un valor.
var num1Ex2 = prompt('inserte el primer número:');
var num2Ex2 = prompt('inserte el segundo número:');
var num3Ex2 = prompt('inserte el tercer número:');
var num4Ex2 = prompt('inserte el cuarto número:');
var num5Ex2 = prompt('inserte el quinto número:');


// 3.1 Una vez tengo los cinco valores almacenados en las variables. 
var numero1Ex2 = parseInt(num2Ex1, 10);
var numero2Ex2 = parseInt(num2Ex2, 10);
var numero3Ex2 = parseInt(num3Ex2, 10);
var numero4Ex2 = parseInt(num4Ex2, 10);
var numero5Ex2 = parseInt(num5Ex2, 10);

// 4.1 Declaro una nueva variable que contiene todas las variables con sus valores parseados a número decimal.
var numerosEx2 = [numero1Ex2,numero2Ex2,numero3Ex2,numero4Ex2,numero5Ex2];

// 5.1 Declaro una nueva variable que me servirá para comparar todos los números.
var comparadorEx1 = 0;

// 6.1 Declaro un bucle for. en el que la variable x2 la utilizo para iterar el bucle.
// 6.2 la variable x2 tiene valor de 0, y si es menor que numerosEx2.length (que es 5) se sumará en uno su valor, gracias al ++
// 6.3 el condicional declara que las 5 iteraciones sobre el array numerosEx2 sea mayor o igual a comparadorEx1, eontonces comparadorEx1 será igual a alguna de las iteraciones de numerosEx2[x2.
// 6.3 Asi que cuando el valor es igual al valor mas alto. el condicional se cerrará porque ya no cuple la condición.
for(x2 = 0; x2 < numerosEx2.length; x2++){
  if(numerosEx2[x2]>comparadorEx1){
    comparadorEx1 = numerosEx2[x2]
  }
}

// 7.1. la variable comparadorEx1, almacena el valor más alto del array iterado.
console.log('De los siguientes números: ' + '' + numero1Ex2 + ', ' + numero2Ex2 + ', ' + numero3Ex2 + ', ' + numero4Ex2 + ', ' + numero5Ex2 + ' : el más alto es: ' + comparadorEx1)








/********************************** EJERCICIO 5 par o impar ****************************/

// declarar por consola los números que son pares o impares del 1 al 15.

// 1.0 Declara una variable que es un array de números del 1 al 15.
var numerosEx3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// 2.0 Creo un bucle for para iterar la cariable x3 el número de veces que elementos tiene el array numerosEx3. 
// 2.1 El bucle se repite 15 veces.
// 2.2 La variable x3 empieza por 1, es el primer número que imprime el bucle.
// 2.3 Dentro del bucle hay un condicional que se compara el número impreso por sus condiciones. 
// 2.4 Al compara el condicional se cierra e imprime el resultado de si es para o impar.
// 2.5 Como el bucle acaba cuando llega a 15, se imprimirán los 15 números con sus respectivos valores según la condición. 

for( x3 = 1; x3 < numerosEx3.length; x3++){
  if(x3 === 0){
    console.log(x3 + ' Es un número par')
  } else if(x3 % 2 == 1){
    console.log(x3 + ' Es un número impar')
  } else{
    console.log(x3 + ' Es un número par')
  }
}

/**************************************************** */

// otra forma de hacerlo:
// 1. No es necesario un array de 15 elementos en la variable numerosEx3. solo con el número 15 es necesario.
// 2. Compara la variable declarada en el bucle for.
var numerosEx3A = 15;

for(x3a = 0; x3a < numerosEx3A; x3a++){
  if(x3a === 0){
    console.log(x3a + ' ES PAR')
  } else if( x3a % 2 == 0){
    console.log(x3a + ' ES PAR')
  } else {
    console.log(x3a + ' ES IMPAR')
  }
}


//**************************** EJERCICIO 6 ************************/

// Creo la variable numerosEx6 con un valor númerico de 100.
var numerosEx6 = 100;

// Creo un bucle en el que la variable x6 itera mientras sea menor que el valor de 100.
// Dentro del for creo un condicional en que le digo:
// si x6 es múltiplo de 3 = imprime Fizz.
// si no x6 es múltiplo de 5 = imprime Buzz.
// si x6 es múltiplo de 3 y además múltiplo de 5 = entonces imprime FizzBuzz
// y si no =  Imprime : Ninguno de los dos.

for(x6 = 0; x6 < numerosEx6; x6++){
   if(x6 % 3 === 0){
       console.log('Fizz')
   } else if (x6 % 5 === 0) {
       console.log('Buzz')
   } else if (x6 % 3 === 0 && x6 % 5 === 0){
       console.log('FizzBuzz')
   } else {
       console.log('Nuniguno de los dos. ')
   }
}


//********************** EJERCICIO 7 contructPattern () ***********/

// Declaro una variable (numEx4) con el valor numérico que  quiero que se repita.
// Declaro una variable (asteristo) con el string * para poder dibujar el símbolo en consola. 
var numEx4 = 5;
var asterisco = '*';

// Creo un bucle for para iterar la variable x4 tantas veces como el valor de numEx4.
// Por cada iteración imprimo en consola la variable asterisco. 
// Con el método .repeat multiplicas el string que lo precede tantas veces como este escrito entre ().
// Por cada iteración el valor de .repeat(x4) va incrementando en 1. así que pintará tantos asteriscos como valor tenga la iteración (x4).
// Ejemplo del método .repeat: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/repeat
for(x4 = 0; x4 < numEx4; x4++ ){
  console.log(asterisco.repeat(x4))
}




/******************************** EJERICIO 8  **********************++*/


var numerosEx8 = 1000;
var sumaEx8 = 0;

for(x8 = 0; x8 < numerosEx8; x8++){
    if(x8 % 3 === 0){
        sumaEx8.push(x8)
    } else {
      console.log('fin')
    }
}

console.log(sumaEx8)




















































































// ejecicio 2
/*
Escriba una declaración condicional de JavaScript para encontrar el signo del producto de tres números. Mostrar un cuadro de alerta con el signo especificado.

`` `
Números de muestra: 3, -7, 2
Salida: el signo es -
`` `

*/



var numb1 = 3;
var numb2 = -7;
var numb3 = 2

var numerob1 = parseInt(numb1, 10);
var numerob2 = parseInt(numb2, 10);
var numerob3 = parseInt(numb3, 10);

var numbers = [3, -7, 2]
var parsedNumbers = numbers.map((number) =>  Number(number))
console.log('array modified ->', parsedNumbers)



/* *************** 
### sort_numbers

Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

```
Sample numbers : 0, -1, 4 
Output : 4, 0, -1

*/

var sortNum = [0, -1, 4];
sortNum.sort(function(a, b){return b-a});
console.log(sortNum)


/*** 
###  largest_number


Escriba una declaración condicional de JavaScript para encontrar el mayor de cinco números. Mostrar un cuadro de alerta para mostrar el resultado.


Sample numbers : -5, -2, -6, 0, -1 
Output : 0 
*/

var numc1 = prompt();
var numc2 = prompt();
var numc3 = prompt();
var numc4 = prompt();
var numc5 = prompt();

var numeroc1 = parseInt(numc1, 10);
var numeroc2 = parseInt(numc2, 10);
var numeroc3 = parseInt(numc3, 10);
var numeroc4 = parseInt(numc4, 10);
var numeroc5 = parseInt(numc5, 10);

var cNum = [numeroc1, numeroc2, numeroc3, numeroc4, numeroc5]
var comparador = 0

for(c = 0; c < cNum.length; c++){
   if(cNum[c]>comparador){
       var comparador = cNum[c]
   }
}

console.log('De los siguientes números: ' + cNum.length + ' el número más alto es: ' + comparador)



// Par o impar

var quince = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


for(let p = 0; p < quince.length; p++){
    if(p === 0){
        console.log('El cero es un número par ')
    } else if(p % 2 === 0){
        console.log(p + ' es par')
    } else {
        console.log(p + 'es impar')
    }
}



