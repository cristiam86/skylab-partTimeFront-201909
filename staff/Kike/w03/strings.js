function isString(variable) {
  var res = false;
  var tipo = typeof variable;
  console.log(tipo);
  tipo === 'string' ? res = true : res = false;
  return res;
}


function isBlank(variable) {
  var res = false;
  var longitud = 0;
  var tipo = typeof variable;
  tipo === 'string' ? res = true : res = false;
  if (res) {
    longitud = variable.length;
    longitud === 0 ? res = true : res = false;
    console.log(res);
  }
  return res;
}


function stringToArray(variable) {
  var res;

  variable = variable.split(' ');
  res = variable;
  console.log(res);


  return res;
}


function truncate(input, number) {
  var res = input.slice(0, number)
  console.log(res);
  return res;
}

function abbrevName(input) {
  var array;
  var res;
  array = input.split(' ');
  name = array[0];
  if (array[1]) {
    name += ' ';
    surname = array[1].slice(0, 1);
    surname += '.';
    res = name + surname;
  }
  else {
    res = name;
  }

  console.log(res);
  return res;
}
function protect(input) {
  var array;
  var res;
  var mail;
  mail = input.split('@');
  array = input.split('_');
  name = array[0];
  if (array[1]) {
    name += '...@' + mail[1];
    res = name;
  }
  else {
    name = name.slice(0, 2);
    name += '...@' + mail[1];
    res = name;
  }

  console.log(res);
  return res;

}
function parameterize(input) {
  input = input.toLowerCase();
  input = input.replace(/\./g, '');
  input = input.replace(/\'/g, '');
  var res = input.replace(/ /g, '-');

  console.log(res);
  return res;

}
function capitalizeFirst(input) {
  var res = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();

  console.log(res);
  return res;

}
function capitalizeWords(input) {
  var array = input.split(' ');

  for (i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1).toLowerCase();
  }
  res = array.join(' ');
  console.log(res);
  return res;
}
function swapcase(input) {
  var res = '';
  var character;

  for (i = 0; i < input.length; i++) {
    character = input.charAt(i);
    if (character == character.toUpperCase()) {
      res += character.toLowerCase();
    }
    if (character == character.toLowerCase()) {
      res += character.toUpperCase();
    }
  }

  console.log(res);
  return res;
}
function camelize(input) {
  var array = input.split(' ');

  for (i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
  }
  res = array.join('');
  console.log(res);
  return res;

}
function uncamelize(input, parameter) {
  var res;
  var array = input.split(/(?=[A-Z])/);
  for (i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  res = array.join(parameter);
  console.log(res);
  return res;

}
function repeat(input, n) {
  var res = '';
  for (i = 0; i < n; i++) {
    res += input;
  }
  console.log(res);
  return res;

}
function insert(input, insert, position) {
  var res = '';

  res = input.slice(0, position) + insert + input.slice(position);

  console.log(res);
  return res;

}