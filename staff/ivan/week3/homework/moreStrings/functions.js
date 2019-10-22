console.log("hello")

// NUMBER HUMANIZED

var numberHumanized = function(number){
    var str = number.toString();
    dict = ["th","st","nd","rd","th"]
    var last = str.substr(str.length-1);
    return parseInt(last)>4 ? number+"th" : number+dict[parseInt(last)];
}

console.log(numberHumanized(301))
console.log(numberHumanized(302))
console.log(numberHumanized(303))
console.log(numberHumanized(304))
console.log(numberHumanized(300))
console.log(numberHumanized(307))
console.log(numberHumanized(308))
console.log(numberHumanized(309))

//text truncate

var textTruncate = function(string,len,seq="..."){
    return string.substr(0,len)+seq
}

console.log(textTruncate("I am so happy to be here and I can play the drums",10));
console.log(textTruncate("There is great wisdom in jokes, Falk",10,"&&&"));