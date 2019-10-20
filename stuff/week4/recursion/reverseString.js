/*function reverseString(stringToReverse) {
  // 0. PARAR CUANDO NO HAYA MÁS CARACTERES
  if (stringToReverse.length === 1) {
    return stringToReverse;
  }
  // 1. pasar el string a un array
  var strToRevArr = stringToReverse.split('');
  
  // 2. Sacar el último caracter
  var lastChar = strToRevArr.pop(); 
  console.log(strToRevArr)
  
  // 3. Colocar el último caracter al inicio e invertir el resto 
  var result = lastChar + reverseString(strToRevArr.join(''));
  console.log(result);
  return result;
}*/

function revStr(strToRev) {
  return strToRev 
    ? strToRev.substr(-1) + revStr(strToRev.substr(0,strToRev.length -1))
    : '';
}

var reversed = revStr('abcdefg');

if (reversed !== 'gfedcba') {
  console.log("ERROR reversing string");
} else {
  console.log("Bien, no era tan difícil");
}