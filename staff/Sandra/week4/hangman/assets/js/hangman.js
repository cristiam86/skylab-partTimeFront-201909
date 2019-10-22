var words = ["LEON", "PERRO", "TIGRE", "CABALLO", "RANA", "DINOSAURIO"]

var guessing = "";
var wordToGuess ="";
var lives;

function iniWord(){
    document.getElementById('word-to-guess').innerHTML=guessing.join(' ');
}
function deleteLetterInput(){
    document.getElementById('input-guess').value = "";
}

function replaceLetter(letter){
    wordToGuess.forEach(function(char,i){
        if (char.toUpperCase() === letter.toUpperCase()){
            guessing[i] = letter;
        } 
    });
}

function existsLetter(letter){    
    return wordToGuess.includes(letter) ? true : false;
}

function continueGame(){
    var result  = "VIDAS: " + lives ;
    var cont = true;
    if (!guessing.includes("_") && lives > 0){
        result = "HAS GANADO";
    } else if (lives == 0)  {
        result = "HAS PERDIDO";
        cont = false;        
    }     
    document.getElementById("solution").innerHTML = result;
    return cont;
}

function checkLetter(event){
    event.preventDefault();

    var inputLetter = (document.getElementById('input-guess').value).toUpperCase();

    if (inputLetter.length > 0 && continueGame()){
        if (existsLetter(inputLetter)) {
            replaceLetter(inputLetter);
            iniWord();       
        } else  lives -=1;
    }
    
    deleteLetterInput();
}

function iniGame(){
    var index = Math.floor(Math.random() * words.length);
    lives = 4;
    wordToGuess = words[index].split('');
    guessing = wordToGuess.map(function(){return '_'});
    iniWord();
    document.getElementById("solution").innerHTML = "VIDAS: " + lives;
}

iniGame();

document.getElementById('guess-form').addEventListener('submit', checkLetter);
document.getElementById('ini-game').addEventListener('click',iniGame );