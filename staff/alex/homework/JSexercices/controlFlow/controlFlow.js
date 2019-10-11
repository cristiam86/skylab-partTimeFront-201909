// ### larger_integer

//Write a JavaScript program that accept two integers and display the larger.

  
  function largerInteger(num1, num2) {
    if(num1 > num2) {
      return(num1);   
    } else {
      return(num2);
    }
  };
 
  
  // ### sign_product
  
  //Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
  
  //Sample numbers : 3, -7, 2 
  //Output : The sign is -
  
  
  function signProduct (num1, num2, num3) {
      if (num1 * num2 * num3 > 0)
          return "+";
        else 
          return "-"; 
  };
  
 
  
  //### sort_numbers
  
  //Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
  
  //Sample numbers : 0, -1, 4 
  //Output : 4, 0, -1
  
  function sortNumbers(num1, num2, num3) {
    var numbers = [num1, num2, num3];
     var aa =  numbers.sort((a,b)=> b-a);
     return aa
    }

  
  
  
  
  
  //###  largest_number
  
  //Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
  
  //Sample numbers : -5, -2, -6, 0, -1 
  //Output : 0
  
  function largestNumber (num1, num2, num3, num4, num5) {
      
      if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
          return num1
      } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
          return num2 
      } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
          return num3
      } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
          return num4
      } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
          return num5
      }   
  }
  
  
  //### odd_or_even
  
  //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
  
  //Sample Output : 
  //"0 is even" 
  //"1 is odd" 
  //"2 is even"
  
  function oddOrEven (numbers) {
          if (numbers % 2 === 0) {
              return "even"
          } else {return "odd"
  };
};
  
  //### FizzBuzz
  
  //Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
  
  function fizzBuzz(input) {
      var result = [];
      for (var i = 0; i < input; i++) {
          if(i % 3 === 0) {
            result += 'Fizz'
          } else if (i % 5 === 0) {
              result += result + 'Buzz'
          } else if  (i % 15 === 0) {
              result += result +'FizzBuzz'
          } 
      }
  }
 
  
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
    return sum;
  }
  
  

  
