var RockPaperScissors = require('./RockPaperScissorsLogic');

describe('RPS GAME LOGIC TEST', function(){
    test('initialize game', function(){
        var game = RockPaperScissors.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
    })
    test('win hand1', function(){
        var result = RockPaperScissors.play('paper', 'rock')
        expect(result).toBe('hand1')
    })

    test('win hand1', function(){
        var result = RockPaperScissors.play('scissors', 'paper')
        expect(result).toBe('hand1')
    })
    
    test('win hand1', function(){
        var result = RockPaperScissors.play('rock', 'scissors')
        expect(result).toBe('hand1')
    })
    
    test('win hand2', function(){
        var result = RockPaperScissors.play('paper', 'scissors')
        expect(result).toBe('hand2')
    })    
    
    test('win hand2', function(){
        var result = RockPaperScissors.play('scissors', 'rock')
        expect(result).toBe('hand2')
    })

    test('win hand2', function(){
        var result = RockPaperScissors.play('rock', 'paper')
        expect(result).toBe('hand2')
    })

    test('tie', function(){
        var result = RockPaperScissors.play('rock', 'rock')
        expect(result).toBe('tie')
    })

    test('tie', function(){
        var result = RockPaperScissors.play('scissors', 'scissors')
        expect(result).toBe('tie')
    })

    test('tie', function(){
        var result = RockPaperScissors.play('paper', 'paper')
        expect(result).toBe('tie')
    })


})

// npm run test