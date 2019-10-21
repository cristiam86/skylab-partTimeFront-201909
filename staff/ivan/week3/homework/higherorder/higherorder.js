console.log("hello world");

//new notation of function
// const censor = words => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.length !== 4) filtered.push(word);
//   }
//   console.log(filtered);https://github.com/SkylabCoders/skylab-partTimeFront-201909/blob/ivan/staff/ivan/week3/functions/functions.js
//   return filtered;
// };


// array = ['oops', 'gasp', 'shout', 'sun']
// censor(array);
// [ 'shout', 'sun' ]

//old notation

var censor_firstOrder = function(words){
  var filtered = [];
  for(var i=0; i<words.length; i++){
    var word = words[i];
    if(word.length !== 4){
      filtered.push(word);
    }
  }
  console.log(filtered)
  return filtered;
}

words = ['oops', 'gasp', 'shout', 'sun']
censor_firstOrder(words);

//with high order functions

//first we use a reduce function...

var reduce = function(reducer,initial,array){ //the reducer will be a function...
  var acc = initial; //initial is 0, 1 or empty string, just to get started.
  for(var i=0; i<array.length; i++){
    acc = reducer(acc,array[i]); //reducer will take another function as parameter, but needs to have 2 arguments?
  }
  return acc;
}

var simple_add = function(x,y){
  return x + y;
}

reduce(simple_add, 0, [1,2,3,4]); //note that first parameter is a function, then the initial = 0, then we provide an array to loop through...

// const filter = (
//   fn, arr
// ) => reduce((acc, curr) => fn(curr) ?
//   acc.concat([curr]) :
//   acc, [], arr
// );

// var simple_concat = function(acc,curr){
//   if(fn(curr)){
//     return acc.concat([curr]);
//   } else{
//     return acc;
//   }
// }

words1 = ['jaja', 'taco', 'tacobell', 'ok']

var filter = function(fn,arr){
  return reduce(function(acc,curr){
  if(fn(curr)){
    return acc.concat([curr]);
  } else{
    return acc;
  }
}, [], arr);
}

var detect4 = function(word){
  return word.length !== 4; //returns true when word has length different than 4
}

var censor_highorder = function(words){
  return filter(detect4, words);
}

console.log(censor_highorder(words1)); //this works, it leaves just words with different than 4 letters.

// HOMEWORK...
// capitalCase

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

//one option is to capitalize the first letter.
var upperAction = function(word){
  return word[0].toUpperCase() + word.substr(1,word.length);
}

//another is to capitalize all letters...
var allUpper = function(word){
  return word.toUpperCase();
}

var startsWithJ = function(word){
  if(word[0]==='j'){return word};
}

var vowelCount = function(character){
  var vowels=['a','A','e','E','i','O','o','I','u','U'];
  if(vowels.indexOf(character)>-1){
    return 1;
  }
  else{
    return 0;
  }
}

//this is high order--- the function can take any of the above and performs
//different changes in the array... the reducer is the function to be passed.
var changeElementsInArray = function(reducer,initial,array){
  var new_array = initial; //initial is 0, 1 or empty string, just to get started.
  for(var i=0; i<array.length; i++){
    if(reducer(array[i])){
      new_array.push(reducer(array[i]));
    }
  }
  return new_array;
} //note this function doesn't affect the original array, returns a new one.

//now we can use change elements in array to define capital case, and just
//pass our desired function as an argument...
var capitalCase = changeElementsInArray;
console.log(capitalCase(upperAction,[],months))

var someMonths = changeElementsInArray;
console.log(someMonths(startsWithJ,[],months))


var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
var lorem = 'Lorem'

console.log(loremIpsum.split(''));
var countVowels = changeElementsInArray;
var count = countVowels(vowelCount,[],loremIpsum.split('')); //we first make the string into an array of characters... and the result of this will be an array with 1's, each 1 represents a vowel found
//that's why we need the reduce below to accumulate and to the actual count...
console.log("this is the resulting array:",count)
console.log(count.reduce((a,b)=>a+b,0)); //this returns the sum which is 205...




//CALLBACK

var call = function(resolution){
  return resolution ? "Enter the bar" : "Go away"
}

