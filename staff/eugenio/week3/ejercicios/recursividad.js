/*function hasElement(arr, elem){
    return arr.includes(elem);
}
*/

/* //REMOVER LETRAS DUPLICADAS CON FOR'S E IF'S
function removeDuplicates(ststringWithDuplicatesring){
    var  charactersNoDuplicated = [];
    for(var i = 0; i < stringWithDuplicates.length; i++){
        var character = stringWithDuplicates[i];
        if(!hasElement(charactersNoDuplicated, character){
            charactersNoDuplicated.push(character);
        }
    }
    return charactersNoDuplicated.join('');
}*/

/*CON LOS CONJUNTOS - SET PASAMOS UN STRING A SET Y DE SET A ARRAY
function removeDuplicates (stringWithDplicates){
    var charSet = new Set(stringWithDplicates);
    var arrWithouDuplicates = Array.from(charSet);
    console.log(arrWithouDuplicates);
}*/

function removeDuplicates (stringWithDuplicates){
    if(stringWithDuplicates === ''){
        return Object.keys(characteresNoDuplicated).join('');
    }
    // 1. sacar un caracter del string
    var character = stringWithDuplicates.substr(0,1);
    charactersNoDuplicated[character] = true;

    // 2. procesar el resto del string
     return removeDuplicates(stringWithDuplicates.substr(1), charactersNoDuplicated);


}
// TEST PARA REMOVEDUPLICATES
var stringNoDuplicated = removeDuplicates("abcarbbdee");
if(stringNoDuplicated !== "abcrde"){
    console.error("ERROR removint duplicates");
}

//REVERSE STRING
function reverseString(str){
    if(str === "")return "vacío";
    return str.substr(1) + str.charAt(0);
}

function reverseString2(stringToReverse){
    // 0. PARAR CUANDO NO HAYA MÁS CARACTERES
    if(stringToReverse.length === 1){
        return stringToReverse;
    }

    // 1. pasar el string a un array
    var strToRevArr = stringToReverse.split('');

    // 2. Sacar el último caracter
    var lastChar = strToRevArr.pop();

    // 3. Colocar el últimoc aracter al inicio e invertir el resto
    return lastChar + reverseString(strToRevArr.join(''));
} 

//TEST REVERSE STRING
var reversed = reverseString("abcdefg");
if(reserved !== "gfedcba"){
    console.log("Error reversing string");
}else{
    console.log("Bien, no era tan dificil");
}
console.log(reverseString2("hello"));
console.log(removeRepeatChars("hola"));

function binarySearch(arr, searching, attempts){
    // 1. sacamos el elemento que está en el punto medio del array
    var midElement = Math.floor(arr.length / 2);

    // STOP
    // STOP.1 Si lo encontramos, devolvemos attemp
    // STOP.2 Si no lo enconramos, devolvemos -1

    // 2.1 Si searching < arr[midElement] ==> return binarySearch(arr.slice(0, midElement), searching, attemps+1)
    // 2.2 Si searching > arr[midElement] ==> return binarySearch(arr.slice(midElement), searching, attemps+1)

}

var result = binarySearch([0,1,2,3,4,5,6,7,8,9], 8, 0);
if(result < 0){
    console.log("El elemento no estaba en la array");
}else{
    console.log("Encontrado en el intento: ",result); // debería dar 2 intentos
}





