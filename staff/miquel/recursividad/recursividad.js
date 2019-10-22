/*function removeDuplicates(stringWithDuplicates) {
    var charsNoDuplicates = [];

    for(var i = 0; i < stringWithDuplicates.length; i++) {
        var char = stringWithDuplicates[i];
        //if(charsNoDuplicates.indexOf(char) < 0) { // tenemos el character?
        if(!charsNoDuplicates.includes(char)) {
            charsNoDuplicates.push(char);
        }
    }

    return charsNoDuplicates.join('');
}*/

/*function removeDuplicates(stringWithDuplicates) {
    var charSet = new Set(stringWithDuplicates); // Set agrupa caracteres por lo tanto quita duplicados
    console.log(charSet[0]);
    var arrWithoutDuplicates = Array.from(charSet);
    console.log(arrWithoutDuplicates[0]);
}*/

/*function removeDuplicates(stringWithDuplicates) {
    var charsNoDuplicates = [];

    for(var i = 0; i < stringWithDuplicates.length; i++) {
        var char = stringWithDuplicates[i];
        //if(!charsNoDuplicates[char]) { // existe la propiedad del objecto con esa key?
            // para esa propiedad del objecto con esa key
            // un objeto sólo puede tener keys únicas por lo que no necesito controlar si ya existe
            charsNoDuplicates[char] = true;
        //}
    }

    // formato array de todas las keys
    return Object.keys(charsNoDuplicates).join('');
}*/

/*function removeDuplicates(stringWithDuplicates, charsNoDuplicates) {
    console.log(stringWithDuplicates);
    
    if(charsNoDuplicates === '') { // no tenemos más strings para procesar
        // formato array de todas las keys
        return Object.keys(charsNoDuplicates).join('');
    }

    // 1. sacar char del string
    var char = stringWithDuplicates.substr(0,1);
    charsNoDuplicates[char] = true;
    
    // 2. procesar el resto
    // pasarle la posición 1 del string
    return removeDuplicates(stringWithDuplicates.substr(1), charsNoDuplicates);
}

var stringNoDuplicates = removeDuplicates("abcarbbdee", {});

if(stringNoDuplicates !== 'abcrde') {
    console.error("1. Error removing duplicates");
}*/

function reverseString(stringToReverse) {
    console.log(stringToReverse)

    if(stringToReverse.length === 1) return stringToReverse;

    // 1. pasar string a array
    var strToRevArr = stringToReverse.split('');

    // 2. sacar el último char
    // pop quite el último char y actualiza el array
    var lastChar = strToRevArr.pop();

    // 3. colocar el último caracter al final e invertir el resto
    var result = lastChar + reverseString(strToRevArr.join(''));
    console.log(result);
    return result;
}

var reversed = reverseString('abcdefg');

if(reversed !== 'gfedcba') {
    console.error("2. Error reversing string");
    
}

function binarySearch(arr, searching, attempts) {
    // sacamos el elem del punto medio del array
    var midElem = Math.floor(arr.length / 2);
    
    // si es igual -> elem encontrado
    //return attempts;
    // si no está, al array no le quedan posiciones 
    //return -1;

    // si searching < arr[midElem] lo que buscamos está a la izq
    //binarySearch(arr.slice(0, midElem, attempts + 1));

    // si searching > arr[midElem] lo que buscamos está a la derecha
}
var result = binarySearch([0,1,2,3,4,5,6,7,8,9], 8);

if(result < 0) {
    console.log("Elemento no estaba en el array");
} else {
    console.log("Encontrado en el intento: ", result);   
}