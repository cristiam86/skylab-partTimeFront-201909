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








if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}