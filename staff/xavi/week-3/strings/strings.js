/* EJERCICIO 1 (isString) - crear una función que evalúe si un input es un string o no. */


// declaro la función isString y le paso un parámetro: input
function isString(input){
    // Le paso el parámetro input
    // Si input es: var input 
    var input = 4
    // El condicional le indico si la typología(input) es igual a string entonces hago un return de true
    if(typeof(input) === 'string'){
        // retorno true (es string)
        return(true + ' Esto es un string' + input)
    } else{
        // retorno false (es number)
        return(false + ' Esto es un número' + input)
    }
}
isString()


// EJERCIO 2 (isBlank) Crear una fnción que evalúe sin un string está vacío o no

function isBlank(input){

    var input = ''; // Está vacío.
    // condicional si input.length (recorre todo el array) es igual a 0. No encuentra nada es true.
    if(input.length === 0){
        return(true + ' Es un string vacío ' + input)
    } else{
        return(false + ' No es un string vacío ' + input)
    }
}

isBlank() 


// EJERICIO 3. stringToArray(input) Escriba una función de JavaScript para dividir una cadena y convertirla en una matriz de palabras


// El método split divide un objeto en un array
// Sin espacio lo divide por caracteres.
// Con espacio, utiliza el espacio entre palabras y por palabra hace la división. 
// el método se la inserto el return.
function stringToArray(input) {
    var input = ' Esto es una preuba'
    return(input.split(""));
}

stringToArray()





// EJERICIO 4 - truncate(input, number) 
// Escriba una función de JavaScript para eliminar el número especificado de caracteres de una cadena.

function truncate(input, number) {
    var input = ['1','2','3','4'];
    var number = 2
    return(input.slice(0,number));
}

truncate()


// SEGUNDA OPCION 
// Declaro una función y le paso dos parámetros.
// El parámetro input es la matriz que se calculará.
// El parámetro index es el número que utilizo para determinar que elemento quiero modificar con el metodo splice.

function truncate2(input, index){

    var input = [1,2,3,4,5,6];
    //console.log(input)

    // con indexOf encontramos la posición que queremos dentro de una matriz.
    // Esa posición la igualamos a la variable index.
    var index = input.indexOf(3);

    // mediante un condicional le digo que si index(posición del array) es mayor que 0,
    // haga el método splice sobre la posición index, y que solo modifique (eliminar) 1 desde esa posición
    if(index > 0){
        input.splice(index,1);
    }
    return(input)

}

truncate2()


// EJERICIO 5 - abbrevName(input) Write a JavaScript function to convert a string in abbreviated form.




// EJERCICIO - 7 Escriba una función para proteger una dirección de email


 // creo una función y le paso el parametro input donde almaceno el email.
 function protectEmail(input){
    // en el input almaceno una dirección de email en string
    var input = "xavier.pascual@gmail.com"
    
    // en la varaible email le digo que es igual a input, email, y que corte ese string en el signo @.
    var email = input.split("@");
  
    // declaro la variable puntos que me servirá para sustituir a los caracteres. 
    var points = '...';
    //  La parte uno la indico que guarde el primer carcter de email y a partir del segundo que no lo guarde. 
    var part1 = email[0].slice(0,1);
    //  la parte dos guarda el email.
    var part2 = email[1];
  
    // part1: escribo la primera letra y el resto lo elimino
    // .concateno los tres puntos
    // imprimo el @
    // imprimo el resto del emnail
    return(part1.concat(points,"@",part2));
}

protectEmail()

// EJERCICIO 8 - Escriba una función de JavaScript para ocultar las direcciones de correo electrónico para protegerlas de usuarios no autorizados.


function protectEmail(input){
    var input = "xavier.pascual@gmail.com"
    var email = input.split("@");
    var points = '...';
    var part1 = email[0].slice(0,1);
    var part2 = email[1];
    return(part1.concat(points,"@",part2));
}

protectEmail()



/// EJERCICIO 9 - Escriba una función de JavaScript para concatenar una cadena dada n veces (el valor predeterminado es 1).

function repeat(input,n){
  
    var input = 4;
    var n = 18;
    return(input.repeat(n));
}

repeat()


// EJERCICIO 10 - Escriba una función de JavaScript para insertar una cadena dentro de una cadena en una posición particular (el valor predeterminado es 1).


function insertString(input, insert, position){

    var input = ['john', 'george', 'paul']
    var insert = ['ringo']
    
    var part1 = input.slice(0,position);
    var part2 = input.slice(position,input.length);
    var part3 = input
    return(part1.concat(part2,insert,part3));
}

insertString()


// EJERCICIO 11 - Convertir una cadena de texto a camel case.

