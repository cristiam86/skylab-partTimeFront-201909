function suma(a,b){
    return a+b
  }
  function multiply(a,b){
    return a*b
  }
  
  var resta = function(a,b){
    return a-b;
  }
  
  resta(8,5)
  
  // función suma está declarada arriba
  function calculadora(operador, paramA, paramB){
    return operador(paramA, paramB)
  }
  
  calculadora(suma, 4,6) // 10
  // referencia a la función multiply
  calculadora(multiply, 56, 2) // 
  
  
  // la función hace que pierda la referencia uy se redifina con otro valor
  
  
  var myVar = "dfghj";
  
  function testingScope(){
    var myVar = "pppppo"
    return myVar
  }
  
  testingScope()
  
  
  
  function padre(){
    var padre = "jesus";
    
    return function hijo(){
      var hijo = "junior"
      return "me llamo" + hijo + 'y mi padre se llama ' + padre
    }
  }
  
  padre()()
  
  
  
  var randomNumber = Math.random() * 100
  
  var rn = randomNumber
  
  
  Math.round(rn)
  Math.floor(rn)
  Math.ceil(56.165432)
  
  
  
  // 
  
  console.log('********************Fibonacci*************')
  
  
  function fibonacci(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  
  
  console.log('high order functions javascript')
  // es una función que recibe otra función
  
  
  var rolling = ['Mick', 'Keith', 'Romnie', 'Charlie'];
  rolling
  
  // hay que pasarle una función
  // Recorre el array y llama a la función
  // Hace la misma función que un biucle for
  rolling.forEach(function(rolling){
      console.log(rolling)
  })
  
  
  
  rolling.map(function(rolling){
    
  })
  
  
  var numeros = [12,3,4].map(function(elem){
    return elem * 2
  })
  
  numeros
  
  
  
  console.log("****************** filter *************")
  
  var nums = [1,2,3,4,5,6,7,8,9,10];
  
  nums.filter(function(numE){
    return numE  % 2 === 0;
    nums() // solo pares
  })
  
  var nums2 = [1,2,3,4,5,6,7,8,9,10];
  
  nums2.some(function(element2){
    return element2 === '5' // false 
  })
  
  
  nums2.every(function(numds){
      return numds < 10 // false
  })
  
  // Mirar every
  
  
  
  // reduce
  var numerosOK = [3,4,5,6,2]
  // suma todos los elementos del array
  numerosOK.reduce(function(acc, ele){
    return acc + ele
  }, 0) // le indicas desde donde quieres que empiece 
  
  
  
  var cliente = {
    name: 'xavi',
    puntos: 5
  }
  
  var compra = [
    {name: 'leche', puntos: 3},
    {name: 'pan', puntos: 1000},
    {name: 'agua', puntos: 2},
  ]
  
  
  var productos = compra.reduce(function(accu, prod){
    return accu + prod.puntos;
  }, 0)
  
  