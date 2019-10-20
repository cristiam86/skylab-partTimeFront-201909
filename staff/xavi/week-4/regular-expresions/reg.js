

// EXPRESIONES REGULARES
// Def: secuencia de caracteres que forma un patrón de búsqueda.

// Sintaxis:
//   /patron/

// /patron/ g - global: le indicamos que siga buscando una vez ha encontrado la primera coincidencia.
// /patron/ i - insensitive - Ignora en la búsqueda, mayusculas y minusculas.
// /xav..r/ . - puntos - sustituyen a cualquier caracter.
// \ - barra invertida - para buscar un caracter especial. Ejemplo: .() {}
// [aeiou] Listas - Busca todas las vocales del texto
// [a-z] Rangos - busca todas las letras en minúscula
// cadena completa () - (12)
// cadena diferentes elementos (texto|texto), evalúa si hay los dos en el texto.

// delimitadores
// ^ - No puede haber nada delante.
// $ - No puede haber nada después.
 

var varText = document.getElementById('texto').textContent


// forma 1 para realizarlo
var regEx = /esto/gi;
// EvaluacióN:
console.log(regEx.test(varText))


/*************************************************************************** */


// forma 2 para realizarlo.
var regEx2 = new RegExp('Esto', 'gi')
// Evaluación:
console.log(regEx2.test(varText))


/*************************************************************************** */


// Evalúo caracteres especiales:
// Debo poner una barra invertida después de cara caracter especial. 
var regExp3 = /\(ahora\)/gi;
// Evaluación:
console.log('Evalúo barra inveritda ' + regExp3.test(varText))


/*************************************************************************** */


// Evaluar una imagen:
var reg4 = /\.png/gi;
console.log('Evalúo la imagen: ' + reg4.test(varText));


/*************************************************************************** */


var reg5 = /[a-z]/g;
console.log('Busca todas las minúsculas ' + reg5.test(varText))
// En este caso devuelve un true. 


/*************************************************************************** */


var reg6 = /(38 años)/g
console.log('evalúo la edad: ' + reg6.test(varText))
// Me devuelve true.


/*************************************************************************** */


var reg7 = /(texto|para|pongo)/
console.log('evalúo diferentes elementos del texto ' + reg7.test(varText))
// Los evalúa todos. si se cuple solo uno, devuelve true





/*************************************************************************** */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);




