var word = "LinkedList";
var wordToGuess = word.split('');
var guessing = wordToGuess.map(function(){return '_'})
document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
document.getElementById('guess-form').addEventListener('submit', checkLetter)
// document.getElementById('submit-button').addEventListener('click', submitForm)
function checkLetter(event){
    event.preventDefault();
    var inputLetter = document.getElementById('input-guess').value;
    console.log(inputLetter);
    //check if inputLetter exists on wordToGuess
        // replace matching letters with inputLetter
        // Borrar contenido del input
        document.getElementById('input-guess').value = "";
    //not matching letter
    // decrease lives
    //Check lives > 0
        //Continue
        //Muerte
}