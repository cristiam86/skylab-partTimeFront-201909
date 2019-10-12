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


var joinElements = joinElements(['John','George','Ringo','Paul'])
if(joinElements.chartAt(" ") !== 0){
    errors += 1;
    console.error("1. there're spaces in the string")
}

var joinElements = joinElements(['Joh n','Ge orge','Ringo','Paul'])
if(joinElements.chartAt(" ") !== 0){
    errors += 1;
    console.error("1. there're spaces in the string")
}

var arrayClone = arrayClone([1, 2, [4, 0]])

    var cloned = arrayClone
    arrayClone.pop()
    if(arrayClone === cloned){
    errors += 1;
    console.error("1. Is not a clone")
}



if (arrayClone2 !== [1, 2, [4, 0]]){
    errors += 1;
    console.error("1. there're spaces in the string")
}




if (errors){
  console.error(errors+" ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}