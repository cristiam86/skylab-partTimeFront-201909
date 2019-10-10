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
    
    
    function signProduct(sampleNumber){
        sampleNumber = [3, -7, 2];
        for (var i = 0; i < sampleNumber.length; i++) {
         if (sampleNumber[i] < 0) {
         alert('The sign is ' + sampleNumber[i])};
     };
    };
    signProduct();
    
    function signProduct (num1, num2, num3) {
        num1 = 3;
        num2 = -7;
        num3 = 2;
        if (num1 < 0) {
            console.log("The sign is -");
        } else if (num2 < 0) {
            console.log("The sign is -");
        } else if (num3 < 0){
            console.log ("The sign is -");
        }
    }
    
    signProduct();
    
    //### sort_numbers
    
    //Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
    
    //Sample numbers : 0, -1, 4 
    //Output : 4, 0, -1
    
    function sort_numbers(num1, num2, num3) {
        num1 = 0;
        num2 = -1;
        num3 = 4;
        if(num1 > num2 && num2 > num3) {
            alert(num1, num2, num3) 
        } else if (num2 > num1 && num1 > num3) {
            alert(num2, num1, num3)
        } else if (num3 > num1 && num1 > num2) {
            alert(num3, num1, num2)
        }
    
    sort_numbers();
    
    //###  largest_number
    
    //Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
    
    //Sample numbers : -5, -2, -6, 0, -1 
    //Output : 0
    
    function largestNumber (num1, num2, num3, num4, num5) {
        num1 = -5;
        num2 = -2;
        num3 = -6;
        num4 = 0;
        num5 = -1;
        if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
            alert(num1)
        } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
            alert(num2) 
        } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
            alert(num3)
        } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
            alert(num4)
        } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
            alert(num5)
        }   
    }
    largestNumber();
    
    //### odd_or_even
    
    //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
    
    //Sample Output : 
    //"0 is even" 
    //"1 is odd" 
    //"2 is even"
    
    function oddOrEven (numbers) {
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                document.write(numbers[i] + " is even")
            } else {document.write(numbers[i] + " is odd")
        }
    }
    };
    oddOrEven()
    
    //### FizzBuzz
    
    //Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
    
    function fizzBuzz () {
        for (var i = 0; i < 100; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz')
            } else if (i % 3 === 0) {
                console.log('Buzz')
            } else if  (i % 5 === 0) {
                console.log('Fizz')
            } 
        }
    }
    fizzBuzz()
    
    
    //### contruct_pattern
    
    //Write a JavaScript program to construct the following pattern, using a nested for loop.
    
    //*  
    //* *  
    //* * *  
    //* * * *  
    //* * * * *
    
    
    
    
    //### under_1000
    
    //Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
    
    function under1000 (sum) {
        sum = 0;
        for ( var i = 0; i < 1000; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
      alert(sum);
    }
    under1000();
    
    // ### sign_product
    
    //Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
    
    //Sample numbers : 3, -7, 2 
    //Output : The sign is -
    
    
    function signProduct (num1, num2, num3) {
        num1 = 3;
        num2 = -7;
        num3 = 2;
        if (num1 < 0) {
            console.log("-");
        } else if (num2 < 0) {
            console.log("-");
        } else if (num3 < 0){
            console.log ("-");
        }
    }
    
    signProduct();

}