var hangman = require("./logic");
//{buildPlaceholder,  checkValidInput, Hangman}

var game = new hangman.Hangman()

//each describe is a suite of tests... 
describe("Hangman functions and object", function(){
    test("initialize hangman", function(){
        expect(game.attempts).toBe(7);
        expect(game.isFinished).toBe(false);
        expect(game.message).toBe(''); 
    })

    test("build placeholder", function(){
        var result = hangman.buildPlaceholder("pizza");
        expect(result).toBe('_____');
    })

    test("Valid Input", function(){
        var result = hangman.checkValidInput("a", ["2","3",4]);
        expect(result).toBe('a');
    })

    test("Valid Input", function(){
        var result = hangman.checkValidInput('', ["2","3",4]);
        expect(result).toBe(false);
    })


    test("processing letter", function(){
        var result = hangman.processLetter('a',"aabcz","__b__");
        expect(result[1]).toBe('aab__');
    })
})
