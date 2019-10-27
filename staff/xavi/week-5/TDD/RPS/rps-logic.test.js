


// la variable rockPaperScissorsLogic  es requerida por la logica del juego 
// ********* VINCULO ENTRE LOGICA Y TEST JS.
var rockPaperScissorsLogic = require('./rps-logic');


// MIRAR SI SE UTILIZA

/*
var gameState;
beforeEach(function() {
  gameState = rockPaperScissorsLogic.initGame();
})
*/




// test 1: Se inicia el juego con las variables globales:

// Titulo del test:
describe('RPS INICIO', function(){
  // este es el mensaje que devuelve si pasa el test
  test('EL juego se ha iniciado correctamente! ', function(){
    // Se declara una variable = game.
    // La variable game es igual la variable de vinculo test/logic y se le pasa la función del archivo de logica .initgame()
    var game = rockPaperScissorsLogic.initGame();

    // dentro de la función init game, se declaran las siguientes varibles
    // logica expect-toBe = expect(variable).se espera que sea(dato)
    // Si cambia el toBe(0) - el trst peta
    expect(game.gamesNumber).toBe(0);
    expect(game.ResultA).toBe(0);
    expect(game.ResultB).toBe(0);
    expect(game.playerWin).toBe(null);
  });
})





describe('RPS -> JUGADOR A gana ', function(){
  test('jugdor A gana con -> paper', function(){
    var result = rockPaperScissorsLogic.play('paper', 'rock', gameState);
    expect(result.lastPlayWinner).toBe('playerA');
  })
  test('should win hand1 -> rock', function(){
    var result = rockPaperScissorsLogic.play('rock', 'scissors', gameState);
    expect(result.lastPlayWinner).toBe('playerA');
  })
  test('should win hand1 -> scissors', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'paper', gameState);
    expect(result.lastPlayWinner).toBe('playerA');
  })
})
  
describe('RPS HAND2 WINS', function(){
  test('should win hand2 -> paper', function(){
    var result = rockPaperScissorsLogic.play('rock', 'paper', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  })
  test('should win hand2 -> rock', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  })
  test('should win hand2 -> scissors', function(){
    var result = rockPaperScissorsLogic.play('paper', 'scissors', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  })
});

describe('RPS GAME TIED', function(){
  test('should end tied hands -> paper', function(){
    var result = rockPaperScissorsLogic.play('paper', 'paper', gameState);
    expect(result.lastPlayWinner).toBe('tie');
  })
  test('should end tied hands -> rock', function(){
    var result = rockPaperScissorsLogic.play('rock', 'rock', gameState);
    expect(result.lastPlayWinner).toBe('tie');
  })
  test('should end tied hands -> scissors', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'scissors', gameState);
    expect(result.lastPlayWinner).toBe('tie');
  })
})

describe('RPS INCORRECT HANDS', function(){
  test('should return error by hand1', function(){
    var result = rockPaperScissorsLogic.play('dd', 'paper', gameState);
    expect(result.lastPlayError).toBe(true);
  })
  test('should return error by hand2', function(){
    var result = rockPaperScissorsLogic.play('paper', 'pp', gameState);
    expect(result.lastPlayError).toBe(true);
  })
})

describe('ACCUMULATES GAMES PLAYED', function(){
  test('should sum 1 game played when error', function() {
    var newGameState = rockPaperScissorsLogic.play('tt', 'paper', gameState);
    expect(newGameState.gamesPlayed).toBe(1);
    var finalGameState = rockPaperScissorsLogic.play('paper', 'tt', newGameState);
    expect(finalGameState.gamesPlayed).toBe(2);
  })

  test('shoudl sum score to hand 1', function(){
    var newGameState = rockPaperScissorsLogic.play('paper', 'rock', gameState);
    expect(newGameState.score1).toBe(1);
    expect(newGameState.score2).toBe(0);
    expect(newGameState.lastPlayWinner).toBe('hand1');
    expect(newGameState.lastPlayError).toBe(false)
  })

  test('shoudl sum score to hand 2', function(){
    var newGameState = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
    expect(newGameState.score1).toBe(0);
    expect(newGameState.score2).toBe(1);
    expect(newGameState.lastPlayWinner).toBe('hand2');
    expect(newGameState.lastPlayError).toBe(false)
  })

  test('shouldn\'t sum scores when tie', function() {
    var newGameState = rockPaperScissorsLogic.play('rock', 'rock', gameState);
    expect(newGameState.score1).toBe(0);
    expect(newGameState.score2).toBe(0);
    expect(newGameState.lastPlayWinner).toBe('tie')
    expect(newGameState.lastPlayError).toBe(false)
  })
})
