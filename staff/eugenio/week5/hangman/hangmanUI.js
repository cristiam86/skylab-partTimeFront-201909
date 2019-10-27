const hangmanWords = ['Marcelo', 'Modric', 'Courtois', 'Hazard', 'Benzema', 'Casemiro', 'Varane', 'Carvajal', 'Vinicius']

let wordRandom = Math.floor(Math.random() * (9 - 0)) + 0;
let word = hangmanWords[wordRandom]
let wordToGuess = word.split('');
let guessing = wordToGuess.map(function(){return '_'});
      
document.getElementById('word-to-guess').innerHTML = guessing.join(' ');