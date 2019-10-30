var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

var gameState;
beforeEach(function () {
    gameState = rockPaperScissorsLogic.initGame();
});

function setResultExpect(gamesPlayed, score1, score2, lastPlayWinner, lasPlayStatus) {
    return  {
        gamesPlayed: gamesPlayed,
        score1: score1,
        score2: score2,
        lastPlayWinner: lastPlayWinner,
        lasPlayStatus: lasPlayStatus
    }
}

describe('RPS GAME INIT', function() {
    test('Should initialize game property', function() {
        var resultExpect = setResultExpect(0,0,0,null,false);
        var game = rockPaperScissorsLogic.initGame();
        expect(game).toStrictEqual(resultExpect);
    });
})

describe('RPS WIN HAND 1', function() {
    test('should win hand 1 - Paper', function() {
        var resultExpect = setResultExpect(1,1,0,'hand 1',false);
        var result = rockPaperScissorsLogic.play('paper','rock',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
    test('should win hand 1 - Rock', function() {
        var resultExpect = setResultExpect(1,1,0,'hand 1',false);
        var result = rockPaperScissorsLogic.play('rock','scissors',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
    test('should win hand 1 - Scissors', function() {
        var resultExpect = setResultExpect(1,1,0,'hand 1',false);
        var result = rockPaperScissorsLogic.play('scissors','paper',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
})
describe('RPS WIN HAND 2', function() {
    test('should win hand 2 - Paper', function() {
        var resultExpect = setResultExpect(1,0,1,'hand 2',false);
        var result = rockPaperScissorsLogic.play('rock','paper',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
    test('should win hand 2 - Rock', function() {
        var resultExpect = setResultExpect(1,0,1,'hand 2',false);
        var result = rockPaperScissorsLogic.play('scissors','rock',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
    test('should win hand 2 - Scissors', function() {
        var resultExpect = setResultExpect(1,0,1,'hand 2',false);
        var result = rockPaperScissorsLogic.play('paper','scissors',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
})
describe('RPS HANDS TIE', function() {
    test('should tie hand', function() {
        var resultExpect = setResultExpect(1,0,0,null,false);
        var result = rockPaperScissorsLogic.play('rock','rock',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
})

describe('RPS ERROR HANDS', function() {
    test('should Error Hand1', function() {
        var resultExpect = setResultExpect(1,0,0,null,true);
        var result = rockPaperScissorsLogic.play('aaaaaa','rock',gameState);
        expect(result).toStrictEqual(resultExpect);
    });
     test('should Error Hand2', function() {
         var resultExpect = setResultExpect(1,0,0,null,true);
         var result = rockPaperScissorsLogic.play('paper','bbbbbbb',gameState);
         expect(result).toStrictEqual(resultExpect);
     });
})
