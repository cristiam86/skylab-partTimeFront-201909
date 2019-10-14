console.log("hello")

//This accomplishes the goal of the problem without using recursion...
var removeRepeatCharsSimple = function(string){
    var all = string.split('');
    //console.log("TCL: removeRepeatChars -> all", all);
    var uniques = all.filter(function(letter,index){
        return all.indexOf(letter) >= index; 
    });
    //console.log("TCL: removeRepeatChars -> uniques", uniques);
    uniques_string = uniques.join();
    console.log("TCL: removeRepeatCharsSimple -> uniques_string", uniques_string)
}

removeRepeatCharsSimple("aabbcc");
removeRepeatCharsSimple("cccddffdfffdcccdcvv");

//option with recursion

final=''; //how can we handle this?
var removeRepeatChars = function(string){
    current = string[0]; //first letter on string

    sub = string.substr(1,string.length) //rest of the string.

    if(sub.length===0){ //we need some sort of break so that recursion can stop
        console.log(final);
        return final;
    }

    final += current;

    var regex = new RegExp(current,"g");
    var clean = sub.replace(regex,"");//removes the repeated letters

    removeRepeatChars(clean);
}

removeRepeatChars("1112223333333444455555555556666");
removeRepeatChars("aaabbbbccddfgyyuuuuuuu");

//how to use regular expression constructors for replace...
var x = 'z'
var regex = new RegExp(x,"g");
console.log(regex)
console.log("pizzzzza".replace(/z/g,""));
console.log("pizzzzza".replace(/z/g,""));

function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
 }

 console.log(4*3*2*1);
 console.log(factorial(4));