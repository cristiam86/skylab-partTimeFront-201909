var errors = 0;

var testArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var arr = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

var results = capitalCase(arr);
testArr = testArr.join();
results = results.join();
if (results !== testArr) {
    errors += 1;
    console.error("1. capitalCase not correct");
}

var arr = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

var results = someMonths(arr);


var results = countVowels('frase');
if (results !== 2) {
    errors += 1;
    console.error("1. countVowels not 2");
}

var results = countVowels('mUrcielagO');
if (results !== 5) {
    errors += 1;
    console.error("1. countVowels not 5");
}

var results = greatThanFiveLetters(['grandioso','catarata','Nabucodonosor']);
if (!results) {
    errors += 1;
    console.error("1. greatThanFiveLetters should be true");
}

var results = greatThanFiveLetters(['hola','es','guay']);
if (results) {
    errors += 1;
    console.error("2. greatThanFiveLetters should be false");
}


if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}