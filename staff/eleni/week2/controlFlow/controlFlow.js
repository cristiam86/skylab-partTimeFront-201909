//larger_integer
function largerInteger(num1,num2){
var num1;
var num2;
    if(num1>num2){
        return num1;
    }else{
        return num2
    }
}
//largerInteger(2,3)

//sign_product

function signProduct(num1,num2,num3){
    var num1;
var num2;
var num3;
    var result=num1*num2*num3;
    if (result<0){
        return '-';
    }else{
        return '+';
    }
}
signProduct(1,4,-9)

//sort_numbers
/*function sortNumbers(num1,num2,num3){
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
}*/
//sortNumbers(2,-4,9)

function sortNumbers(num1,num2,num3){
    var numbers=[num1,num2,num3];
    numbers.sort(function(num1,num2){ //Array now becomes [41, 25, 8, 7]
    return num2 - num1
})
    return numbers;
}

//sort_numbers(2,-3,10);

//largest_number
function largestNumber(num1,num2,num3,num4,num5){
    return (Math.max(num1, num2, num3,num4,num5));
}
//largestNumber(1,34,6,2,4);

//odd_or_even
function oddOrEven(num1){
        if(num1%2===0){
            return 'even'
        }else{
            return 'odd'
        }
}
// oddOrEven();

//FizzBuzz
function FizzBuzz(num1){
  var result="";
    for(i=0;i<=num1;i+=1){
        if(i%3==0){
            result+='Fizz'
        }else if(i%5==0){
            result+='Buzz'
        }else if(i%3==0 && i%5==0){
            result+='FizzBuzz'
        }     
    }
    return result;
}
//FizzBuzz();

//contruct_pattern
function constructPattern(){
    for(var i=1; i<=5; i++){
        console.log("* ".repeat(i));
     }
}
//constructPattern();


//under_1000
function under1000(num1){
var sum=0;
for (var x = 0; x <= num1; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
return sum;
}
//under1000();