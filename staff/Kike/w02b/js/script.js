//larger_integer
function largerInteger(num1, num2) {
    // var num1 = window.prompt('escribe un numero', 'escribe aqui');
    // var num2 = window.prompt('escribe otro numero', 'escribe aqui');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var validacion = 0;
    var res = 0;
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    validacion === 2 ? num1 > num2 ? console.log(`el numero mas grande es ${num1}`) : num1 < num2 ? console.log(`el numero mas grande es ${num2}`) : console.log(`los numeros son iguales`) : console.log('NO SON NUMEROS');
    validacion === 2 ? num1 > num2 ? res = num1 : num1 < num2 ? res = num2 : res = num1 : console.log('NO SON NUMEROS');
    return res;
}


//sign_product
function signProduct(num1, num2, num3) {
    // var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    // var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    // var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');


    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    var validacion = 0;
    var res = '';
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    Number.isInteger(num3) ? validacion++ : '';

    var numFinal = num1 * num2 * num3;

    validacion === 3 ? numFinal < 0 ? console.log(`el signo es -`) : console.log(`el signo es +`) : console.log('NO SON NUMEROS');
    validacion === 3 ? numFinal < 0 ? res = '-' : res = '+' : console.log('NO SON NUMEROS');
    return res;
}


//sort_numbers
function sortNumbers(num1, num2, num3) {
    // var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    // var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    // var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');

    var numFinal = num1 + num2 + num3;

    var validacion = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    Number.isInteger(num1) ? validacion++ : '';
    Number.isInteger(num2) ? validacion++ : '';
    Number.isInteger(num3) ? validacion++ : '';
    var res = [];

    var numSorted = [num1, num2, num3];
    numSorted = numSorted.sort(function (a, b) { return a - b }).reverse();
    validacion === 3 ? console.log(numSorted) : console.log('NO SON NUMEROS');
    res = numSorted;

    return res;
}


//largest_number
function largestNumber(num1, num2, num3, num4, num5) {
    // var num1 = window.prompt('escribe el primer numero', 'escribe aqui');
    // var num2 = window.prompt('escribe el segundo numero', 'escribe aqui');
    // var num3 = window.prompt('escribe el tercer numero', 'escribe aqui');
    // var num4 = window.prompt('escribe el cuarto numero', 'escribe aqui');
    // var num5 = window.prompt('escribe el quinto numero', 'escribe aqui');

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
    var res;

    var numSorted = [num1, num2, num3, num4, num5];
    numSorted = numSorted.sort().reverse();
    validacion === 5 ? console.log(`el numero mas grande es ${numSorted[0]}`) : console.log('NO SON NUMEROS');
    res = numSorted[0];
    return res;
}


//odd_or_even
function oddOrEven(num) {
    var res;
    // for (i = 0; i < 16; i++) {
    //     i % 2 === 0 ? console.log(`${i} es par`) : console.log(`${i} es impar`);
    // }
    num % 2 === 0 ? res = 'even' : res = 'odd';
    return res;
}


//FizzBuzz
function FizzBuzz(num) {
    var res = '';
    // for (i = 0; i < 101; i++) {
    //     i % 3 === 0 ? i % 5 === 0 ? console.log(`${i} FizzBuzz`) : console.log(`${i} Fizz`) : i % 5 === 0 ? console.log(`${i} Buzz`) : '';
    // }
    for (i = 1; i < num + 1; i++) {
        i % 3 === 0 ? i % 5 === 0 ? res += 'FizzBuzz' : res += 'Fizz' : i % 5 === 0 ? res += 'Buzz' : '';
    }
    console.log(res);
    return res;
}

//contruct_pattern
function constructPattern() {
    var arbol = [];
    for (i = 0; i < 6; i++) {
        arbol[i] = [];
        for (j = 0; j < i; j++) {
            arbol[i][j] = '*';
        }
    }
    console.log(arbol);
}

//under_1000
function under1000(num) {
    var sumaN = 0;
    var res;
    // for (i = 0; i < 1001; i++) {
    //     i % 15 === 0 ? sumaN += i : '';
    // }
    for (i = 1; i < num + 1; i++) {
        (i % 3 === 0) || (i % 5 === 0) ? sumaN += i : '';
    }
    console.log(`${sumaN}`);
    res = sumaN;
    return res;
}