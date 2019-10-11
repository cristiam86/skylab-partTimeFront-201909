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

beatles = ['John','George','Ringo','Paul']
var join = joinElements(beatles);
if(join !== 'John,George,Ringo,Paul' && typeof String){
  errors += 1;
  console.error("3. ERROR: should have returned 'John,George,Ringo,Paul'");
}


var a = [1, 2, 4, 0]
var clone = arrayClone(a);
var b = clone;
b.pop();
if (a.length === b.length){
  errors += 1;
  console.error("3. ERROR: should have returned 'John,George,Ringo,Paul'");
}



if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}