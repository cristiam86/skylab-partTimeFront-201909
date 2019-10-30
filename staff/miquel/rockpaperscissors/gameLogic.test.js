var rockGame = require('./gameLogic');

describe('RPS GAME INIT', function() {
    test('should initialize game properly', function() {
        var game = rockGame.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.playerScores1).toEqual(expect.arrayContaining([]));
        expect(game.playerScores2).toEqual(expect.arrayContaining([]));
        expect(game.lastPlayStatus).toBe(null);
        expect(game.lastPlayWinner).toBe(null);
    });
});
describe('RPS HAND1 TEST', function() {
    test('should win hand 1', function() {
        var result = rockGame.play('paper','rock');
        expect(result).toBe('hand1');
    });
    test('should win hand 1', function() {
        var result = rockGame.play('scissors','paper');
        expect(result).toBe('hand1');
    });
    test('should win hand 1', function() {
        var result = rockGame.play('rock','scissors');
        expect(result).toBe('hand1');
    });
});
describe('RPS HAND2 TEST', function() {
    test('should win hand 2', function() {
        var result = rockGame.play('rock','paper');
        expect(result).toBe('hand2');
    });
    test('should win hand 2', function() {
        var result = rockGame.play('paper','scissors');
        expect(result).toBe('hand2');
    });
    test('should win hand 2', function() {
        var result = rockGame.play('scissors','rock');
        expect(result).toBe('hand2');
    });
});
describe('RPS DRAW TEST', function() {
    test('should draw the game', function() {
        var result = rockGame.play('rock','rock');
        expect(result).toBe('draw');
    });
});
describe('RPS ERRORS TEST', function() {
    test('should show error', function() {
        var result = rockGame.play('rock','pepe');
        expect(result).toBe('error');
    });
    test('should show error', function() {
        var result = rockGame.play('rock','pp');
        expect(result).toBe('error');
    });
    test('should show error', function() {
        var result = rockGame.play('pp','pp');
        expect(result).toBe('error');
    });
    /*test('should show error', function() {
        expect(() => { rockGame.play('rock','pepe') }).toThrow();
    });*/
});

// npm run test
// package.json > test -> jest