var functions = require("./rpsLogic");

//each describe is a suite of tests... 
describe("New RPS logic functions...", function(){

    g = new Game();

    test("Initialize the game object", function(){
        expect(g.gamesPlayed).toBe(0);
    })

    test("original score1 should be 0", function(){
        expect(g.score1).toBe(0);
    })

    test("should win rock", function(){
        var result = g.play('paper', 'rock');
        expect(result).toBe('rock');
    })

    test("should win paper", function(){
        var result = g.play('rock', 'paper');
        expect(result).toBe('paper');
    })

    test("should be tie", function(){
        var result = functions.play('paper', 'paper');
        expect(result).toBe('tie');
    })

    test("should be hand2", function(){
        var result = functions.play('scissors', 'paper');
        expect(result).toBe('scissors');
    })
})

//on the directory, type npm test to run your tests...
