//// EJERCICIO 1. capitalCase
// función de orden superior que tome la matriz de meses y cree una nueva matriz que contenga los mismos meses pero con la primera letra en mayúscula.
function capitalCase(str) {

    str = str.split(' ');
  
    for (var i = 0; i < str.length; i++) {
      
      str[i] = str[i].toLowerCase().split('');

      str[i][0] = str[i][0].toUpperCase();

      str[i] = str[i].join('');
    }
  
    return str.join(' ');
  }
  
  capitalCase('january, february, march, aril, may, june, july, august, september, october, november, december');


/********************************************************************************************************* */

// EJERCICIO 2. SOMEMONTHS
// función de orden superior que tome la matriz de meses y cree una nueva matriz que contenga solo los meses que comienzan con j.

function someonths(list, letter){


    var resultado = [];

    for(var x = 0; x < list.length; x++){
        if(list[x].indexOf(letter) == 0 ){
            resultado.push(list[x])
        }
    }

    return resultado;

}

someonths(['january', 'february', 'march', 'aril', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 'j')