var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

describe('RPS GAME INIT', function(){
    test('Should initialize game property', function(){
        var game = rockPaperScissorsLogic.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
        expect(game.score2).toBe(0);
        expect(game.score2).toBe(0);
    });
})
describe('RPS WIN HAND 1', function(){
    test('should win hand 1 - Paper', function(){
        var result = rockPaperScissorsLogic.play('paper','rock');
        expect(result).toBe('hand1')
    });
    test('should win hand 1 - Rock', function(){
        var result = rockPaperScissorsLogic.play('rock','scissors');
        expect(result).toBe('hand1')
    });
    test('should win hand 1 - Scissors', function(){
        var result = rockPaperScissorsLogic.play('scissors','paper');
        expect(result).toBe('hand1')
    });
})
describe('RPS WIN HAND 2', function(){
    test('should win hand 2 - Paper', function(){
        var result = rockPaperScissorsLogic.play('rock','paper');
        expect(result).toBe('hand2')
    });
    test('should win hand 2 - Rock', function(){
        var result = rockPaperScissorsLogic.play('scissors','rock');
        expect(result).toBe('hand2')
    });
    test('should win hand 2 - Scissors', function(){
        var result = rockPaperScissorsLogic.play('paper','scissors');
        expect(result).toBe('hand2')
    });
})
describe('RPS ERROR HANDS', function(){
    test('should Error Hand1', function(){
        var result = rockPaperScissorsLogic.play('aaaaaa','rock');
        expect(result).toBe('error');
    });
    test('should Error Hand2', function(){
        var result = rockPaperScissorsLogic.play('paper','bbbbbbb');
        expect(result).toBe('error');
    });
})
