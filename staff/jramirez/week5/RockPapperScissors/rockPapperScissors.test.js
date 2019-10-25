var rockPapperScissors = require('./rockPapperScissors.js');

describe('RPS GAME LOGIC TEST', function() {
    
    test('initialize game', function() {
        var game = rockPapperScissors.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
    });
})

describe('RPS HAND1 WIN', function() {
    test('should win hand 1 --> Paper', function() {
        var result = rockPapperScissors.play('paper', 'rock');
        expect(result).toBe('hand1');
    });

    test('should win hand 1 --> Rock', function() {
        var result = rockPapperScissors.play('rock', 'scissors');
        expect(result).toBe('hand1');
    });

    test('should win hand 1 --> Scissors', function() {
        var result = rockPapperScissors.play('scissors', 'paper');
        expect(result).toBe('hand1');
    });
    
})

describe('RPS HAND2 WIN', function() {
    test('should win hand 2 --> Paper', function() {
        var result = rockPapperScissors.play('rock', 'paper');
        expect(result).toBe('hand2');
    });

    test('should win hand 2 --> Rock', function() {
        var result = rockPapperScissors.play('scissors', 'rock');
        expect(result).toBe('hand2');
    });

    test('should win hand 2 --> Scissors', function() {
        var result = rockPapperScissors.play('paper', 'scissors');
        expect(result).toBe('hand2');
    });
    
})

describe('RPS EMPATE', function() {
    test('should end tied hands --> Paper', function() {
        var result = rockPapperScissors.play('paper', 'paper');
        expect(result).toBe('tie');
    });

    test('should end tied hands --> Rock', function() {
        var result = rockPapperScissors.play('rock', 'rock');
        expect(result).toBe('tie');
    });

    test('should end tied hands --> Scissors', function() {
        var result = rockPapperScissors.play('scissors', 'scissors');
        expect(result).toBe('tie');
    });
    
})