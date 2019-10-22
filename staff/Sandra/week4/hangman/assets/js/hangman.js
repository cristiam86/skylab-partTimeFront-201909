var words = ["Leon", "perro", "tigre", "caballo", "rana", "dinosaurio"]

var guessing = "";
var wordToGuess ="";
var lives;


function deleteLetterInput(){
    document.getElementById('input-guess').value = "";
}

function replaceLetter(letter){
    wordToGuess.forEach(function(char,i){
        if (char === letter){
            guessing[i] = letter;
        } 
    });
}

function existsLetter(letter){    
    return wordToGuess.includes(letter) ? true : false;
}

function continueGame(){
    if (!guessing.includes("_") && lives > 0){
        document.getElementById("solution").innerHTML="HAS GANADO";
    } else if (lives == 0 ) {
        document.getElementById("solution").innerHTML="HAS PERDIDO";
     }
}

function checkLetter(event){
    event.preventDefault();

    var inputLetter = document.getElementById('input-guess').value;

    if (inputLetter.length > 0){
        if (existsLetter(inputLetter)) {
            replaceLetter(inputLetter);
            iniWord();       
        } else  lives -=1;

        deleteLetterInput();
        continueGame();
    }
}

function iniGame(){
    var index = Math.floor(Math.random() * words.length);
    lives = 4;
    wordToGuess = words[index].split('');
    guessing = wordToGuess.map(function(){return '_'});
    document.getElementById('word-to-guess').innerHTML=guessing.join(' ');;
    document.getElementById("solution").innerHTML = "";
}

iniGame();

document.getElementById('guess-form').addEventListener('submit', checkLetter);
document.getElementById('ini-game').addEventListener('click',iniGame );