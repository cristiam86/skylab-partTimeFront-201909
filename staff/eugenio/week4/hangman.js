var word = "array";
var wordToGuess = word.split('');
var lives = word.length -1;

console.log(wordToGuess);

if(!wordToGuess.includes('_')){
    console.log("adios")
} else {
    console.log("hola")
}