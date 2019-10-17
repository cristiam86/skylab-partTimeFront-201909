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


// La función paso dos parámetros que son los que utilizaré para calcular los elemtos y la letra que quiero utilizar como filtro.
// List: listado de meses.
// letter: letra.
function someonths(list, letter){

    // creo una variable que será donde iré almacenando los resultados.
    var resultado = [];


    for(var x = 0; x < list.length; x++){

        // creo una condición en la cada elemento del listado con su letra es igual a 0.
        // entonces inserto es elemento en resultado.
        if(list[x].indexOf(letter) == 0 ){
            resultado.push(list[x])
        }
    }

    return resultado;

}

// cuando llamo a la función le paso los valores desde fuera: tanto el listado de meses, com la letra que quiero filtrar.
someonths(['january', 'february', 'march', 'aril', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 'j')



/************************************************************************************************************* */

// EJERCICIO 3 
// Escriba una función de orden superior que cuente todas las vocales de un texto.

// creo una función en la que paso un parámetro que es donde se almacena el texto
function countVowels(text) {

    // creo una variable igual a las 5 vocales.
    var vowels = 'aeiou';
    
    // creo la variable contador que esi gual a = 0
    var count = 0;
  

    for (var x = 0; x < text.length; x++) {
      
        
        if (vowels.indexOf(text[x]) !== -1) {
            count++
        }
    }
    return count;
}

countVowels(('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.').toLowerCase())

// Resultado: 205