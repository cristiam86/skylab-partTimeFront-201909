

function removeRepeatChars(string) {
    var results = []
    var arr = string.split('');

    var arr2 = arr.map(letra => { return letra });
    console.log( arr2);
    arr2.forEach(letra => {
        var included = false;
        for (i = 0; i < results.length; i++) {
            if (letra === results[i]) {
                included = true;
            }
        }
        if (!included) {
            results.push(letra);
        }
    });

    results = results.join('');
    console.log( results);
    return results;
}

function fibonacci(n){
    var results = [];
    if(n === 1) return 1;
    if(n === 2) return 1;

    results = fibonacci(n - 1) + fibonacci (n - 2);
    return results;

}

function reverseString(string) {
    var results;
    var strArr = string.split('');
    results = strArr.reverse().join('');

    console.log(results)
    return results;
}

function mergeSort(arr){
    var arr2 = arr.map(element =>{return element});
    arr2.sort(function(a, b) {
        return a - b;
     });

    console.log(arr2);
    return arr2;

}