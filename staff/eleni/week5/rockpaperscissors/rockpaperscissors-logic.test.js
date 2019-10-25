var rockPaperScissorsLogic=require('./rockpaperscissors-logic');

describe('RPS GAME LOGIC TEST',function(){
    test('should initialize game properly', function(){
        var game=rockPaperScissorsLogic.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
    });
})
describe('RPS GAME WINS HAND 1',function(){
    test('should win hand 1 with paper', function(){
        var result=rockPaperScissorsLogic.play('paper','rock')
        expect(result).toBe('hand1')
    })
    test('should win hand 1 with rock', function(){
        var result=rockPaperScissorsLogic.play('rock','scissors')
        expect(result).toBe('hand1')        
    })
    test('should win hand 1 with scissors', function(){
        var result=rockPaperScissorsLogic.play('scissors','paper')
        expect(result).toBe('hand1')        
    })
})
describe('RPS GAME WINS HAND 2',function(){
    test('should win hand 2 with paper', function(){
        var result=rockPaperScissorsLogic.play('rock','paper')
        expect(result).toBe('hand2')
    })
    test('should win hand 2 with rock', function(){
        var result=rockPaperScissorsLogic.play('scissors','rock')
        expect(result).toBe('hand2')        
    })
    test('should win hand 2 with scissors', function(){
        var result=rockPaperScissorsLogic.play('paper','scissors')
        expect(result).toBe('hand2')        
    })
})
describe('RPS GAME TIE',function(){
    test('should tie with paper', function(){
        var result=rockPaperScissorsLogic.play('paper','paper')
        expect(result).toBe('tie')
    })
    test('should tie with rock', function(){
        var result=rockPaperScissorsLogic.play('rock','rock')
        expect(result).toBe('tie')        
    })
    test('should tie with scissors', function(){
        var result=rockPaperScissorsLogic.play('scissors','scissors')
        expect(result).toBe('tie')        
    })
})