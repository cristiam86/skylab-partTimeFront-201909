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
