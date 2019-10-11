function isString(input) {
  return typeof input === 'string';

}
function isBlank(input) {
  return !(input.length > 0);

}
function stringToArray(input) {
  return input.split(" ");

}
function truncate(input, number) {
  return input.substr(0, number);;

}
function abbrevName(input) {
  if(input.indexOf(" ") > 0) 
    return input.substr(0, input.indexOf(" ") +2)+".";
  else return input;

}
function protect(input) {
  var pos_fin = input.indexOf("@");
  var pos_init = input.indexOf("_");
  if(input.indexOf("_") === -1) pos_init = 2;
  
  return input.replace(input.substr(pos_init, pos_fin-pos_init), "...");
}
function parameterize(input) {
  return input.replace(/[\.\']/g, "").split(" ").join("-").toLowerCase();

}
function capitalizeFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

}
function capitalizeWords(input) {
  return input.split(" ").map((word) => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}
function swapcase(input) {
  var str = char = '';
  
  for(var i = 0; i < input.length; i++) {
    char = input.slice(i,i+1);

    if(char === char.toLowerCase()) char = char.toUpperCase(); 
    else char = char.toLowerCase();
    
    str += char;
  }

  return str;
}
function camelize(input) {
  return input.split(' ').map( (word) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join("");

}
function uncamelize(input, sign) {

  for(var i = 0; i < input.length; i++) {
    char = input.slice(i, i+1);
    if(char === char.toUpperCase())
      input = input.replace(char,sign + char.toLowerCase());
  }
  
  return input;
}
function repeat(input, n) {
  var str = '';
  for(var i = 0; i < n; i++)
    str += input;
  
  return str;

}
function insert(input, insert, position) {
  return input.slice(0, position) + insert + input.slice(position);

}