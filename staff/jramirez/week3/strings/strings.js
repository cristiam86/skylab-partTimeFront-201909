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
  var url = input.toLowerCase().replace(/\s/g, "-").replace(/\'/g, "");
  return result = url.replace(/\./g, "");
}
function capitalizeFirst(input) {
  text = input.toLowerCase();
  result = text.charAt(0).toUpperCase() + text.slice(1);
  return result;

}

function capitalizeWords(input) {
  var text = input.toLowerCase().split(' ');
  for (var i = 0; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].substring(1);     
  }
  return text.join(' ');
}

function swapcase(input) {
  var result = "";
    for(var i = 0; i<input.length; i++){
        if(input[i] === input[i].toLowerCase()){
          result += input[i].toUpperCase();
        }else {
          result += input[i].toLowerCase();
        }
    }
    return result;

}
function camelize(input) {
  return input.replace(/^([a-z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();        
});

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