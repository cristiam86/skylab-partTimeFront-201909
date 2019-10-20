

// EXPRESIONES REGULARES
// Def: secuencia de caracteres que forma un patrón de búsqueda.

// Sintaxis:
//   /patron/

// /patron/ g - global: le indicamos que siga buscando una vez ha encontrado la primera coincidencia.
// /patron/ i - insensitive - Ignora en la búsqueda, mayusculas y minusculas.
// /xav..r/ . - puntos - sustituyen a cualquier caracter.
// \ - barra invertida 
// Ejemplo 1:


console.log('funciona web ') 

var varText = document.getElementById('texto').textContent


// forma 1 para realizarlo
var regEx = /esto/gi;
// EvaluacióN:
console.log(regEx.test(varText))


// forma 2 para realizarlo.
var regEx2 = new RegExp('Esto', 'gi')
// Evaluación:
console.log(regEx2.test(varText))


// Evalúo caracteres especiales:
// Debo poner una barra invertida después de cara caracter especial. 
var regExp3 = /\(ahora\)/gi;
// Evaluación:
console.log('Evalúo barra inveritda ' + regExp3.test(varText))