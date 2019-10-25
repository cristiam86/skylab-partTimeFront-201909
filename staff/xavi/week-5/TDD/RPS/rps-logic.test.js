var rockPaperScissorsLogic = require('./rps-logic')

describe('title game', function(){

    
    test('init Game', function(){
        var game = rockPaperScissorsLogic.initGame();
        expect(game.gamesplayer).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
    });

    test('gana la mano uno', function(){
        var result = rockPaperScissorsLogic.play('paper', 'rock')
        expect(result).toBe('hand1');
    });

    test('gana la mano uno', function(){
        var result = rockPaperScissorsLogic.play('rock', 'scissors')
        expect(result).toBe('hand1');
    });

    test('gana la mano uno', function(){
        var result = rockPaperScissorsLogic.play('scissors', 'paper')
        expect(result).toBe('hand1');
    });

    test('gana la mano dos', function(){
        var result = rockPaperScissorsLogic.play('rock', 'paper')
        expect(result).toBe('hand2');
    });

    test('gana la mano dos', function(){
        var result = rockPaperScissorsLogic.play('scissors', 'rock',)
        expect(result).toBe('hand2');
    });

    test('gana la mano dos', function(){
        var result = rockPaperScissorsLogic.play('paper', 'scissors')
        expect(result).toBe('hand2');
    });


    test('empate', function(){
        var result = rockPaperScissorsLogic.play('rock', 'rock')
        expect(result).toBe('tie');
    });

    test('empate', function(){
        var result = rockPaperScissorsLogic.play('scissors', 'scissors',)
        expect(result).toBe('tie');
    });

    test('empate', function(){
        var result = rockPaperScissorsLogic.play('paper', 'paper')
        expect(result).toBe('tie');
    });
})