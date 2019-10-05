// Lo más báscio es declarar variables
// es dodne se guaarda un valor
var variableName = 0


// en mayusculas, se entiende como una constante. no se debe cambiar. 
var TIME_LOOP = 5;

// palabra reservada: no puedo llamar a las variables: var if for.. etc. 

// valores primitivos:

var number = 5;
typeof number // me salta un string que me identifica que tipo de variable es.
// NUmber

var texto = 'nombre'
typeof texto // string

var active = true
typeof active // valor: true / typo: boolean.

// Array.
var array = [1,2,3,4,5]
typeof array // objeto.

var cumple = new Date()
typeof cumple // object.

// variable con variables dentro
var objeto = {
    saludo:'hola',
    edad: 38,
}


// operaciones.

var suma = 3 + "30"
// result 330
var resta = 3 - "30"
//  -27


// métodos
var a4 = "xavi.pascualñ"
a4.indexOf(".") // marca la posición del punto.

.concat

//split _ dividir el string en dos parte a partir del caracter que le digas.
a4.split(".")

//.replace // modifica el string.
a4.replace("xavier","javier") // sustitye xavier por javier

// tolowercase / touppercase
// sirve para comparar string. convierte todo a mayusculas y asi no hay diferencias.

//split - eliminar 
//join - insertar
// trim - corta los espacios del principio y del final.
// slice(0,3) - eliminar un trozo del string _ ap partir la posicion 3 la excluye.
// slice(-4) desde el final hacia adelante

var minumero = 1
minumero += 3
// 4
minumero++ // evaluas el valor y le sumas uno.

var n = 4
var m = 5

n == m // false
n === m // evaluan valor y tipo
n !== m // true
n >= m // false


var t = true;
var f = false;

t && f // false
t || f // true - como llame a true es true

!t // false
!f // true



// operadores ternarios


var rest = t ? 'string true' : 'string false'
// imp string true

var rest = f ? 'string true' : 'string false'
// imp string false



var b = 3 
b(n) // transformo el numero en string
// al contrario no se puede.

var decimal = 4.44567
typeof decimal // number

Number(decimal.toFixed(2))
// 4.44 - sigue siendo en numero / sino le pongo el number me lo pasa a string

// parseInt
// parseFloat
Boolean('0') //true
Boolean (0) // false el resto de numero es true


/****************************************** CONTROL DE FLUJOS ******************************/


// condicionales. 
if(condicion){
    //bloque de codigo
}
 

if(condicion){
    // si es true
} else{
    // si es no es true = false
}


var caso1 = 4
if (caso1 < 4 ){
 console.log('menor')
} else if(number === 4){
    console.log('igual')
} else {
    console.log('mayor')
}

//ternario

var result = number < 4 ? "menor" : (numer === 4  ? 'igual' : 'mayor')



switch(number){
    case 4: // puede haber una operación.
        console.log('igual')
        break;
    case 5: 
        console.log('mayor')
        break
    case 3:
        console.log.log('menor')
} 



// for 
// inicialización
// condicion.
// modificación
for(var i =0; i < 5; i++){
    console.log(i)
}

for(var i =0; i >= 5; i--){
    console.log(i)
}


var w = 0
while(i = 5){
    //console.log(w) infinito
}


var objectos = {
    prop1: 'user',
    prop2: 'name',
    prop3: 'mail'

}


for (var p in objeto){
    console.log("la proo" +p+"es" +objectos[p])
}


// sacar los impares del array wer
var wer = [1,2,3,4,5,6,7,8,9]
for(var t = 0; t < wer.length; t += 1){
    var element = wer[t]
    if(element % 2 === 0){
        console.log("es par:", element)
    }
}


