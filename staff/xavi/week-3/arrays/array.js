

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
