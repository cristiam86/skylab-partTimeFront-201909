  
var errors = 0;

var results = removeRepeatChars('aabcbcb');
if (results !== 'abc') {
    errors += 1;
    console.error("1 la cosa tiene que quedar en abc");
}

var results = removeRepeatChars('lololotete');
if (results !== 'lote') {
    errors += 1;
    console.error("2. la cosa tiene que quedar en lote");
}



var results = fibonacci(8);


var results = reverseString('roma')
if (results !== 'amor') {
    errors += 1;
    console.error("El resultado es todo amor");
}

var results = mergeSort([3,1,7,5,4]);
if (results !== [1,3,4,5,7]) {
    errors += 1;
    console.error(" El resultado debe ser 1,3,4,5,7");
}


if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}