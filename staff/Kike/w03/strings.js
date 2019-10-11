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
  var res = input[0].toUpperCase();
  var res1 = input.slice(0, 1);
  res += res1;

  console.log(res);
  return res;

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