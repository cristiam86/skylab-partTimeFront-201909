function removeRepeatChars(string) {
    var res = []
    var arr = string.split('');

    var copyArr = arr.map(element => { return element });

    copyArr.forEach(element => {
        var included = false;
        for (i = 0; i < res.length; i++) {
            console.log("TCL: removeRepeatChars -> element", element)
            if (element === res[i]) {
                included = true;
            }
        }
        console.log("TCL: removeRepeatChars -> included", included)
        if (!included) {
            res.push(element);
        }
    });

    res = res.join('');
    console.log("TCL: removeRepeatChars -> res", res)
    return res;
}

function fibonacci(number) {
    return new Array(number).fill(1).reduce((arr, cur, i) => {
        arr.push((i <= 1) ? i : arr[i - 2] + arr[i - 1])
        console.log("TCL: fibonacci -> arr", arr)
        return arr;
    }, []);
}

function reverseString(string) {
    var res;
    var strArr = string.split('');
    res = strArr.reverse().join('');

    console.log("TCL: reverseString -> res", res)
    return res;
}

function mergeSort(arr){
    var copyArr = arr.map(element =>{return element});
    console.log("TCL: mergeSort -> copyArr", copyArr)

}