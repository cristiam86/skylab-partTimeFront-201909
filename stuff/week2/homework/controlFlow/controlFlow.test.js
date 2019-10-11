var errors = 0;

//////////////////////
/// largerInteger ///
//////////////////////
var sol = largerInteger(2, 1);
if (sol !== 2) {
  errors += 1;
  console.error("ERROR: largerInteger expected to return 2");
}

var sol = largerInteger(1, 2);
if (sol !== 2) {
  errors += 1;
  console.error("ERROR: largerInteger expected to return 2");
}

var sol = largerInteger(2, 2);
if (sol !== 2) {
  errors += 1;
  console.error("ERROR: largerInteger expected to return 2");
}

//////////////////////
///// signProduct ////
//////////////////////
var sign = signProduct(1, 2, 3);
if (sign !== '+') {
  errors += 1;
  console.error("ERROR: sign must be +")
}

var sign = signProduct(-1, 2, -3);
if (sign !== '+') {
  errors += 1;
  console.error("ERROR: sign must be +")
}

var sign = signProduct(-1, -2, 3);
if (sign !== '+') {
  errors += 1;
  console.error("ERROR: sign must be +")
}

var sign = signProduct(1, -2, -3);
if (sign !== '+') {
  errors += 1;
  console.error("ERROR: sign must be +")
}

var sign = signProduct(1, 2, -3);
if (sign !== '-') {
  errors += 1;
  console.error("ERROR: sign must be -")
}

var sign = signProduct(1, -2, 3);
if (sign !== '-') {
  errors += 1;
  console.error("ERROR: sign must be -")
}

var sign = signProduct(-1, 2, 3);
if (sign !== '-') {
  errors += 1;
  console.error("ERROR: sign must be -")
}

var sign = signProduct(-1, -2, -3);
if (sign !== '-') {
  errors += 1;
  console.error("ERROR: sign must be -")
}

//////////////////////
///// signProduct ////
//////////////////////
var sorted = sortNumbers(0, -1, 4);
if (sorted[0] !== 4 || sorted[1] !== 0 || sorted[2] !== -1) {
  errors += 1;
  console.error("ERROR: numbers sorted should be [4, 0, -1]")
}

var sorted = sortNumbers(0, -1, -4);
if (sorted[0] !== 0 || sorted[1] !== -1 || sorted[2] !== -4) {
  errors += 1;
  console.error("ERROR: numbers sorted should be [0, -1, -4]")
}

var sorted = sortNumbers(10, -1, 4);
if (sorted[0] !== 10 || sorted[1] !== 4 || sorted[2] !== -1) {
  errors += 1;
  console.error("ERROR: numbers sorted should be [10, 4, -1]")
}

var sorted = sortNumbers(1, -10, 4);
if (sorted[0] !== 4 || sorted[1] !== 1 || sorted[2] !== -10) {
  errors += 1;
  console.error("ERROR: numbers sorted should be [4, 1, -10]")
}

//////////////////////
//// largestNumber ///
//////////////////////
var largest = largestNumber(-5, -2, -6, 0, -1);
if (largest !== 0) {
  errors +=1;
  console.error("ERROR: largestNumber should be 0")
} 

var largest = largestNumber(5, -2, -6, 0, -1);
if (largest !== 5) {
  errors +=1;
  console.error("ERROR: largestNumber should be 5")
} 

var largest = largestNumber(-5, 2, -6, 0, -1);
if (largest !== 2) {
  errors +=1;
  console.error("ERROR: largestNumber should be 2")
} 

var largest = largestNumber(5, -2, 6, 0, -1);
if (largest !== 6) {
  errors +=1;
  console.error("ERROR: largestNumber should be 6")
} 

var largest = largestNumber(-5, -2, -6, 0, 1);
if (largest !== 1) {
  errors +=1;
  console.error("ERROR: largestNumber should be 1")
} 

//////////////////////
///// oddOrEven /////
//////////////////////
var result = oddOrEven(0)
if (result !== 'even') {
  errors += 1;
  console.error("ERROR: 0 is even");
}

var result = oddOrEven(1)
if (result !== 'odd') {
  errors += 1;
  console.error("ERROR: 1 is odd");
}

var result = oddOrEven(2)
if (result !== 'even') {
  errors += 1;
  console.error("ERROR: 2 is even");
}

var result = oddOrEven(-1)
if (result !== 'odd') {
  errors += 1;
  console.error("ERROR: -1 is odd");
}

var result = oddOrEven(-2)
if (result !== 'even') {
  errors += 1;
  console.error("ERROR: -2 is even");
}

//////////////////////
///// FizzBuzz /////
//////////////////////
var result = FizzBuzz(3);
if(result !== 'Fizz') {
  errors += 1;
  console.error("ERROR: result should be Fizz");
}
var result = FizzBuzz(5);
if(result !== 'FizzBuzz') {
  errors += 1;
  console.error("ERROR: result should be FizzBuzz");
}
var result = FizzBuzz(9);
if(result !== 'FizzBuzzFizzFizz') {
  errors += 1;
  console.error("ERROR: result should be FizzBuzzFizzFizz");
}
var result = FizzBuzz(12);
if(result !== 'FizzBuzzFizzFizzBuzzFizz') {
  errors += 1;
  console.error("ERROR: result should be FizzBuzzFizzFizzBuzzFizz");
}

//////////////////////
///// under1000 /////
//////////////////////
var result = under1000(3);
if(result !== 3) {
  errors += 1;
  console.error("ERROR: result should be 3");
}
var result = under1000(5);
if(result !== 8) {
  errors += 1;
  console.error("ERROR: result should be 8");
}
var result = under1000(9);
if(result !== 23) {
  errors += 1;
  console.error("ERROR: result should be 23");
}
var result = under1000(12);
if(result !== 45) {
  errors += 1;
  console.error("ERROR: result should be 45");
}

/// TOTAL
if (errors > 0) {
  console.error("ERRORS FOUND: "+errors)
} else {
  console.log("CONGRATULATIONS! ALL TESTS PASSED")
}