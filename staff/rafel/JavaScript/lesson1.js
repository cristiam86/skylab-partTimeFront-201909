//exercici1

function largerInteger(num1, num2) {
    if (num1 > num2) {
        return num1
        } else {return num2}
    }


function signProduct(num1, num2, num3) {

    var result = (num1*num2*num3) >= 0 ? '+' : '-'
    return result;

}

function sortNumbers(num1, num2, num3) {

    var arr = [num1, num2, num3]
    var order = arr.sort((a, b) => b-a);
    return order;
}

function largestNumber(num1, num2, num3, num4, num5) {

    var arr = [num1, num2, num3, num4, num5]
    var order = arr.sort();
    var largest = order[order.length-1];
    return largest
}

function oddOrEven(num1) {
        if (num1%2 === 0){
            return "even"
        } else {
            return "odd"
        }
    }


function FizzBuzz(num1) {
    var result = []
    for (var i = 1; i <= num1; i += 1) {
        if (i%3 === 0){
            result = result + 'Fizz'
        } else if (i%5 === 0){
            result = result +  'Buzz'
        } else if (i%15 === 0){
            result = result +  'FizzBuzz'
        }
    }

    return result
}

function constructPattern() {
    for (var i =1; i <= 5; i += 1){
        document.write(' * '.repeat(i)+"<br>")
    }
}


function under1000(number) {
    var arrSum = [];
    for (var i = 1; i <= number; i += 1){
        if (i%3 === 0 || i%5 === 0){
            (arrSum.push(i))
        }
    }
    var result = 0
    for (var j = 0; j < arrSum.length; j += 1){
        result = result + arrSum[j]
    }

    return result;
}





