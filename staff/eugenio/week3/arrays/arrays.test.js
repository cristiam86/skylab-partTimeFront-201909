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

var a = [1, 2, 3]
var b = [100, 2, 1, 10]
var difference = findDifferences(a, b);
if(difference.join() === a.join() || difference.join() === b.join()){
  errors += 1;
  console.error("3. ERROR: should have returned hola");
}

if(difference.length() === a.length() || difference.length() === b.length()){
  errors += 1;
  console.error("3. ERROR: should have returned hola");
}

if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}