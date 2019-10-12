

// Exercice 1.
function isArray(arr) {
    return Array.isArray(arr);
}


// Exercie 2.  = joinElements

function joinElements(names){
    return names.join("")
}


// Exercie 3. = arrayClone 

function arrayClone(input){
    var array1 = input;
    var array2;
    input = array2;
}

var input = [2,4,5]
var b = input.slice()


function clone(arr){
  var novaArray = []
  for(var i = 0; i < arr.length; i++){
    novaArray.push(arr[i])
  }
  return arr
}

var clonedArr = clone(input)

clonedArr.push('cable')

console.log('clonedArr', clonedArr) 
console.log('input', input) 