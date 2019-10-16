var errors = 0;


/////////////////
/// isArray ////
////////////////
var isArr = isArray([]);
if(!isArr) {
  errors += 1;
  console.error("1. isArray should have returned true");
}

var isArr = isArray("asd");
if(typeof isArr === 'undefined' || isArr === true) {
  errors += 1;
  console.error("1. isArray should have returned false");
}

/////////////////
/// joinElements ////
////////////////
var isArr = joinElements(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("2. isArray should have returned John,George,Ringo,Paul");
}

/////////////////
/// arrayClone ////
////////////////
var a = [1, 2, 4, 0];
var isArr = arrayClone(a);
isArr.pop();

if (a.length === isArr.length && a.join() === isArr.join()) {
  errors += 1;
  console.error("3. arrayClone está cloná de la otra");
}


/////////////////
/// findDifferences ////
////////////////
var arrA = [1, 2];
var arrB = [1, 3];
var isArr = findDifferences(arrA, arrB);
if (arrA.join() === isArr.join() || arrB.join() === isArr.join() ) {
  errors += 1;
  console.error("4. Las Arrays son iguales colega");
}
if (arrA.length === isArr.length || arrB.length === isArr.length) {
  errors += 1;
  console.error("4. Las Arrays son iguales colega");
}

/////////////////
/// Sum and Product ////
////////////////
var isArr = sumAndProduct(a);
var suma = 0;
var product = 1;
for (i = 0; i < isArr.length; i += 1) {
  suma += isArr[i];
  product *= isArr[i];
}

if (suma !== 9 || product !== 16 ) {
  errors += 1;
  console.error("5. La suma debe ser 9 y el producto 16");
}


  
/////////////////
/// addItems ////
////////////////



/////////////////
/// generateArrayLength ////
////////////////



/////////////////
/// last ////
////////////////


/////////////////
/// sortItems ////
////////////////



/////////////////
/// getRandom ////
////////////////


/////////////////
/// findDuplicates ////
////////////////


/////////////////
/// mergeArrays ////
////////////////


/////////////////
/// separateEven ////
////////////////


/////////////////
/// mostFrequentItem ////
////////////////


/////////////////
/// moveElement ////
////////////////


/////////////////
/// swapCase ////
////////////////


/////////////////
/// Print elements array ////
////////////////



/////////////////
/// array_filled (string) ////
////////////////


if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}
