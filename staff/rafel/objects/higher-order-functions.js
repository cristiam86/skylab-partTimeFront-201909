/****** capitalCase */

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


months.forEach(function(capitalCase){
    console.log(capitalCase.replace(capitalCase[0],capitalCase[0].toUpperCase()))
    }
)

/****** some months */

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']


var arrowJ = months.filter(e => e[0] == 'j')
 
arrayJ = months.filter(function(jBeggining){
  return jBeggining[0] === 'j'
})


/****** CountVowels */

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

var newArr = loremIpsum.toLowerCase().split("")
newArr.reduce(function(acc, elem){
  if( elem === 'a'|| elem === 'e'||
    elem === 'i'|| elem === 'o'||
     elem === 'u'
    ){
    acc++
  }
  return acc;
},0);


/****** greatThanFiveLetters */

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']

months.every(function(elem){
    return elem.length ===5
})

months.some(function(elem){
    return elem.length >= 5
})


/****** callBack ### KO ### */

function age(callback){
    var numAge = 18;
      callback(numAge);
  };
  
  function permission(numAge){
        if (numAge<18){
          return 'not entrance'
      } else {
          return 'entrance'
      }
  }
  
  age(permission)

