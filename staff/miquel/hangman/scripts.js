function Hangman() {
    this.wordsBucket = [
        "acelga",
        "alcachofa",
        "calabacin",
        "cebolla",
        "esparrago",
        "lechuga",
        "patata",
        "pepino",
        "tomate",
        "zanahoria"
    ];
    this.wordToGuess = [];
    this.progressWordToGuess = [];
    this.lifeCount = 0;
    this.gameOn = true;

    this.randomNum = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    this.genWordToGuess = function() {
        let list = this.wordsBucket;
        let word = list[this.randomNum(list.length)];
        
        console.log("La palabra correcta es:", word);
        
        this.wordToGuess = word.split('');
        this.progressWordToGuess = this.hideWordToGuess();
        this.lifeCount = this.computeLifes();
    }
    this.hideWordToGuess = function() {
        return this.wordToGuess.map(function(){return '_'});
    }
    this.checkLetter = function(passedLetter) {
        let checked = false;
        this.wordToGuess.map(function(letter, index) {
            if(passedLetter == letter) {
                this.progressWordToGuess[index] = letter;
                checked = true;
            }
        }.bind(this));

        if(!checked)
            this.lifeCount -= 1;
        
        this.gameFinished();
    }
    this.gameFinished = function() {
        this.gameOn = this.progressWordToGuess.find(function(elem) { return elem === '_' })
    }
    this.computeLifes = function() {
        return Math.floor(this.wordToGuess.length / 2);
    }
}

var game1 = new Hangman();
game1.genWordToGuess();

document.getElementById('word-to-guess').innerHTML = game1.progressWordToGuess.join(' ');
document.getElementById('turn-count').innerHTML = 'Tienes ' + game1.lifeCount + ' vidas';
document.getElementById('submit-button').addEventListener('click', function() {
    
    let letter = document.getElementById('letter-input').value;
    game1.checkLetter(letter);
    
    document.getElementById('word-to-guess').innerHTML = game1.progressWordToGuess.join(' ');
    document.getElementById('turn-count').innerHTML = 'Tienes ' + game1.lifeCount + ' vidas';
    document.getElementById('letter-input').value = '';
    document.getElementById('letter-input').focus();

    if(game1.lifeCount <= 0) {
        document.getElementById('turn-count').innerHTML = 'Perdiste :('
        document.getElementById('guess-form').style.display = 'none';
    }

    if(game1.lifeCount > 0 && !game1.gameOn) {
        document.getElementById('turn-count').innerHTML = 'Ganaste :)'
        document.getElementById('guess-form').style.display = 'none';
    }
    
});
