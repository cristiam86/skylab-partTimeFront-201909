console.log("hi")

var words = ["pizza"];

var HangmanGame = function(word){
    this.selected_word = word;
    this.placeholder = [];
    this.turns = 6;
    this.initialize = function(){
        for(letter in this.selected_word){
            this.placeholder.push("_");
            document.getElementById("word_to_guess").innerHTML = this.placeholder.join(' ');
        }
        document.getElementById('hangman_img').src='images/1.png';        
    }
    this.trial = function(){
        console.log("this is a trial");
    }
    this.checkUserInput = function(){
        var input_letter = document.getElementById("input_guess").value;
        if(input_letter){
            
        }
    }
}

var game = new HangmanGame(words[0]);
game.initialize();
console.log(game)

document.getElementById('guess_form').addEventListener('submit',game.checkUserInput);
