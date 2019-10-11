/*
isString(input) 
Write a JavaScript function to check whether an input is a string or not.
*/
function isString(input){
    if (typeof(input) === 'string') return true;
    return false;
}
/*
isBlank(input)
Write a JavaScript function to check whether a string is blank or not.
*/
function isBlank(input){
    if (input.length == 0) return true;
    return false;
}
/*
stringToArray(input)
Write a JavaScript function to split a string and convert it into an array of words.
*/
function stringToArray(input) {
  return input.split(" ");
}
/*
truncate(input, number)
Write a JavaScript function to remove specified number of characters from a string.
*/
function truncate(input, number) {
    return input.slice(0,number);
}
/*
abbrevName(input)
Write a JavaScript function to convert a string in abbreviated form.
*/
function abbrevName(input){
    var nameAbbrev;
    var name;
    if (input.length > 0){ 
        name = input.split(" ");
        nameAbbrev = name[0];
        if (name.length == 2) nameAbbrev = name[0] + ' ' + name[1][0] + '.';
    }
    return nameAbbrev;
}
/*
protect(input)
Write a JavaScript function to hide email addresses to protect from unauthorized user.
*/
function protect(input){
    var email = input.split("@");
    var points = '...';
    var pos;
    var part1;
    if (email[0].length > 5) { 
        part1 = email[0].slice(0,5);
    }
    else{
        pos = email[0].length / 2;
        part1 = email[0].slice(0,pos);
    }
    var part2 = email[1];
    return part1.concat(points,"@",part2);
}

/*
parameterize(input)
Write a JavaScript function to parameterize a string.
*/
function parameterize(input){
  return input.toLowerCase().replace(/\s/g, "-").replace(/\./g,"").replace(/\'/g,"");
}
/*
capitalizeFirst(input)
Write a JavaScript function to capitalize the first letter of a string.
*/
function capitalizeFirst(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
/*
capitalizeWords(input)
Write a JavaScript function to capitalize the first letter of each word in a string.
*/
function capitalizeWords(input){
    var modInput = input.toLowerCase().split(" ");
    var resultFinal = "";
    for (i =0; i < modInput.length; i +=1){
        modInput[i] = modInput[i].charAt(0).toUpperCase() + modInput[i].slice(1) + " ";
        resultFinal = resultFinal.concat(modInput[i]);
    }
   return resultFinal.slice(0,-1);
}

/*
swapcase(input)
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
*/
function swapcase(input){
    var letter;
    var letterUpper;
    var result ="";
     for (var i = 0; i < input.length; i +=1){
        letter = input.charAt(i);
        letterUpper = letter.toUpperCase();
        if (letter == letterUpper){
            result=result.concat(input.charAt(i).toLowerCase());
        }else {
            result=result.concat(input.charAt(i).toUpperCase());
        }
    }
    return result;
}

/*
camelize(input)
Write a JavaScript function to convert a string into camel case.
*/
function camelize(input){
    var words = input.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i +=1){
        result = result.concat(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    
    return result.replace(" ","");
}

/*
uncamelize(input)
Write a JavaScript function to uncamelize a string.
*/
function uncamelize(input,char){
    var words = input.split("");
    var letterUpper;
    var result = "";
    for (var i = 0; i < words.length; i +=1){
        letterUpper = words[i].toUpperCase();
        if(words[i] == letterUpper){
            result = result.concat(char,words[i]);
        }else {
            result = result.concat(words[i]);
        }
    }    
   return result.toLowerCase();
}

/*
repeat(input, n)
Write a JavaScript function to concatenates a given string n times (default is 1).
*/
function repeat(input,n){
    return input.repeat(n);
}

/*
insert(input, insert, position)
Write a JavaScript function to insert a string within a string at a particular position (default is 1).
*/
function insert(input, insert, position){
    var part1 = input.slice(0,position);
    var part2 = input.slice(position,input.length);
   return part1.concat(insert,part2);
}
