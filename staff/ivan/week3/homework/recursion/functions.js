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
final = ''
var removeRepeatChars = function(string){
    current = string[0]; //first letter on string
    sub = string.substr(1,string.length) //rest of the string.
    final += current;
    if(sub.indexOf(current)>0){
        sub.replace(/current/g,"");
    }
    removeRepeatChars(sub)
    console.log(sub)
}

removeRepeatChars("xxxaabbcc");