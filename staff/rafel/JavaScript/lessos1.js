//exercici1

function largerInteger() {
var num1 = prompt();
var num2 = prompt();

var numInt1 = parseInt(num1, 10)
var numInt2 = parseInt(num2, 10)

    if (numInt1 > numInt2) {
        alert(numInt1 + " is larger than " + numInt2)
        } else {
            if (numInt1 === numInt2) {
                alert(numInt1 + " is equal " + numInt2)
            } else { alert(numInt2 + " is larger than " + numInt1) }
    };
}

function signProduct() {
    var num1 = prompt();
    var num2 = prompt();
    var num3 = prompt();

    var numInt1 = parseInt(num1, 10)
    var numInt2 = parseInt(num2, 10)
    var numInt3 = parseInt(num3, 10)

    var result = (numInt1*numInt2*numInt3) >= 0 ? "positive" : "negative"
    alert(result);
    return result;
}

function sortNumbers() {
    var num1 = prompt();
    var num2 = prompt();
    var num3 = prompt();

    var numInt1 = parseInt(num1, 10)
    var numInt2 = parseInt(num2, 10)
    var numInt3 = parseInt(num3, 10)

    var arr = [numInt1, numInt2, numInt3]
    var order = arr.sort();
    alert(order);
    return order;
}

function largestNumber() {
    var num1 = prompt();
    var num2 = prompt();
    var num3 = prompt();
    var num4 = prompt();
    var num5 = prompt();

    var numInt1 = parseInt(num1, 10)
    var numInt2 = parseInt(num2, 10)
    var numInt3 = parseInt(num3, 10)
    var numInt4 = parseInt(num4, 10)
    var numInt5 = parseInt(num5, 10)


    var arr = [numInt1, numInt2, numInt3, numInt4, numInt5]
    var order = arr.sort();
    var largest = order[order.length-1];
    alert(largest)
}

function oddOrEven() {
    for (var i = 0; i <= 15; i += 1){
        if (i%2 === 0){
            alert(i + " is even")
        } else {
            alert(i + " is odd")
        }
    }
}

function fizzBuzz() {
    for (var i = 1; i <= 100; i += 1){
        if (i%15 === 0){
            alert(i + " is FizzBuzz")
        } else if (i%5 === 0){
            alert(i + " is Buzz")
        } else if (i%3 === 0){
            alert(i + " is Fizz")
        }
    }
}

function constructPattern() {
    for (var i =1; i <= 5; i += 1){
        document.write(' * '.repeat(i)+"<br>")
    }
}

function under1000() {
    var arrSum = [];
    for (var i = 1; i <= 1000; i += 1){
        if (i%3 === 0 || i%5 === 0){
            (arrSum.push(i))
        }
    }
    var result = 0
    for (var j = 1; j < arrSum.length; j += 1){
        result = result + j
    }

    alert(result);
}



