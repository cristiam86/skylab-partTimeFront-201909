let piedraPapelTijeraLogic = require('./piedraPapelTijeraLogic');

describe('PPT OPTIONS VERIFICATION', function(){
    test('should win hand1 -> paper', function(){
      var result = piedraPapelTijeraLogic.verificarOpcion('piedra');
      expect(result).toBe(true);
    })
    test('should win hand1 -> paper', function(){
        var result = piedraPapelTijeraLogic.verificarOpcion('papel');
        expect(result).toBe(true);
      })
      test('should win hand1 -> paper', function(){
        var result = piedraPapelTijeraLogic.verificarOpcion('tijera');
        expect(result).toBe(true);
      })
  })

  describe('PPT TYPE VERIFICATION', function(){
    test('should win hand1 -> paper', function(){
      var result = piedraPapelTijeraLogic.verificarTipo('piedra');
      expect(result).toBe(true);
    })
    test('should win hand1 -> paper', function(){
        var result = piedraPapelTijeraLogic.verificarTipo(564);
        expect(result).toBe(false);
      })
  })

  