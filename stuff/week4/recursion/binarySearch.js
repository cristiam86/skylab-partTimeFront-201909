function binarySearch(arr, searching, attempts) {

  // 1. sacamos el elemento que está en el punto medio del array
  var midElement = Math.floor(arr.length / 2);
  
  // STOP
  // STOP.1 Si lo encontramos, devolvemos attempt 
  // STOP.2 Si no lo encontramos, devolvemos -1
  
  // 2.1 Si searching < arr[midElement] ==> return binarySearch(arr.slice(0, midElement), searching, attempts + 1)
  // 2.2 Si searching > arr[midElement] ==> binarySearch(arr.slice(midElement), searching, attempts + 1)
  
}

var result = binarySearch([0,1,2,3,4,5,6,7,8,9], 8, 0);
if (result < 0) {
  console.log("El elemento no estaba en el array")
} else {
  console.log("Encontrado en el intento: ",result) //debería dar 2 intentos
}
