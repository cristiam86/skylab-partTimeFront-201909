var hangmanLogic = require('./hangmanLogic.js');

describe('HANGMAN', function(){
    test('should return error', function(){
        var result = checkLetter(5);
        expect(result.lastPlayWinner).toBe('error, this should be a string!');
      })
  })