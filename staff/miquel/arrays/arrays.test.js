var errors = 0;

var isArr = isArray([]);
if(!isArr) {
  errors += 1;
  console.error("1. isArray should have returned true");
}

var isArr = isArray("asd");
if(typeof isArr === 'undefined' || isArr === true) {
  errors += 1;
  console.error("2. isArray should have returned false");
}

var isArr = joinElements(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("3. isArray should have returned 'John,George,Ringo,Paul'");
}

var arr1 = [1, 2, 4, 0];
var arr2 = arrayClone(arr1);
arr1.pop();
if(arr1 === arr2) {
  errors += 1;
  console.error("4. arr1 and arr2 should be different");
}

var arr1 = [1, 2, 3];
var arr2 = [100, [[2]], 1, 10];
var arrDif = findDifferences(arr1, arr2);
if(arrDif === arr1 || arrDif === arr2) {
  errors += 1;
  console.error("5. arrDif should be different from arr1 or arr2");
}

var isArr = arraySumProduct(arr2);
if(isArr <= 0) {
  errors += 1;
  console.error("6. isArr should be bigger than 0");
}

var isArr = addItems('John','George','Ringo','Paul');
if(!isArray(isArr)) { // || isArr != ["John", "George", "Ringo", "Paul"]) {
  errors += 1;
  console.error('7. isArray should have returned ["John", "George", "Ringo", "Paul"]');
}

var len = 4;
var isArr = generateArrayLength(-6, len);
if(!isArray(isArr) || isArr.length !== len) {
  errors += 1;
  console.error("8. isArray should be an array of length"+len);
}

var len = 3
var isArr = arrayLast([7, 9, 0, -2], len);
if(!isArray(isArr) || isArr.length !== len) {
  errors += 1;
  console.error("9. isArray should be an array of length"+len);
}

var arr = [3,8,7,6,5,-4,-3,2,1];
var isArr = arraySortItems(arr);
if(isArr.length !== arr.length || isArr[0] > isArr[isArr.length-1]) {
  errors += 1;
  console.error("10. isArray should return the sorted array");
}

var isArr = arrayGetRandom(['John','George','Ringo','Paul']);
if(isArr === '') {
  errors += 1;
  console.error("11. isArray should have returned a random value");
}

arr1 = ['John','George','Ringo','Paul','John','John','Ringo'];
var isArr = arrayFindDuplicates(arr1);
if(isArr === '') {
  errors += 1;
  console.error("12. isArray should have returned the duplicated values");
}

var arr1 = [1, 2, 3];
var arr2 = [2, 30, 1];
var isArr = mergeArrays(arr1, arr2);
if(isArr === '') {
  errors += 1;
  console.error("13. isArray should have been merged");
}

var stringNums = separateEven('025468');
if(stringNums < 0) {
  errors += 1;
  console.error("14. isArray should have included - between even numbers");
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var strOutput = mostFrequentItem(arr1);
if(typeof strOutput !== 'string' || !strOutput.includes("times")) {
  errors += 1;
  console.error("15. strOutput should have returned the most frequent item's number of times");
}

var arr1 = [10, 20, 30, 40, 50]
var isArr = moveElement(arr1, 0, 2);
if(isArr.length !== arr1.length) {
  errors += 1;
  console.error("16. isArray should have been moved in the same array");
}

var strInput = 'The Quick Brown Fox';
var strOutput = swapCase(strInput);
console.log("TCL: strOutput", strOutput)
if(strInput.toLowerCase() !== strOutput.toLowerCase()) {
  errors += 1;
  console.error("17. strOutput should have returned the text with swapped case letters");
}


if (errors){
  console.error(errors + " ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}