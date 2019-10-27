const hangmanWords = ['Marcelo', 'Modric', 'Courtois', 'Hazard', 'Benzema', 'Casemiro', 'Varane', 'Carvajal', 'Vinicius']


function checkLetter(letter){
    if(typeof letter !== 'string'){
        return 'error, this should be a string!';
    }
}

function decreaseLives(lives){
    return lives--;
}

function resetHangman(){

}

function startGame(){
    let wordRandom = Math.floor(Math.random() * (9 - 0)) + 0;
    let word = hangmanWords[wordRandom]
    let wordToGuess = word.split('');
    let guessing = wordToGuess.map(function(){return '_'});
    return guessing;

}      
document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
document.getElementById('guess-form').addEventListener('submit', checkLetter);
// document.getElementById('submit-button').addEventListener('click', submitForm)
//console.log("keyword: ",word);

var lives = word.length -2;
var bienvenida = "Bienvenido al juego hangman, tienes "+lives+" intentos para acertar la palabra.";
document.getElementById('bienvenida-mensaje').innerHTML = bienvenida;
      
function checkLetter(event){
  event.preventDefault();
  var inputLetter = document.getElementById('input-guess').value;

  if(lives > 0){
    if(wordToGuess.includes(inputLetter)){
      console.log("Ha elegido la letra: ",inputLetter);
      console.log("Tiene: ",lives," vidas.");
      for(var x = 0; x < wordToGuess.length; x++){
      if(inputLetter == wordToGuess[x]){
        for(var y = 0; y < wordToGuess.length; y++){
          guessing[x] = inputLetter;
          // Borrar contenido del input
          document.getElementById('input-guess').value = "";
        }
      }
    }
      //not matching letter
    } else {
      // decrease lives
      decreaseLives(lives);
      console.log("Ha elegido la letra: ",inputLetter);
      console.log("Tiene: ",lives);
      // Borrar contenido del input
      document.getElementById('input-guess').value = "";
    }
  } else {
    alert ('No te quedan vidas!! Mongolo!!');
  }
  // replace matching letters with inputLetter
  document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
  
}



