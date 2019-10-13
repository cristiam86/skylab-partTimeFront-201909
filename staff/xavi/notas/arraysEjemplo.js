
//Ejercicio 1. 
// Verificar si la variable es un array.

// declaro una función y le paso un parámetro
function esArray(texto){

    // declaro que la variable sea un array ['esto es un array']
    var texto = ['esto es un array'] 
    // retorno el método (Array.isArray) y el parámetro que quiero analizar
    return(Array.isArray(texto)) 
  }
  
  esArray() // imprime: true

/* ejemplos: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

******************************************************************************/

// Ejercicio 2.
// Unir elementos 
// Se utiliza el método .join("") 
// se especifica el tipo de separación entre "". "-" o "/" 
function unir(texto){

    var texto = ['uno', 'dos', 'tres'];

    return texto.join("/") 
    // El método .join("/") declara que la separación entre los numeros será: /
}

unir() // imprime: 'uno/dos/tres'

/* Ejemplo:
 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join

var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

*******************************************************************************/

// Ejercicio 3.
// Crear una función para clonar un array


function arrayClone(arr){

    var arr = ['e', 'w', 'f', 'w', '3']
    var novaArray = []


    for(var i = 0; i < arr.length; i++){
      novaArray.push(arr[i]) // con la [i] solo se intorduce el indice y evitas introducir todo el array por cada iteración.
    }

    console.log(arr)
    console.log(novaArray)
    // Return 
  }
  
  arrayClone()