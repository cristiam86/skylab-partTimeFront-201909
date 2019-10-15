function isString(input) {
  return typeof (input) === 'string';

}
function isBlank(input) {
  var blank = input.length === 0
  return blank;

}

function stringToArray(input) {
  var toArray = input.split(" ");
  return toArray;

}

function truncate(input, number) {
  return input.slice(0, number)
}

function abbrevName(input) {
  var abbrev = input.split(" ");
  var finalName = abbrev[0];

  if (abbrev[1]) {
    var x = abbrev[1].substring(0, 1).concat(".");
    return finalName + " " + x;
  } else {
    return finalName;
  }
}


function protect(input) {

};

function parameterize(input) {
  var param = input.split(" ");
  var x = param.join("-").toLowerCase();
  var point = x.slice(x.lenght, -1);
  var z = point.split('.').join("");
  var j = z.split('\'').join("");

  return j;

}
function capitalizeFirst(input) {
  var lower = input.toLowerCase();
  var firstCap = lower.charAt(0).toUpperCase();
  var result = firstCap + lower.substring(1, lower.lenght);

  return result;

}
function capitalizeWords(input) {
  var r = input.split(" ")
  var emptyArr = [];

  for (var i = 0; i < r.length; i++) {
    var x = r[i]
    var capital = x.charAt(0).toUpperCase()
    var result = capital + x.substring(1, x.length)
    emptyArr.push(result)

  }
  return emptyArr.join(" ")

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