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


// EJERICIO 3. Escriba una función de JavaScript para dividir una cadena y convertirla en una matriz de palabras