
//This function works for several other functions below
var getInputs = function(number_of_inputs){
    var inputs = [];
    for(var i=0; i < number_of_inputs ; i++){
        current = prompt("please enter number");
        inputs[inputs.length] = parseInt(current);
    }
    return inputs;
}

//exercise 1

var getLarger = function(int1, int2){
    if(int1>int2){
        return int1;
    } else if(int2>int1){
        return int2;
    } else{
        return "equals"
    }
}

var largerInteger= function(){
    var inputs = getInputs(2);
    var largest = getLarger(inputs[0],inputs[1]);
    console.log(largest);
}

//uncomment following line to run
//largerInteger(); 


/*product of 3 numbers sign*/

var multiply = function(n1,n2,n3){
    var product = n1*n2*n3;
    if(product>0){
        alert("+");
    } else if(product<0){
        alert("-");
    } else{
        alert("0");
    }
}

var signProduct = function(){
    var inputs = getInputs(3);
    var alertsign = multiply(inputs[0],inputs[1],inputs[2]);    
}

//uncomment following line to run
//signProduct();


/*sort exercise*/

var sortNumbers = function(){
    var inputs = getInputs(3);
    console.log(inputs)
    console.log("sorted",inputs.sort().reverse())  
}

//sortNumbers();

/*largest number of 5*/

var getLarger5 = function(arrayOf5){
    var sorted = arrayOf5.sort().reverse();
    return sorted[0];
}

var largerInteger5= function(){
    var inputs = getInputs(5);
    var largest = getLarger5(inputs);
    alert(largest);
}

//uncomment next line to run
//largerInteger5();

var oddOrEven = function(){
    for(var i=0; i<16; i++){
        i%2===0 ? console.log(i," is even") : console.log(i," is odd");
    }
}

//uncomment next line to run
//oddOrEven();

var FizzBuzz = function(){
    for (var i=1; i<101; i++){
        if(i%15===0){
            console.log("FizzBuzz");
        } else if(i%5===0){
            console.log("Buzz");
        } else if(i%3===0){
            console.log("Fizz");
        } else{
            console.log(i);
        }
    }
}


//uncomment next line to run
//FizzBuzz();

var constructPattern = function(){
    var pattern = "";
    for(var i=0; i<5; i++){
        pattern += "*";
        console.log(pattern);
    }
}

//uncomment next line to run
//constructPattern()

var under1000 = function(){
    total = 0;
    for(var i=1; i<1000; i++){
        if(i%3===0 || i%5===0){
            console.log(i);
            total += i;
        }
        else{
            console.log("no");
        }
    }
    console.log("Total: ",total)
}

//uncomment next line to run
//under1000();