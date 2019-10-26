var functions = require("./rpsLogic");

//each describe is a suite of tests... 
describe("RPS game logic", function(){
    test("initialize game", function(){
        var game = functions.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0); 
    })

    test("should win hand 1", function(){
        var result = functions.play('paper', 'rock');
        expect(result).toBe('hand1');
    })

    test("should win hand 2", function(){
        var result = functions.play('paper', 'scissors');
        expect(result).toBe('hand2');
    })

    test("should be tie", function(){
        var result = functions.play('paper', 'paper');
        expect(result).toBe('tie');
    })
})

//on the directory, type npm test to run your tests...
