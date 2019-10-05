//larger_integer
function largerInteger() {
    var num1 = window.prompt('escribe un numero', 'escribe aqui');
    var num2 = window.prompt('escribe otro numero', 'escribe aqui');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var validacion = 0;
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    validacion === 2 ? num1 > num2 ? alert(`el numero mas grande es ${num1}`) : num1 < num2 ? alert(`el numero mas grande es ${num2}`) : alert(`los numeros son iguales`) : alert('NO SON NUMEROS');
}


//sign_product
function signProduct() {
    var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');

    var numFinal = num1 + num2 + num3;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    Number.isInteger(num3) ? validacion++ : '';

    validacion === 3 ? numFinal < 0 ? alert(`el signo es -`) : alert(`el signo es +`): alert('NO SON NUMEROS');
}


//sort_numbers
function sortNumbers(){
    var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');

    var numFinal = num1 + num2 + num3;

    var validacion = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    Number.isInteger(num3) ? validacion++ : '';
    
    var numSorted = [num1, num2, num3];
    validacion === 3 ? alert(numSorted.sort().reverse()) : alert('NO SON NUMEROS');
}


//largest_number
function largestNumber(){
    var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');
    var num4 = window.prompt('escribe el cuarto numero', 'escribe aqui');
    var num5 = window.prompt('escribe el quinto numero', 'escribe aqui');

    var validacion = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    num5 = parseInt(num5);
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    Number.isInteger(num3) ? validacion++ : '';
    Number.isInteger(num4) ? validacion++ : '';
    Number.isInteger(num5) ? validacion++ : '';
    
    var numSorted = [num1, num2, num3, num4, num5];
    numSorted = numSorted.sort().reverse();
    validacion === 5 ? alert(`el numero mas grande es ${numSorted[0]}`) : alert('NO SON NUMEROS');
}


//odd_or_even
function oddOrEven(){
    for (i = 0; i < 16; i++) {
        i % 2 === 0 ? alert(`${i} es par`) : alert(`${i} es impar`);
    }
}


//FizzBuzz
function fizzBuzz(){
    for (i = 0; i < 101; i++) {
        i % 3 === 0 ? i % 5 === 0 ? console.log(`${i} FizzBuzz`) : console.log(`${i} Fizz`) : i % 5 === 0 ? console.log(`${i} Buzz`) : '';
    }
}

//contruct_pattern
function constructPattern(){
    for (i = 0; i < 6; i++) {
        for (j = 0; j < i; j++) {
            console.log('*');
        }
    }
}

//under_1000
function under1000(){
    var sumaN = 0;
    for (i = 0; i < 1001; i++) {
        i % 15 === 0 ? sumaN+=i : '' ; 
    }
    console.log(`${sumaN}`);
}