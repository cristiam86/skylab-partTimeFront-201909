function capitalizeWords(input) {
  
    var emptyArr = [];
  
    for (var i = 0; i < input.length; i++) {
      var x = input[i]
      var capital = x.charAt(0).toUpperCase()
      var result = capital + x.substring(1)
      emptyArr.push(result)
  
    }
    return emptyArr
  
  }

capitalizeWords(['january','february','march','april','may','june','july','august', 'september','october','november','december']
)

function someMonths(input)