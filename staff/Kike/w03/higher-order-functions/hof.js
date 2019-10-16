function capitalCase(arr) {
    var res = [];
    var arrayClone;
    arrayClone = arr.map(function (i) {
        return i;
    });
    arrayClone.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        res.push(element);
    });
    console.log("TCL: capitalCase -> res", res)
    return res;
}

function someMonths(arr) {
    var res;
    var copyArr = arr.map(i => { return i; });

    res = copyArr.filter(element => { return element.charAt(0) === ('j' || 'J') });


    console.log("TCL: someMonths -> res", res)
    return res;
}

function countVowels(lorem) {
    var loremArr = lorem.split('');
    var count = 0;

    loremArr.reduce(function (anterior, actual, i) {
        if (actual === 'a' || actual === 'A' || actual === 'e' || actual === 'E' || actual === 'i' || actual === 'I' || actual === 'o' || actual === 'O' || actual === 'u' || actual === 'U') {
            count++;
        }
    });
    res = count;

    console.log("TCL: countVowels -> res", res)
    return res;
}


function greatThanFiveLetters(arr) {
    var res;
    var limit = 5;

    res = arr.every(element => { return element.length > limit });

    console.log("TCL: greatThanFiveLetters -> res", res)
    return res;
}
