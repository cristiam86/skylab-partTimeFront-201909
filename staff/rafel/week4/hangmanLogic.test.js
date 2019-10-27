var RockPaperScissors = require('./hangmanLogic');

describe('HANGMAN GAME LOGIC TEST', function(){
    test('initialize game', function(){
        var game = hangman.playHangman();
        expect(game.wordToGuess).toBe(null);
        expect(game.guessing).toBe(null);
        expect(game.life).toBe(null);
        expect(game.word).toBe(null);  
    })

    test('choose correcte word', function(){
        var result = hangman.randomWord()
        expect(result).toBe('DESCARTES')
    })


})