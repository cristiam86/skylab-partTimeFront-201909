// 1. EJERCICIO PARA EVALUAR MAYOR O MENOR
/*
var valor1 = prompt("Introduce el primer valor", "0");
var valor2 = prompt("Introduce el primer valor", "0");
*/
function largerInteger(num1, num2){
  //parseamos con parseInt las variables que vienen por argumento ya que nos vienen como String
  if(parseInt(num1) > parseInt(num2)){
    alert(num1+" es mayor que "+num2);
  }else if(parseInt(var1) < parseInt(num2)){
    alert(num1+" es menor que "+num2);
  }else{
    alert("Los valores son iguales");
  }
}

//largerInteger(valor1, valor2);

// 2. EJERCICIO PARA EVALUAR SI EL VALOR PASADO ES NEGATIVO

/*
var valor3 = prompt("Introduce el primer valor", "0");
var valor4 = prompt("Introduce el primer valor", "0");
var valor5 = prompt("Introduce el primer valor", "0");
*/

function signProduct(num3, num4, num5){
  var resultado = num3*num4*num5;
  if(resultado < 0){
    alert(resultado+' es negativo');
  }else{
    alert(resultado+' es positivo');
  }
}
//signProduct(valor3, valor4, valor5);

// 3. EJERCICIO PARA ORDENAR VALORES

/*
var valor6 = prompt("Introduce el primer valor", "0");
var valor7 = prompt("Introduce el segundo valor", "0");
var valor8 = prompt("Introduce el tercer valor", "0");
*/

function sortNumbers(a, b, c){
//probar con 10 12 9
  if(a<b && b<c){
    alert(a+", "+b+", "+c);
  }else if(a>b && b>c && c>a){
    alert(c+", "+b+", "+a);
  }else if(a<b && b>c && a<c){
    alert(a+", "+c+", "+b);
  }else if(a<b && b>c && a>c){
    alert(c+", "+a+", "+b);
  }else if(a>b && b<c){
    alert(a+", "+c+", "+b);
  }else if(a>b && b<c && c>a){
    alert("hola");
  }else if(a===b && b===c && a===c){
    alert('Introduce números distintos, no pongas los mismos números!!');
  }else{
    alert('vuelve a revisar el código!!');
  }
  
}

//sortNumbers(valor6, valor7, valor8);

// 4. MUESTRA EL MAYOR NÚMERO DE TODOS

/*
var valor9 = prompt("Introduce el primer valor", "0");
var valor10 = prompt("Introduce el segundo valor", "0");
var valor11 = prompt("Introduce el tercer valor", "0");
var valor12 = prompt("Introduce el cuarto valor", "0");
var valor13 = prompt("Introduce el quinto valor", "0");
*/
function largestNumber(num1, num2, num3, num4, num5){

  if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    alert("El número más alto es "+num1);
  }else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    alert("El número más alto es "+num2);
  }else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    alert("El número más alto es "+num3);
  }else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    alert("El número más alto es "+num4);
  }else if(num5>num1 && num5>num2 && num5>num3 && num5>num4){
    alert("El número más alto es "+num5);
  }else if(num1===num2 && num1===num2 && num1===num3 && num1===num4 && num1===num5){
    alert("No pongas todos los números iguales!!!");
  }else{
    alert("hola");
  }

}

//largestNumber(valor9, valor10, valor11, valor12, valor13);

// 5. HACEMOS UN LOOP DE 0 A 15 Y NOS DIRÁ CADA NÚMERO SI ES PAR O IMPAR

function oddOrEven(){
  for(var x =0; x <= 15; x++){
    if(x % 2){
      alert(x + " es impar");
    }else{
      alert(x + " es par");;
    }
  }
}

//oddOrEven();

// 6. HACEMOS UN LOOP DE 0 A 100 Y LOS MULTIPLES DE 3 DIRA FIZZ, MULTIPLES DE 5 BUZZ Y MULTIPLES DE AMBOS FIZZBUZZ

function FizzBuzz(){
  for(var x =1; x <= 100; x++){
    if(x % 3 == 0 && x % 5 == 0){
      alert(x+ ' Múltiple de 3 y 5');
    } else if (x % 3 == 0){
      alert(x+ ' Múltiple de 3');
    }else if(x % 5 == 0){
      alert(x+ ' Múltiple de 5');
    }
  }
}

//FizzBuzz();

// 7. CONSTRUIMOS LA ESTRUCTURA DE ASTERISCOS MEDIANTE DOS BUCLES FOR ANIDADOS

function contructPattern(){
  var pattern = "*";
  for(var x = 0; x < 5; x++){
    console.log(pattern)
    for(var y = 0; y < 1 ; y++){
      pattern = pattern+"*";
    }
        
  }

}

//contructPattern();

// 8. CREAMOS UNA FUNCIÓN QUE NOS SUME LOS MULTIPLOS DE 3 Y 5 POR DEBAJO DE 1000

function under1000(){
  var mult3 = 0;
  var mult5 = 0;
  for(var x =1; x <= 1000; x++){
    var reset3 = 0;
    var reset5 = 0;
    if(x % 3 == 0){
      reset3 = x;
      mult3 = mult3 + reset3;
    }
    if(x % 5 == 0){
      reset5 = x;
      mult5 = mult5 + reset5;
    }
  }
  console.log("Suma total de los múltiples de 3: "+mult3);
  console.log("Suma total de los múltiples de 5: "+mult5);
  console.log("Suma total de los múltiples de 3 y 5: "+(mult3+mult5));
}

//under1000();