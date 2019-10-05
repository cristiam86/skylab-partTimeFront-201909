// ### larger_integer

//Write a JavaScript program that accept two integers and display the larger.

function largerInteger(){
var num1 = prompt("Introduce Número 1");
var num2 = prompt("Introduce Número 2");

function larger_interger(num1, num2) {
    if(num1 > num2) {
        console.log(num1 + " Es Mayor");   
    } 
    else {
        console.log(num2 + " Incorrecto este es menor");
    }
};
larger_interger(num1,num2);
};

// ### sign_product

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

//Sample numbers : 3, -7, 2 
//Output : The sign is -

function signProduct(){

var sampleNumber = [3, -7, 2];

function sign_product(numbers){
 if(numbers < 0) {
     console.log("Correcto, número negativo")
 }

}
sign_product([3, -7, 2]);
}