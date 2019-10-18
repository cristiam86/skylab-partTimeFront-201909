

// Exercice 1.
function isArray(arr) {
    return Array.isArray(arr);
}


// Exercie 2.  = joinElements

function joinElements(names){
    return names.join("")
}


// Exercie 3. = arrayClone 

var input = [2,4,5]
var b = input.slice()

function arrayClone(arr){
  var novaArray = []
  for(var i = 0; i < arr.length; i++){
    novaArray.push(arr[i])
  }
  return arr
}

var clonedArr = arrayClone(input)
clonedArr.push('cable')
console.log('clonedArr', clonedArr) 
console.log('input', input) 


// findDifferences: 



var find1 = [[1, 2, 3], [100, 2, 1, 10],];
var find2 = [[1, 12, 3], [50, 2, 10, 10],]

var diferencias = 0;

for(var x = 0; x < find1.length; x++){
    for(var w = 0; w < find2.length; w++){
        if(find1[x] !== find2[w]){
            diferencias.push(find2[w])
        }
    }
}

console.log(diferencias)


/******************** ejercicio 4 */
// ### 4. findDifferences

var find1 = [[1, 2], 3, 100, 2, 1, 10];
var find2 = [[1, 12], 3, 50, 2, 10, 10]

var diferencias = [];

// 4
function checkDiferences (arr1, arr2, storeDifferences) {
    for(var x = 0; x < arr1.length; x++){
        if(Array.isArray(arr1[x]) && Array.isArray(arr2[x])){
          checkDiferences(arr1[x], arr2[x], storeDifferences)
          console.log('--------- ACABA RECURSIVIDAD -----------')
        }
      
        if(arr1[x] !== arr2[x] && Array.isArray(arr1[x]) === false){
        storeDifferences.push(arr2[x])
    }
  }
}

checkDiferences(find1, find2, diferencias)
console.log(diferencias)

/**************************************************************** */



// EJERCICIO 5
// programa de javascript para calcular la suma y el producto de un array de enteros.


function sumAndProduct(){
  
  var arr = [2,4,6,8];
  var sum = 0;
  var prod = 1;
  
  for(var x = 0; x < arr.length; x++ ){
    sum += arr[x];
    prod *= arr[x];
  }
  return('La suma es: ' + sum + ', y el producto es: ' + prod)
}

sumAndProduct()





/***************************************************************** */



// EJERCICIO 6: addItems


function addItems(add){

  var item = '';
  var result = add.concat(item)

  return result

}

addItems('Hola')







/******************* EJERCICIO 10 getRandom */

// Creo la función getRandom y el paso el parámetro item para almacenar el resultado.
// Creo una variable items y le digo que es un array con 4 nombres.
// la variable item es igual al valor entero(floor) del numero aleatorio(random) de items.length.
// retorno el item con el valor aleatorio acumulado
function getRandom(item){
    var items = Array('Paul', 'Ringo', 'John', 'George');
    var item = items[Math.floor(Math.random()*items.length)];

    return item

}
getRandom() // imprimo uno de los 4 elementos. 


/******************* EJERCICIO 11 findDuplicates */

function duplicado(array){

    var array = ['uno', 'dos', 'tres', 'cuatro', 'tres',]
    
    for(var x = 0; x < array.length; x++){
      for(var y = x+1; y < array.length; y++){
        if(array[x] === array[y]){
          return('Los elementos duplicados son: ' + array[x])
        }
      }
    }
  }
  
  duplicado()

/*********************************** */

/********************* EJERCICIO 12 MERGE ARRAY
 Escriba una función de JavaScript para fusionar dos matrices y elimine todos los elementos duplicados.
*/

function anadir(){
  
    var list1 = ['uno', 'dos', 'tres', 'cuatro'];
    var list2 = ['cuatro', 'cinco', 'seis', 'siete'];
    
    var twoLists = list1.concat(list2);
    
    for(var x = 0; x < twoLists.length; x++){
      for(var w = x+1; w < twoLists.length; w++){
        if(twoLists[x] === twoLists[w]){
          return ('El elemento repetido es: ' + twoLists[w])
        }
      }
    }
  }
  
  anadir()


  /*************************************************************** */



  // EJERCICIO 14 Encontrar el elemento mas repetido en un array.

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 2, 2, 2, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log('El elemento ' + item+" ( " +mf +" times ) ") ;


