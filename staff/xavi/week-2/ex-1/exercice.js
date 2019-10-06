

var num1 = prompt();
var num2 = prompt();

var numero1 = parseInt(num1, 10);
var numero2 = parseInt(num2, 10);


if(numero1 > numero2){
    console.log(numero1 + " es mayor que " + numero2)
} else if (numero1 === numero2){
    console.log(numero1 + " es igual que " + numero2)
} else {
    console.log(numero1 + " es menor que " + numero2)
}

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

console.log('el número más alto es: ' + comparador)

