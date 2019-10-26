var errors = 0;


//first

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

//join

var joined = joinElements(['John','George','Ringo','Paul']);

if(joined !== 'John,George,Ringo,Paul') {
  errors += 1;
  console.error("2. joinElements should have returned false John,George,Ringo,Paul");
}

//clone test

var a = [1, 2, [4, 0]]; //
var aclone = arrayClone(a);
var b = aclone;
b.pop();
//console.log(a,b)

if(a.length === b.length) {
  errors += 1;
  console.error("array clone 1 not be the same length");
}

// find differences

var difa = [1, 2, 3, 4, 5];
var difb = [1, [2], [3, [[4]]],[5,6]];
var dif = findDifferences(difa,difb);

if(dif[0] !== 6) {
  errors += 1;
  console.error("array find differences should have returned 6");
}

var dif2 = findDifferences([1,2,3,4,5],[1,2,7]);

if(dif2.join() !== "3,4,5") {
  errors += 1;
  console.error("array find differences should have returned '3,4,5,7'");
}




if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}