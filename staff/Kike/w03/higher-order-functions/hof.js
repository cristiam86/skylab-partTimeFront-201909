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
    var res = [];

    arr.filter(element => {
        element.charAt(0) === ('j' || 'J')
    });


    console.log("TCL: capitalCase -> res", res)
    return res;
}