/************************************************************** */

//EJERCICIO 19. S   m squares.
// Escriba un programa de JavaScript para encontrar la suma de cuadrados de un vector numérico.

function sumsquare(array) {
    var suma = 0, 
        i = array.length;
    while (i--) 
     suma += Math.pow(array[i], 2);
    return suma;
  }
   
  sumsquare([0,1,2,3]);



/***************************************************************** */


// EJERCICIO 40 filterFalsy.
// Una función de JavaScript para filtrar valores falsos, nulos, 0 y en blanco de una matriz.






































///isArray
function isArray(input) {
  if (input instanceof Array) {
      return true;
  } else {
      return false;
  }
}

///joinElements
function joinElements(input) {
  return input.join(",");
}


///arrayClone
function arrayClone(input) {
  var copy = input.slice(0);
  return copy;
}

///findDifferences
function findDifferences(array1, array2) {
  var temp = [];
  for (var i in array1) {
      if (!array2.includes(array1[i])) temp.push(array1[i])
  }
  for (i in array2) {
      if (!array1.includes(array2[i])) temp.push(array2[i]);
  }
  return temp.sort((a, b) => a - b);
}
/*
function findDifferences(array1,array2){
  var joinedArr= array1.concat(array2);
  var results=[];
  for (var i = 0; i < joinedArr.length - 1; i++) {
  if (joinedArr[i + 1] == joinedArr[i]) {
      results.push(joinedArr[i]);
  } 
}
}*/

///// Sum and Product
function SumAndProduct(input) {
  var sum = input.reduce((a, b) => a + b);
  var product = input.reduce((a, b) => a * b);
  return { sum: sum, product: product }
}
//// addItems
function addItems(items) {
  var emptyArr = [];
  var result = emptyArr.concat(items);
  return result;
}

//// generateArrayLength
function generateArrayLength(input1, input2) {
  var temp = [];
  for (var i = input1; i <= input2; i++) {
      var result = temp.push(i);
  }
  return temp;
}

///last
function getLast(input, n) {
  if (n > 0) {
      return input.slice(Math.max(input.length - n, 0))
  } else {
      return input.slice(-1);
  }
}

//// sortItems
function sort() {
  return [].slice.call(arguments).sort(function(a, b) {
      return a - b;
  });
}

//// getRandom
function getRandom() {
  return [].slice.call(arguments)[Math.floor(Math.random() * arguments.length)];
}

///  findDuplicates
function findDuplicates(input) {
  return input.filter(function(a) {
      return input.indexOf(a) !== input.lastIndexOf(a)
  });
}
//// mergeArrays
function mergeArrays(array1, array2) {
  var merged = array1.concat(array2);
  return merged.filter(function(a) {
      return merged.indexOf(a) === merged.lastIndexOf(a)
  });
}
/// separateEven

///  mostFrequentItem


/// moveElement
function moveElement(arr, from, to) {
  var element = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, element);
  return arr;
}
/// swapCase
function swapCase(input) {
  var newWord = [];

  for (i = 0; i < input.length; i++) {
      if (input[i] == input[i].toLowerCase()) {
          newWord[i] = input[i].toUpperCase();
      } else {
          newWord[i] = input[i].toLowerCase();
      }
  }

  return newWord.join("");
}

//// Print elements array

/// array_filled (string)

/// Sum squares

/// removeDuplicate

/// showChoices

///showLeapYears
function showLeapYears(st_year, end_year) {
  function leap_year_range(st_year, end_year) {
      var year_range = [];
      for (var i = st_year; i <= end_year; i++) {
          year_range.push(i);
      }
      var new_array = [];

      year_range.forEach(
          function(year) {
              if (test_LeapYear(year))
                  new_array.push(year);
          });

      return new_array;
  }

  function test_LeapYear(year) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
          return year;
      } else {
          return false;
      }
  }
  return test_LeapYear
}


/// shuffleArray


/// binarySearch
///sumPositions
////generateArraySteps
////flattenArray
///unionArray
///removeFalsy
///first
///sortObjectsTitle
///findPairSum
///validValues
///longestCommon
///fillArray
///removeElement
///findArrayWithElement
///emptyArray
///getNthLargest
///array_filled (numeric)
///filterFalsy