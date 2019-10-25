var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

describe('RPS GAME LOGIC TEST', function(){
  test('initialize game', function(){
    var game = rockPaperScissorsLogic.initGame();
    expect(game.gamesPlayed).toBe(0);
    expect(game.score1).toBe(0);
    expect(game.score2).toBe(0);
    expect(game.lastPlayStatus).toBe(null);
    expect(game.lastPlayError).toBe(false);
  
  });

  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('paper', 'rock');
    expect(result).toBe('hand1');
  });

  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('rock', 'paper');
    expect(result).toBe('hand2');
  });
})


describe('RPS', function(){
  var gameState;
  beforeEach(function(){
  gameState = initGame();
  });
})


describe('RPS WINS HAND1', function(){  
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('paper', 'rock', gameState);
    expect(result.lastPlayWinner).toBe('hand1');
  });
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'paper', gameState);
    expect(result.lastPlayWinner).toBe('hand1');
  });
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('rock', 'scissors', gameState);
    expect(result.lastPlayWinner).toBe('hand1');
  });
})

describe('RPS WINS HAND2', function(){
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('rock', 'paper', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  });
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'rock', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  });
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('paper', 'scissors', gameState);
    expect(result.lastPlayWinner).toBe('hand2');
  });
})

describe('RPS TIE', function(){
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('rock', 'rock');
    expect(result.lastPlayWinner).toBe('tie');
  });
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'scissors');
    expect(result.lastPlayWinner).toBe('tie');
  });
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('paper', 'paper');
    expect(result.lastPlayWinner).toBe('tie');
  });
})
