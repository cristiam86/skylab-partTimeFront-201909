var errors = 0;

///isArray
var isArr = isArray([]);
if (!isArr) {
    errors += 1;
    console.error("1. isArray should have returned true");
}

var isArr = isArray("asd");
if (typeof isArr === 'undefined' ||  isArr === true) {
    errors += 1;
    console.error("2. isArray should have returned false");
}

/////joinElements
var res = joinElements(['John', 'George', 'Ringo', 'Paul']);
if (res !== 'John,George,Ringo,Paul') {
    errors += 1;
    console.error("ERROR: join elements expected to return 'John,George,Ringo,Paul'");
}

///arrayClone
var res = arrayClone([1, 2, 4, 0]);
var res2 = res;
if (res2 !== res) {
    errors += 1;
    console.error("ERROR: array clone expected to return '1,2,4,0'");
}

///findDifferences
var res = findDifferences([1, 2, 3], [100, 2, 1, 10]);
/*  if(res!=='3, 10, 100') {
   errors += 1;
   console.error("ERROR: array clone expected to return 3,10,100");
}*/

///// Sum and Product
var res = SumAndProduct([2, 3, 4]);
if ((res.sum !== 9) && (res.product !== 24)) {
    errors += 1;
    console.error("ERROR: the sum should be 9 and the product 24");
}

////generateArrayLength
var res = generateArrayLength(1, 4);
if (res.length !== 4) {
    errors += 1;
    console.error("ERROR: generate array length should return 1,2,3,4");
}
var res = generateArrayLength(-6, -3);
if (res.length !== 4) {
    errors += 1;
    console.error("ERROR: generate array length should return -6,-5,-4,-3");
}

///getLast
var res = getLast(([7, 9, 0, -2]));
if (res[0] !== -2) {
    errors += 1;
    console.error("ERROR: get last should return -2");
}
var res = getLast([7, 9, 0, -2], 3);
if (res[0] !== 9 || res[1] !== 0 || res[2] !== -2) {
    errors += 1;
    console.error("ERROR: get last should return 9,0,-2");
}
var res = getLast([7, 9, 0, -2], 6);
if (res[0] !== 7 || res[1] !== 9 || res[2] !== 0 || res[3] !== -2) {
    errors += 1;
    console.error("ERROR: get last should return 7, 9, 0, -2");
}

/// sort
var res = sort(3, 8, 7, 6, 5, -4, -3, 2, 1);
if (res[0] !== -4 || res[1] !== -3 || res[2] !== 1 || res[3] !== 2 || res[4] !== 3 || res[5] !== 5 || res[6] !== 6 || res[7] !== 7 || res[8] !== 8) {
    errors += 1;
    console.error("ERROR: sort should return 3, 8, 7, 6, 5, -4, -3, 2, 1");
}

//// getRandom
var res = getRandom(1, 2, 3);
if (res !== 1 && res !== 2 && res !== 3) {
    errors += 1;
    console.error("ERROR: get random should return 1 or 2 or 3");
}

///  findDuplicates
var res = findDuplicates(1, 2, 2, 3, 3);
if (res !== 2 && res !== 3) {
    errors += 1;
    console.error("ERROR: find duplicates should return 2 and 3");
}

if (errors) {
    console.error(errors + " ERROR(S) FOUND");
} else {
    console.log("CONGRATS!!!");
}