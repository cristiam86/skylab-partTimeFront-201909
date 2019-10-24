var functions = require("./rockpaperscissorLogic");

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


})

