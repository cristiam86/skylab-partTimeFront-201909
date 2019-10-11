function isString(input) {
  if ( typeof input === 'string') return true;
  return false;  
}
function isBlank(input) {
  if ( input === '') return true;
  return false;  
}
function stringToArray(input) {
  array = input.split(' ');
  return array;

}
function truncate(input, number) {
  str = input.slice(0, number);
  return str;
}

function abbrevName(input) {
  var name = input.trim().split(" ");
    if (name.length > 1) {
        return (name[0] + " " + name[1].charAt(0) + ".");
    }
    return name[0];

}
function protect(input) {
  var email = input.split("@");
  var resultado = "";
  if (email[0].length > 5) {
    return resultado =  email[0].slice(0,5) + "..." + "@" + email[1];
  } else {
    return resultado =  email[0].slice(0,2) + "..." + "@" + email[1];
  }
}

function parameterize(input) {
  var parametros = input.toLowerCase();
  for (var i=0; i < parametros.length+1; i++){
    
  }
  return resultado;

}
function capitalizeFirst(input) {
  return '';

}
function capitalizeWords(input) {
  return '';

}
function swapcase(input) {
  return '';

}
function camelize(input) {
  return '';

}
function uncamelize(input) {
  return '';

}
function repeat(input, n) {
  return '';

}
function insert(input, insert, position) {
  return '';

}