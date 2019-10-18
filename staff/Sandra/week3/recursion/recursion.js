//removeRepeatChars
var arr='aabcbcb';
function removeRepeatChars(arr){
    if (arr.length <= 1) return arr;
    if (arr.charAt(0) == arr.charAt(1)) return removeRepeatChars(arr.substring(1));
    else return arr.charAt(0)+removeRepeatChars(arr.substring(1));  
}


console.log("resultado: " + removeRepeatChars(arr));

//fibonacci
function fibonacci(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//digitCount

//reverseString

//binarySearch

//mergeSort