var arr = new Array('uno', 'dos')
// Así si
var arr = ('uno', 'dos')
// acceder
arr[0] // primer elemento.


arr.join('/') // los une todos los elementos con ese caracter

.length // tamaño

arr.concat(['tres']) // concatenamos y añadimos elemento.
// me devuelve dos array . concatena dos arrays.
// mejor método
var allnumeros = ['tres'].concat(arr)


arr.indexOf("uno") // saber la posición del elemento

arr.push("cuatro") // inserta este elemento y muta al array original.
arr.pop() // saca el último elemento.
arr.unshift("cinco") // lo inserta el inicio
arr.shift() // saca el primero 
arr.sort() // lo ordena alfabéticamente 
arr.reverse() // lo reveierte
arr.slice(1,4) // me da posición inicial y posición final( pedir antes el .length y sabes cuantas posiciones tienes).
arr.splice(5,6) // <sacar o introducir elementos. // eliminamos las posiciones indicadas.
arr.splice(2,0,5,6) // le indica que introduzcq 5 y 6. debido al 0 que se indica que no elimine nada.




var num = [21,22,32,24,5,]
num.sort()
console.log(num)


num.sort(function(a,b){
    return a < b ? -1 : 1; // trernario
}) // funcion que ordena 


// fabricar tablero ajedrez

function mifun (n){
    var board = [];
    for(var i=0; i<n; i++){
        var row = [];
        for(var j=0; j<n; j++){
            row.push(j);
        }
        board.push(row)
    }
    return board
}

// array multidimensional 
var mult = [2, 3, [2,3 [3,5]], 4, 5]



// OBJETOS


// Objeto vacío
// En consola tiene metodo proto
var obj = {

}
obj.name = 'xavi';
// inserto el atributo name con el valor 'xavi dentro del objeto.


var obj = {
    name: 'xavi',
    age: '28',
    // podemos añadior metodos
    sayHello: function(){
        return "hola"+ this.name // el this hace referncia a quien está llamando en esa función = Xavi
    }
}

// no es lo mas común excepto para las funciones constructoras. 
var obj = new Object();


//  función constructora empieza con mayuscuyla
function Hotel (name, room, breakfast){
    this.name = name;
    this.room = roomsCount;
    this.breakfast = desayuno;

    this.checkout = function(){
        return this.roomsCount - this.breakfast
    }
}


var hotelSky = new Hotel ("skylab", 45, 27)

console.log(hotelSky)


hotelSky[roomProperty] // me imprime 45



var book = {
    name: 'titulo',
    author: {
        name: "nombre",
        surname: 'Apellido'
    },
    price: 10,
    
}