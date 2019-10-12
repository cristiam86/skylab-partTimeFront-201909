var errors = 0;

var results = isArray([]);
if(!results) {
  errors += 1;
  console.error("1. isArray should have returned true");
}

var results = isArray("asd");
if(typeof results === 'undefined' ||results === true) {
  errors += 1;
  console.error("2. isArray should have returned false");
}

var results = joinElements(['Viva','  la','formula',1]);
if (typeof results !== 'string' ){
  errors += 1;
  console.error("1. joinElements should have returned string");
}

var originArray =[1,2,3,4,5];
var results = arrayClone(originArray);
originArray.pop();
if(results === originArray){
  errors += 1;
  console.error("1. originArray should have separated array Pointers");
}

var results = findDifferences([1, 2, 3], [100, 2, 1, 10]);
if(results !== '3,10,100'){
  errors += 1;
  console.error("1. findDifferences should have returned '3,10,100'");
}

var results = findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
if(results !== '6'){
  errors += 1;
  console.error("2. findDifferences should have returned '6'");
}

var results = Sum_And_Product([100, 2, 1, 10]);
if(results[0] !== 113){
  errors += 1;
  console.error("1. Sum_And_Product should have returned 113");
}
if(results[1] !== 2000){
  errors += 1;
  console.error("2. Sum_And_Product should have returned 2000");
}



if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}