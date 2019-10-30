var hangmanLogic = require('./hangmanLogic');

var gameState;
beforeEach(function () {
  gameState = hangmanLogic.newGame();
})

describe('hangman GAME INIT', function () {
  test('should initialize game properly', function () {
    var game = hangmanLogic.newGame();
    expect(game.palabraEscogida).toBe('');
    expect(game.palabraAmagada).toBe('');
    expect(game.letraEscogida).toBe('');
    expect(game.vidas).toBe(6);
  });
})
