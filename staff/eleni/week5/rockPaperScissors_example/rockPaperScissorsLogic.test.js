var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

var gameState;
beforeEach(function() {
    gameState = rockPaperScissorsLogic.initGame();
})

describe('RPS GAME INIT', function() {
    test('should initialize game properly', function() {
        var game = rockPaperScissorsLogic.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
        expect(game.lastPlayWinner).toBe(null);
        expect(game.lastPlayError).toBe(false);
    });
})

describe('RPS HAND1 WINS', function() {
    test('should win hand1 -> paper', function() {
        var result = rockPaperScissorsLogic.play('paper', 'rock', gameState);
        expect(result.lastPlayWinner).toBe('hand1');
    })
    test('should win hand1 -> rock', function() {
        var result = rockPaperScissorsLogic.play('rock', 'scissors', gameState);
        expect(result.lastPlayWinner).toBe('hand1');
    })
    test('should win hand1 -> scissors', function() {
        var result = rockPaperScissorsLogic.play('scissors', 'paper', gameState);
        expect(result.lastPlayWinner).toBe('hand1');
    })
})

describe('RPS HAND2 WINS', function() {
    test('should win hand2 -> paper', function() {
        var result = rockPaperScissorsLogic.play('rock', 'paper', gameState);
        expect(result.lastPlayWinner).toBe('hand2');
    })
    test('should win hand2 -> rock', function() {
        var result = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
        expect(result.lastPlayWinner).toBe('hand2');
    })
    test('should win hand2 -> scissors', function() {
        var result = rockPaperScissorsLogic.play('paper', 'scissors', gameState);
        expect(result.lastPlayWinner).toBe('hand2');
    })
});

describe('RPS GAME TIED', function() {
    test('should end tied hands -> paper', function() {
        var result = rockPaperScissorsLogic.play('paper', 'paper', gameState);
        expect(result.lastPlayWinner).toBe('tie');
    })
    test('should end tied hands -> rock', function() {
        var result = rockPaperScissorsLogic.play('rock', 'rock', gameState);
        expect(result.lastPlayWinner).toBe('tie');
    })
    test('should end tied hands -> scissors', function() {
        var result = rockPaperScissorsLogic.play('scissors', 'scissors', gameState);
        expect(result.lastPlayWinner).toBe('tie');
    })
})

describe('RPS INCORRECT HANDS', function() {
    test('should return error by hand1', function() {
        var result = rockPaperScissorsLogic.play('dd', 'paper', gameState);
        expect(result.lastPlayError).toBe(true);
    })
    test('should return error by hand2', function() {
        var result = rockPaperScissorsLogic.play('paper', 'pp', gameState);
        expect(result.lastPlayError).toBe(true);
    })
})

describe('ACCUMULATES GAMES PLAYED', function() {
    test('shouldnt sum 1 game played when error', function() {
        var newGameState = rockPaperScissorsLogic.play('tt', 'paper', gameState);
        expect(newGameState.gamesPlayed).toBe(gameState.gamesPlayed);
        var finalGameState = rockPaperScissorsLogic.play('paper', 'tt', newGameState);
        expect(finalGameState.gamesPlayed).toBe(gameState.gamesPlayed);
    })

})