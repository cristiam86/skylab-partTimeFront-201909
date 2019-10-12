function isString(str){
  if(typeof str){
    return true;
  }else{
    return false;
  }
}

//console.log(isString("hola"));

function isBlank(str){
  if(str.length < 1){
    return true;
  }else{
    return false;
  }
}
//console.log(isBlank(""));

function stringToArray(str){
  var result = str.split(" ");
  return result;
}
//console.log(stringToArray("Eugenio Fernandez"));

function truncate(str, num){
  var result = str.slice(num);
  return result;
}
console.log(truncate("Robin Singh",4));