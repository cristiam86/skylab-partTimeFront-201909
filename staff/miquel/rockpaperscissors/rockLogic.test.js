var rockGame = require('./rockLogic');

describe('RPS GAME LOGIC TEST', function() {
    test('should initialize game properly', function() {
        var game = rockGame.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
        expect(game.lastPlayStatus).toBe(null);
        expect(game.lastPlayWinner).toBe(null);
    });

    test('should win hand 1', function() {
        var result = rockGame.play('paper','rock');
        expect(result).toBe('hand1');
    });

    test('should win hand 2', function() {
        var result = rockGame.play('rock','paper');
        expect(result).toBe('hand2');
    });

    test('should draw the game', function() {
        var result = rockGame.play('rock','rock');
        expect(result).toBe('draw');
    });

    test('should show error', function() {
        var result = rockGame.play('rock','pepe');
        expect(result).toBe('error');
    });
    /*test('should show error', function() {
        expect(() => { rockGame.play('rock','pepe') }).toThrow();
    });*/
});

// npm run test
// package.json > test -> jest