//removeRepeatChars
function removeRepeatChars(arrIni,arrResult){
    if (arrIni.length <= 1) return Object.keys(arrResult).join('');
    var character = arrIni.substring(0,1);
    arrResult[character] = true;
    return removeRepeatChars(arrIni.substr(1),arrResult);    
}

console.log("resultado: " + removeRepeatChars('aabcbcb',{}));

  var result = removeRepeatChars('abcarbbdee');
  if (result !== 'abcrde') {
      console.log("Error removing duplicates");
  }else{
    console.log("OK");
  }

//fibonacci
function fibonacci(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

//digitCount
function digitCount(stringNumbers,arrResult){
  if (stringNumbers.length <=1) return Object.keys(arrResult).join('');
  var numberRepeat = stringNumbers.substring(0,1);
  arrResult[numberRepeat] = arrResult[numberRepeat] + 1;
  return  digitCount(stringNumbers.substring(1),arrResult);
}


//reverseString
function reverseString(stringToReverse) {
    //0. Parar cuando no haya más caracteres
    if (stringToReverse.length === 1) {
        return stringToReverse;
    }

    //1. Pasar el string a un array
    var strToRevArr = stringToReverse.split('');

    //2. Sacar el último caracter;
    var lastChar = strToRevArr.pop();

    //3. Colocar el último caracter al inicio e invertir el resto
    return lastChar + reverseString(strToRevArr.join(''));
}

var reversed = reverseString('abcdefg');

if (reversed != 'gfedcba'){
    console.log("ERROR");
} else {
    console.log("OK");
}

//binarySearch
function binarySearch(arr, searching, attempts){

    //1. sacamos el elemento que esta en el punto medio del array
    var midElement = Math.floor(arr.length/2);

    //STOP
    //STOP 1 Si lo encontramos, devolvemos attempt.
    //STOP 2 Si no lo lo encontramos, devolvemos -1.
    
    //2.1 Si searching < arr[midElement] => binarySearch(arr.Slice(0, midElement), searching, attemps + 1)
    //2.2 Si searching > arr[midElement] => binarySearch(arr.slice(midElement), searching, attemps + 1)

}

var result = binarySearch([1,2,3,4,5,6,7,8,9], 8, 0);
//mergeSort