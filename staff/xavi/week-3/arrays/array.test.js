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

var joinEl = joinElements([]);
if(joinEl) 

/*

var isBl = isBlanK([]);
if(isBl === false){
    errors += 1;
    console.error("isBlank debería vhaber sido True")
} 

var isBl = isBlanK(['a']);
if(isBl === true){
    errors += 1;
    console.error("isBlank debería vhaber sido False")
} 

*/


if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}