var errors = 0;

var results = removeRepeatChars('aabcbcb');
if (results !== 'abc') {
    errors += 1;
    console.error("1. removeRepeatChars not abc");
}

var results = removeRepeatChars('blablacar');
if (results !== 'blacr') {
    errors += 1;
    console.error("2. removeRepeatChars not blacr");
}



var results = fibonacci(13);


var results = reverseString('hola')
if (results !== 'aloh') {
    errors += 1;
    console.error("1. reverseString not aloh");
}

var results = mergeSort([300, 14, 32, 33, 5, 1, 234]);
if (results !== [1, 5, 14, 32, 33, 234, 300]) {
    errors += 1;
    console.error("1. mergeSort not correct");
}


if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}