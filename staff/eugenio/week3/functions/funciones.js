/*
var numrandom = Math.random();
var numrandom2 = Math.random() *100;
console.log(numrandom);
console.log(numrandom2);
var numround = Math.round(numrandom2);
console.log(numround);
*/
//HIGH ORDER FUNCTIONS
var rollings = ["Mick", "Keith", "Ronie", "Charlie"]
//por argumento se le puede pasar lo que queramos, 1 o más argumentos
rollings.forEach(function(r, i, arr){
  console.log("El rolling "+i+" es "+r+" de un total de "+ arr.length);
})

function printRolling(r){
  console.log(r);
}


var rollingsWithNumbers = rollings.map(function(r, i){
  return (i+1)+" "+r;
})

//console.log(rollingsWithNumbers);

var singles = [1,2,3,4];
var doubles = [1,2,3,4].map(function(elem){
  return elem *2;
})
//console.log(singles);
//console.log(doubles);

var decimalNumbers = [1.2, 4.7, 10.9]
var roundedNumbers = decimalNumbers.map(Math.round);
//console.log(roundedNumbers);

//FILTER devuelve una array nueva
var numbers = [1,2,3,4,5,6,7,8]
var pairNumbers = numbers.filter(function(elem){
  return elem % 2 === 0;
})
//console.log(pairNumbers);

//SOME devuelve true o false
var numSome = numbers.some(function(elem){
  return elem === '5';
})

//EVERY devuelve true o false si todos los elementos cumplen la condición
var numEvery = numbers.every(function(elem){
  return elem < 10;
})
console.log(numEvery);

//REDUCE reduce una array a un solo valor
// el 0 es el primer valor de acc, que es un acumulador, es el valor inicial
// por el cual empezaremos a sumar, en la segunda vuelta acc valdrá 1 ya que es la
// suma de 0 + la primera posición de la array, por cada vuelta el accumulador retiene
// el resultado anterior y suma la siguiente posición del array
var arraySumada = numbers.reduce(function(acc, elem){
  return acc + elem;
}, 0)

//console.log(arraySumada);

//CONCAT nos concatena todas las posiciones del array
var letters = ['a', 'b', 'c', 'd']
var lettersJuntas = letters.reduce(function(acc, elem){
  return acc + elem
}, '')
console.log(lettersJuntas);


//EJEMPLO DE REDUCE acumulación de puntos en compra
var cliente = {
  name: "Eugenio",
  puntos: 5
}
var compra = [
  {name: "Leche", puntos: 1},
  {name: "Jamón", puntos: 5},
  {name: "Zumo", puntos: 2}
]
var puntosCliente = compra.reduce(function(acc, product){
  return acc + product.puntos;
}, cliente.puntos)
console.log(puntosCliente);
