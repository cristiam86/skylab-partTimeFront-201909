var rockPaperScissorsLogic = require('./rockPaperScissorsLogic');

describe('RPS GAME LOGIC TEST', function(){
  test('initialize game', function(){
    var game = rockPaperScissorsLogic.initGame();
    expect(game.gamesPlayed).toBe(0);
    expect(game.score1).toBe(0);
    expect(game.score2).toBe(0);
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

describe('RPS WINS HAND1', function(){
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('paper', 'rock');
    expect(result).toBe('hand1');
  });
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'paper');
    expect(result).toBe('hand1');
  });
  test('should win hand 1', function(){
    var result = rockPaperScissorsLogic.play('rock', 'scissors');
    expect(result).toBe('hand1');
  });
})

describe('RPS WINS HAND2', function(){
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('rock', 'paper');
    expect(result).toBe('hand2');
  });
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'rock');
    expect(result).toBe('hand2');
  });
  test('should win hand 2', function(){
    var result = rockPaperScissorsLogic.play('paper', 'scissors');
    expect(result).toBe('hand2');
  });
})

describe('RPS TIE', function(){
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('rock', 'rock');
    expect(result).toBe('tie');
  });
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('scissors', 'scissors');
    expect(result).toBe('tie');
  });
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('paper', 'paper');
    expect(result).toBe('tie');
  });
})

describe('RPS FORMAT RULES', function(){
  test('should tie', function(){
    var result = rockPaperScissorsLogic.play('rock', 'rock');
    expect(result).toBe('correct format');
  });
})