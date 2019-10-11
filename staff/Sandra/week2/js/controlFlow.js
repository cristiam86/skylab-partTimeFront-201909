/*larger_integer*/

function larger_interger(num1,num2){
    if (parseInt(num1) > parseInt(num2)){
        console.log ("numero1 mayor numero2");
    }else if (parseInt(num1) < parseInt(num2)){
        console.log ("numero2 mayor numero1");
    }else {
        console.log ("iguales");
    }
}
/*sign_product*/

function sign_product(num1,num2,num3){
    var result = num1 * num2 * num3;
    console.log(result);
    if (result < 0){
        console.log("negative");
    }else console.log("positive");
}

/*sort_numbers*/

function sort_numbers(num1,num2,num3){
    var result = [num1,num2,num3];
    result.sort();
    console.log(result);
}

/*largest_number*/

function largest_number(num1,num2,num3,num4,num5){
    var numbers = [num1,num2,num3,num4,num5];
    var result = numbers.sort();
    console.log(result[result.length-1]);
}

/*odd_or_even*/

function odd_or_even() {
    for (var i=0; i<=15; i +=1){
        if (i % 2){
            console.log(element,"is odd");
        }else {
            console.log(element,"is even");
        }
    }
}

/*FizzBuzz*/
function fizzBuzz(){
    for (var i=0; i<100; i +=1){
        var result="";
        if (i % 15 === 0) {
            console.log(i + " is: Multiple 3 y 5" );         
        }else if (i % 3  === 0){
            console.log(i + " is: Multiple 3");
        }else if (i % 5  === 0){
            console.log(i + " is: Multiple 5");
        }          
    }
}

/*contruct_pattern*/
function contructPattern() {
    var char = ''
    for (var i = 0; i < 5; i +=1){
        char =  '* ' + char;
        console.log(char);
    }
}
/*under_1000*/
function uner1000(){
    var result = 0;
    for (var i=0;i<1001; i +=1){
        if ((i % 3  === 0) || (i % 5  === 0)) { 
            result = result + i;
        }
    }
    console.log(result);
}