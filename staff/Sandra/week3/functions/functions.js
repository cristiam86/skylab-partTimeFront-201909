function suma(a, b){
    return a + b;
}

function multiply (a, b){
    return a * b;
}

function calculate(operation, paramA, paramB){
    return operation(paramA, paramB);
}

calculate(suma, 1, 2);
calculate(multiply, 4, 5);

Math.ramdom();
Math.random() * 100;
Math.round();
Math.floor();
Math.ceil();

///1 1 2 3 5 8 13 21 55/
function fibonacci(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//High Order Functions
//forEach

var rollings = ['Mick','Keith','Ronie','Charlie'];
rollings.forEach(function(rolling){
    console.log(rolling);
})

rollings.forEach(function (element, i,arr){
    console.log("El rolling"+(i+1)+" es:"+r+"de un total de"+arr.length);
})

function printRollings(element){
    console.log(element);
}

rollings.forEach(printRollings);

//map (funcion call back) (function (elemento,i,array))

rollings.map(function(elem,i,arr){
    return (i+1)+" "+elem;
})

var doubles = [1,2,3,4].map(function(elem,i,arr){
    return elem * 2;
})

//filter true conserva el valor y false no

var numbers = [1,2,3,4,5,6,7,8,9];
numbers.filter(function(elem){
    return elem % 2 === 0;
})

//some (retorna true o false si al menos uno cumple)
numbers.some(function (elem){
    return elem === 5; 
})
//every (todos los elementos iguales)
numbers.every(function (elem){
    return elem === 5; 
})
//reduce(function,value) (reduce el array en un solo valor)
//acc = lo que retorna la funcion anterior
numbers.reduce(function(acc, elem){
    return acc + elem;
}, 0)

var letters = ['a','b','c','d'];
letters.reduce(function (acc, elem){
    return acc + elem;
},'')

/* */
var cliente = {
    name: "Cris",
    puntos: 5
}

var compra = [
    {name: "leche", puntos: 1},
    {name: "jamon", puntos: 5},
    {name: "zumo", puntos: 2},
]
console.time();

compra.reduce(function(acc,product){
    return acc + product.puntos;
}, cliente.puntos)

console.timeEnd();
/* */


