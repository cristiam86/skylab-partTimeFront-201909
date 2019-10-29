


// la variable rockPaperScissorsLogic  es requerida por la logica del juego 
// ********* VINCULO ENTRE LOGICA Y TEST JS.
var rockPaperScissorsLogic = require('./rps-logic');


// MIRAR SI SE UTILIZA


var gameState;
beforeEach(function() {
  gameState = rockPaperScissorsLogic.initGame();
})





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
    expect(game.gamesCounter).toBe(0);
    expect(game.resultA).toBe(0);
    expect(game.resultB).toBe(0);
    expect(game.playerWin).toBe(null);
  });
})




// TEST DE JUGADOR A GANA B
describe('RPS -> JUGADOR A gana ', function(){
  test('Jugdor A gana con: Paper', function(){
    var result = rockPaperScissorsLogic.play('paper', 'rock', gameState);
    expect(result.playerWin).toBe('playerA');
  })
  test('Jugdor A gana con: Rock', function(){
    var result = rockPaperScissorsLogic.play('rock', 'scissors', gameState);
    expect(result.playerWin).toBe('playerA');
  })
  test('Jugdor A gana con: Scissors', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'paper', gameState);
    expect(result.playerWin).toBe('playerA');
  })
})


// TEST DE JUGADOR B GANA A
describe('RPS -> JUGADOR B gana', function(){
  test('Jugdor A gana con: Paper', function(){
    var result = rockPaperScissorsLogic.play('rock', 'paper', gameState);
    expect(result.playerWin).toBe('playerB');
  })
  test('Jugdor A gana con: Rock', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
    expect(result.playerWin).toBe('playerB');
  })
  test('Jugdor A gana con: Scissors', function(){
    var result = rockPaperScissorsLogic.play('paper', 'scissors', gameState);
    expect(result.playerWin).toBe('playerB');
  })
});

describe('RPS -> Empate', function(){
  test('Los dos jugadores han introducido: paper', function(){
    var result = rockPaperScissorsLogic.play('paper', 'paper', gameState);
    expect(result.playerWin).toBe('tie');
  })
  test('Los dos jugadores han introducido: rock', function(){
    var result = rockPaperScissorsLogic.play('rock', 'rock', gameState);
    expect(result.playerWin).toBe('tie');
  })
  test('Los dos jugadores han introducido: scissors', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'scissors', gameState);
    expect(result.playerWin).toBe('tie');
  })
})


describe('RPS ACUMULADO', function(){
  test('should sum 1 game played when error', function() {
    var newGameState = rockPaperScissorsLogic.play('tt', 'paper', gameState);
    expect(newGameState.gamesCounter).toBe(1);
    var finalGameState = rockPaperScissorsLogic.play('paper', 'tt', newGameState);
    expect(finalGameState.gamesCounter).toBe(2);
  })

  test('shoudl sum score to hand 1', function(){
    var newGameState = rockPaperScissorsLogic.play('paper', 'rock', gameState);
    expect(newGameState.resultA).toBe(1);
    expect(newGameState.resultB).toBe(0);
    expect(newGameState.playerWin).toBe('playerA');
  })

  test('shoudl sum score to hand 2', function(){
    var newGameState = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
    expect(newGameState.resultA).toBe(0);
    expect(newGameState.resultB).toBe(1);
    expect(newGameState.playerWin).toBe('playerB');
  })


  // NO se suman puntuaciones
  test('No se suman puntuaciones', function(){
    var newGameState = rockPaperScissorsLogic.play('rock', 'rock', gameState);
    expect(newGameState.resultA).toBe(0);
    expect(newGameState.resultB).toBe(0);
    expect(newGameState.playerWin).toBe('tie')
  })


  test('No se suman puntuaciones', function(){
    var newGameState = rockPaperScissorsLogic.play('paper', 'paper', gameState);
    expect(newGameState.resultA).toBe(0);
    expect(newGameState.resultB).toBe(0);
    expect(newGameState.playerWin).toBe('tie')
  })

  test('No se suman puntuaciones', function(){
    var newGameState = rockPaperScissorsLogic.play('scissors', 'scissors', gameState);
    expect(newGameState.resultA).toBe(0);
    expect(newGameState.resultB).toBe(0);
    expect(newGameState.playerWin).toBe('tie')
  })


})
