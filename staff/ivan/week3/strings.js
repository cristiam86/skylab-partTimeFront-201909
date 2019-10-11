function isString(input) {
  return typeof input === 'string';

}
function isBlank(input) {
  return input.length===0;

}
function stringToArray(input) {
  var split = input.split(" ");
  //console.log(split);
  return split;

}
function truncate(input, number) {
  var trunc = input.substring(0,number);
  return trunc;
}

function abbrevName(input) {
  var split = input.split(" ");
  var new_text = "";
  if(split.length>1){
    new_text=split[0]+" "+split[1][0]+"."
  } else{
    new_text=split[0];
  }
  //console.log(new_text)
  return new_text;
}

function protect(input) {
  var protected = "";
  //console.log(pos_of_at);
  var user = input.split("@")[0];
  //console.log(user)
  if(user.length>=8){
    protected = user.substr(0,5)+"...@"+input.split("@")[1];
    //console.log(protected)
  } else{
    protected = user.substr(0,user.length-3)+"...@"+input.split("@")[1];
    //console.log(protected)
  }
  return protected;
}


function parameterize(input) {
  var clear_string = input.replace(/[^\w\s]|_/g, "").toLowerCase();
  var into_array = clear_string.split(" ");
  var parameter = "";
  //console.log(into_array)
  for(var i in into_array){
    parameter += into_array[i] + "-";
  }
  //console.log(parameter.substr(0,parameter.length-1))
  return parameter.substr(0,parameter.length-1); //remove the last -
}

function capitalizeFirst(input) {
  var upper_letter = input[0].toUpperCase();
  var new_string = upper_letter+input.substr(1,input.length).toLowerCase();
  //console.log(new_string);
  return new_string;

}
function capitalizeWords(input) {
  var split = input.split(" ");
  var new_string = "";
  //console.log(split)
  for (word in split){
    new_string += split[word][0].toUpperCase()+split[word].substr(1,split[word].length)+" "
  }
  //console.log(new_string)
  return new_string.substr(0,new_string.length-1);

}

function swapcase(input) {
  var split = input.split("");
  //console.log(split)
  var new_string = '';
  for(letter in split){
    if(split[letter] === split[letter].toUpperCase()){
      new_string += split[letter].toLowerCase();
    } else if(split[letter] === split[letter].toLowerCase()){
      new_string += split[letter].toUpperCase();
    }
  }
  //console.log(new_string)
  return new_string;
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