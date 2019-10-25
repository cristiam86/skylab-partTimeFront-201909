var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

describe('RPS GAME TES LOGIC', () => {
    test('init game', () => {
        var game = rockPaperScissorsLogic.initGame();
        expect(game.gamesPlayed).toBe(0);
        expect(game.score1).toBe(0);
        expect(game.score2).toBe(0);
    });

    test('hand 1 win paper',()=>{
        var result = rockPaperScissorsLogic.play('paper','rock');
        expect(result).toBe('hand1');
    });
    test('hand 1 win scissors',()=>{
        var result = rockPaperScissorsLogic.play('scissors','paper');
        expect(result).toBe('hand1');
    });
    test('hand 1 win rock',()=>{
        var result = rockPaperScissorsLogic.play('rock','scissors');
        expect(result).toBe('hand1');
    });

    test('hand 2 win paper',()=>{
        var result = rockPaperScissorsLogic.play('rock','paper');
        expect(result).toBe('hand2');
    });

    test('hand 2 win scissors',()=>{
        var result = rockPaperScissorsLogic.play('paper','scissors');
        expect(result).toBe('hand2');
    });

    test('hand 2 win rock',()=>{
        var result = rockPaperScissorsLogic.play('scissors','rock');
        expect(result).toBe('hand2');
    });

    test('hand Nadie win scissors',()=>{
        var result = rockPaperScissorsLogic.play('scissors','scissors');
        expect(result).toBe('ninguno');
    });

    test('hand Nadie win rock',()=>{
        var result = rockPaperScissorsLogic.play('rock','rock');
        expect(result).toBe('ninguno');
    });

    test('hand Nadie win paper',()=>{
        var result = rockPaperScissorsLogic.play('paper','paper');
        expect(result).toBe('ninguno');
    });

    test('comprobamos si es bool',()=>{
        var result = rockPaperScissorsLogic.play(true,false);
        expect(result).toBe('introduce un valor valido');
    });

    test('comprobamos si es un num',()=>{
        var result = rockPaperScissorsLogic.play(9,6);
        expect(result).toBe('introduce un valor valido');
    });

    test('comprobamos si es otra palabra',()=>{
        var result = rockPaperScissorsLogic.play('cacharro','pepito');
        expect(result).toBe('introduce un valor valido');
    });

});