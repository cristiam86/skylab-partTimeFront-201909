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
  var result = str.slice(0, num);
  return result;
}
//console.log(truncate("Robin Singh",4));

function abbrevName(str){
var pos = str.indexOf(" ");
var nombre = str.slice(0, pos);
var apellido = str.slice (pos, (pos+2));
apellido += ".";
return nombre+apellido;
  

}
//console.log(abbrevName("Eugenio Fernandez"));

function protect(str){
  var pos = str.indexOf("@");
  var aReemplazar = str.slice((pos-4), pos);
  var mailProtected = str.replace(aReemplazar, "....");
  return mailProtected;

}
//console.log(protect("eugferman@gmail.com"));

function parameterize(str){
  str = str.split(" ").join("-");
  return str;
}
//console.log(parameterize("Eugenio Fernandez Manrubia"));

function capitalizeFirst(str){
  var inicial = str.charAt(0);
  var mayus = inicial.toUpperCase();
  var name = str.replace("e", mayus);
  return name;
}
//console.log(capitalizeFirst("eugenio fernandez"));

function capitalizeWords(str){
  var arr = str.split(" ");
  var arrMayus = [];
  for(var x = 0; x < arr.length; x++){
    var inicial = arr[x].charAt(0);
    var mayus = inicial.toUpperCase();
    var convert = arr[x].replace(arr[x][0], mayus);
    arrMayus.push(convert);
  }
  var result = arrMayus.join(" ");
  return result;
}
//console.log(capitalizeWords("hola que tal"));
