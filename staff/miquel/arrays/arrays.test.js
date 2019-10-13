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
var arr2 = [100, 2, 1, 10];
var arrDif = findDifferences(arr1, arr2);
if(arrDif === arr1 || arrDif === arr2) {
  errors += 1;
  console.error("5. arrDif should be different from arr1 or arr2");
}

var isArr = arraySumProduct(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("5. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = addItems(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("6. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = generateArrayLength(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("7. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = arrayLast(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("8. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = arraySortItems(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("9. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = arrayGetRandom(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("10. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = arrayFindDuplicates(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("11. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = mergeArrays(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("12. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = separateEven(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("13. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = mostFrequentItem(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("14. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = moveElement(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("15. isArray should have returned 'John,George,Ringo,Paul'");
}

var isArr = swapCase(['John','George','Ringo','Paul']);
if(isArr !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("16. isArray should have returned 'John,George,Ringo,Paul'");
}


if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}