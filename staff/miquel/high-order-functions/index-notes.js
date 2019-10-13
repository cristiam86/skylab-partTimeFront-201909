function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function substract(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
// operation is expecting a function
// a function without () calls a reference to that function
function calculator(operation, paramA, paramB) {
    return operation(paramA, paramB);
}

calculator(sum, 4, 2);

// SCOPE
var abuelo = "Evaristo";
function funcionPadre() {
    var padre = "Pedro";
    return function funcionHijo() {
        var hijo = "Junior";
        console.log("hola soy " + hijo + " hijo de " + padre + " nieto de " + abuelo);
        
    };
}

funcionPadre()();

// FIBONACCI
function fibonacci(n) {
    if(n === 1) return 1;
    if(n === 2) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// pos 8 in the secquence
console.log("Fibonacci value: ", fibonacci(8));

// FUNCIONES ORDEN SUPERIOR
//forEach
['Mick','Keith','Ronie','Charlie'].forEach(function(value, index) {
    console.log(value);
});
['Mick','Keith','Ronie','Charlie'].forEach(printValue);

function printValue(value, index) {
    console.log("Position value is: ",value , " index: ", index);
}
// map
['Mick','Keith','Ronie','Charlie'].map(printValue);
function printValue(value, index) {
    console.log("Position value is: ",value , " index: ", index);
}
var decimalNumbers = [1.2, 4.7, 10.9];
var roundedNumbers = decimalNumbers.map(Math.round);
console.log(decimalNumbers);
console.log(roundedNumbers);

// filter
var number = [1,2,3,4,5,6,7,8,9];
var arrFilter = number.filter(function(elem) {
    return elem % 2 === 0;
});
console.log(number, arrFilter);

// some
// true if some are iqual to
var equal5 = number.some(function(elem) {
    return elem === 5;
});
console.log("some", equal5);

// every
// true if all are iqual to
var equal5 = number.every(function(elem) {
    return elem === 5;
});
console.log("every", equal5);

// reduce
// operate with all the array values
var total = number.reduce(function(accumulator, elem) {
    return accumulator + elem;
}, 0); // 0 -> starting number 
console.log("reduce", total);

var letters = ['a','b','c','d'];
var concatLetters = letters.reduce(function(acc, elem) {
    return acc + elem;
}, '');
console.log("reduce", concatLetters);

// ejemplo supermercado
var cliente = {
    name: "Miquel",
    puntos: 5
}
var compra = [
    {name: "Leche", puntos: 2},
    {name: "Zumo", puntos: 2},
    {name: "Pan", puntos: 1}
]
console.time("reduce");
var puntosClientes = compra.reduce(function(acc, product) {
    return acc + product.puntos;
}, cliente.puntos);
console.log("puntos clientes: ", puntosClientes);
console.timeEnd("reduce"); // ms it took the execute the code

console.time("for");
var acc = 0;
for(var i = 0; i < compra.length; i ++) {
    acc += compra[i].puntos;
}
console.log("puntos clientes: ", acc);
console.timeEnd("for"); // ms it took the execute the code

