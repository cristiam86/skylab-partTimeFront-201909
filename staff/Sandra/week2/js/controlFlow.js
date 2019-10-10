/*larger_integer*/

function largerInteger(num1,num2){
    if (parseInt(num1) > parseInt(num2)) return num1;
    return num2;
}
/*sign_product*/

function signProduct(num1,num2,num3){
    if (num1 * num2 * num3 < 0) return "-";
    return "+";
}

/*sort_numbers*/

function sortNumbers(num1,num2,num3){
    var result = [num1,num2,num3];   
    return result.sort((a, b) => b - a);
}

/*largest_number*/

function largestNumber(num1,num2,num3,num4,num5){
    var numbers = [num1,num2,num3,num4,num5];
    var result = numbers.sort();
   return(result[result.length-1]);
}

/*odd_or_even*/

function odd_or_even(num) {
    for (var i=0; i<=num; i +=1){
        if (i % 2){
            console.log(element,"is odd");
        }else {
            console.log(element,"is even");
        }
    }
}

function oddOrEven(num) {
      if (num % 2) return "odd";
      return "even";
}


/*FizzBuzz*/
function FizzBuzz(num){
    var result="";
    for (var i=1; i<num+1; i +=1){
        if (i % 15 === 0) {
           result = result + "FizzBuzz";         
        }else if (i % 3  === 0){
            result = result + "Fizz";
        }else if (i % 5  === 0){
            result = result + "Buzz";
        }          
    }
    return result;
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
function under1000(num){
    var result = 0;
    for (var i=1;i<num+1; i +=1){
        if ((i % 3  === 0) || (i % 5  === 0))  result = result + i;
    }
    return result;
}