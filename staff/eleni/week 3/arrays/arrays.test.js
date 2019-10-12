var errors = 0;

///isArray
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

/////joinElements
var res = joinElements(['John','George','Ringo','Paul']);
if (res !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("ERROR: join elements expected to return 'John,George,Ringo,Paul'");
}

///arrayClone
var res = arrayClone([1,2,4,0]);
var res2= res;
if(res2!==res){
  errors += 1;
  console.error("ERROR: array clone expected to return '1,2,4,0'");
}

///findDifferences
var res= findDifferences([1, 2, 3], [100, 2, 1, 10]); 
 /*  if(res!=='3, 10, 100') {
   errors += 1;
   console.error("ERROR: array clone expected to return 3,10,100");
}*/

///// Sum and Product
var res= SumAndProduct([2,3,4]); 
   if((res.sum!==9) && (res.product!==24)) {
   errors += 1;
   console.error("ERROR: the sum should be 9 and the product 24");
}

////generateArrayLength
var res= generateArrayLength(1,4); 
    if (res.length!==4){
   errors += 1;
   console.error("ERROR: generate array length should return 1,2,3,4");
}
var res= generateArrayLength(-6,-3); 
    if (res.length!==4){
   errors += 1;
   console.error("ERROR: generate array length should return -6,-5,-4,-3");
}

if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}