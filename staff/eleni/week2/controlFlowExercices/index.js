//larger_integer


function larger_integer(num1,num2){

var num1;
var num2;
    if(num1>num2){
        console.log(num1+" is bigger than "+num2)
    }else if (num1===num2){
        console.log(num1+" is equal to "+num2)
    }else{
        console.log(num1+" is smaller than "+num2)
    }
}
larger_integer(2,3)

//sign_product

function sign_product(num1,num2,num3){
    var num1;
var num2;
var num3;
    var result=num1*num2*num3;
    if (result<0){
        console.log("The sign is -");
    }else{
        console.log("The sign is +");
    }
}
sign_product(1,4,-9)

//sort_numbers


function sort_numbers(num1,num2,num3){
    var num1;
var num2;
var num3;
    if(num1>num2 && num2>num3){
        console.log(num1+","+num2+","+num3)
    }else if(num1<num2 && num2<num3){
        console.log(num3+","+num2+","+num1)
    }else if(num1>num2 && num2<num3){
        console.log(num1+","+num3+","+num2)
    }else if(num1<num2 && num1>num3){
        console.log(num2+","+num1+","+num3)
    }else if(num1<num2 && num1<num3){
        console.log(num2+","+num3+","+num1)
    }else if(num3>num1 && num1<num2){
        console.log(num3+","+num1+","+num2)
    }
}
sort_numbers(2,-4,9)
/*
function sort_numbers(num1,num2,num3){
    var array=[num1,num2,num3];
    array.sort();
    console.log(array)
}
sort_numbers(2,-3,10);*/

//largest_number
function largest_number(num1,num2,num3,num4,num5){
    alert(Math.max(num1, num2, num3,num4,num5));
}
largest_number(1,34,6,2,4);

//odd_or_even
function odd_or_even(){
    for(i=0;i<=15;i+=1){
        if(i%2==0){
            console.log("The number "+i+" is even")
        }else{
            console.log("The number "+i+" is odd")
        }
    }
}
odd_or_even();

//FizzBuzz
function FizzBuzz(){
    for(i=0;i<=100;i+=1){
        if((i%3==0) && (i%5==0)){
            console.log("FizzBuzz")
        }else if(i%5==0){
            console.log("Buzz")
        }else if (i%3==0){
            console.log("Fizz")
        }
        else{
            console.log(i)
        }
    }
}
FizzBuzz();

//contruct_pattern
function pattern(){
    for(var i=1; i<=5; i++){
        console.log("* ".repeat(i));
     }
}
pattern();


//under_1000
function under_1000{
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
}