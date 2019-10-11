function isString(input) {
  if (typeof(input)==='string'){
    return true;
  } else{
    return false;
  }
}
function isBlank(input) {
    return (!input || 0 === input.length);
}
function stringToArray(input) {
    return (input.split(' '));
}
function truncate(input, number) {
    if ((typeof(input) === 'string') && (number=>0)) {
        return input.slice(0, number);
  };
}
function abbrevName(input) {
    var splitNames=input.trim().split(" ");
    if(splitNames.length>1){
      return (splitNames[0]+ " "+splitNames[1].charAt(0)+".")
    }else{
      return splitNames[0]
    }
}
  function protect(input) {
    var splitEmail=input.split("@");
    part1=splitEmail[0];
    part2=splitEmail[1];
    var result=part1.split("_");
    if(result.length>1){
      return (result[0]+"...@"+part2)
    }else if(result.length===1){
      return (result[0].slice(0,2)+"...@"+part2)
    }
  }
function parameterize(input) {
      return input.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-").replace("'","").replace(".","");

}
function capitalizeFirst(input) {
    minString=input.toLowerCase();
    return minString.charAt(0).toUpperCase()+minString.slice(1);
}
function capitalizeWords(input) {
    var splitStr = input.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
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
   var splitStr = input.split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(''); 
}


function uncamelize(input,symbol) {
  if(typeof(symbol) == "undefined") {
    symbol = " ";
  }
  var input = input.replace(/[A-Z]/g, function (letter) 
    {
    return symbol + letter.toLowerCase();
    });
  return input.replace("/^" + symbol + "/", '');

}
function repeat(input, n) {
    return  new Array(n + 1).join(input);
}
function insert(input, insert, position) {
 
   return input.slice(0, position) + insert + input.slice(position);

}