//// capitalCase
function capitalCase(str) {
    str = str.split(' ');
  
    for (var i = 0; i < str.length; i++) {
      
      str[i] = str[i].toLowerCase().split('');
      str[i][0] = str[i][0].toUpperCase();
      str[i] = str[i].join('');
    }
  
    return str.join(' ');
  }
  
  capitalCase('january, february, march, aril, may, june, july, august, september, october, november, december');


