var hangmanLogic = require('./hangmanLogic');

var gameState;
beforeEach(function() {
    gameState = hangmanLogic.initGame();
})

describe('HANGMAN GAME INIT', function() {
    test('should initialize game properly', function() {
        var game = hangmanLogic.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score).toBe(0);
        expect(game.lastPlayError).toBe(false);
        expect(game.errorText).toBe(null);
        expect(game.successText).toBe(null);
        expect(game.inputGuess).toBe(null);
        expect(game.lives).toBe(3);
    });
})
describe('HANGMAN GET RANDOM WORD', function() {
    test('should give random word', function() {
        var result = hangmanLogic.getWord(["maria", "eleni", "thanasis"]);
        expect(result).toBe(("maria") || ("eleni") || ("thanasis"));
    });
})

describe('CHECKS WHOLE WORD', function() {
    test('word given is correct', function() {
        var result = hangmanLogic.guessWord('mars', 'mars', gameState);
        expect(result.lastPlayError).toBe(false);
        expect(result.successText).toBe("totalSuccess");
        expect(result.lives).toBe(3);
        expect(result.image).toBe("totalSuccessImage");
    })
    test('word given is wrong', function() {
        var result = hangmanLogic.guessWord('mars', 'el', gameState);
        expect(result.lastPlayError).toBe(true);
        expect(result.successText).toBe(null);
        expect(result.errorText).toBe("totalFailure");
        expect(result.lives).toBe(0);
        expect(result.image).toBe("totalFailureImage");
    })
});

describe('CHECKS LETTER', function() {
    test('letter is found in word', function() {
        var result = hangmanLogic.checkLetter("mars", "a", gameState);
        expect(result.score).toBe(gameState.score + 1);
        expect(result.lastPlayError).toBe(false);
        expect(result.successText).toBe("success");
        expect(result.errorText).toBe(null);
        expect(result.lives).toBe(gameState.lives);
        expect(result.image).toBe("successImage");
    })
    test('letter is not found in word', function() {
        var result = hangmanLogic.checkLetter('mars', 'b', gameState);
        expect(result.score).toBe(gameState.score);
        expect(result.lastPlayError).toBe(true);
        expect(result.successText).toBe(null);
        expect(result.errorText).toBe("failure");
        expect(result.lives).toBe(gameState.lives - 1);
        expect(result.image).toBe("failureImage");
    })
})