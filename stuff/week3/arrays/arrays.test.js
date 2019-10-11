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


if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}