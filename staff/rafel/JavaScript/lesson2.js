function isString(input){
    if (typeof input == 'string'){
         return "this is a string"
      } else { return "this is NOT a string"  
      }
}

function isBlank(input){
    var input = ["aa"]
    if (input.length > 0){
        return "true"
      } else {return"false" 
    }
}
/*no funciona*/


function stringToArray(input){
    var res = input.split(" ");
    return res
}

function truncate(input, number){
    var res = input.substring(0, number);
    return res 
}

function abbrevName(input){
    var spacePosition = input.indexOf(" ")+2
    var abbr = input.substring (0, spacePosition)+ '.'
    return abbr
    }

function protect(input) {
    var arrobaPosition = input.indexOf('@')
    var abbr
    if (arrobaPosition > 5 ){
    abbr = input.replace(input.substring(5, arrobaPosition), '...')
    } else if (arrobaPosition = 5 ){
        abbr = input.replace(input.substring(5, arrobaPosition+1), '...@')
    }
}

function parameterize(input) {
    var text = input.replace(/ /g, '-').toLowerCase() 
}

function capitalizeFirst(input) {
    var letter = input.substring(0,1).toUpperCase()
    var text = input.replace(input.substring(0,1),letter)
}


function capitalizeWords(input) {

    var inputArray = input.split(" ")
    for (var i = 0; i < inputArray.length; i += 1){
    var capitalLetter = inputArray[i][0].toUpperCase();
        console.log(capitalLetter)
        var capitalizedWord = ('')
        var capitalized = inputArray[i].replace(inputArray[i][0], capitalLetter)
    console.log(capitalized)
    }
} // no és completa, he d'unir les dues paraules en un string


function swapcase(input){
    var output =('')
    for(var i = 0; i < input.length; i +=1){
    if (input[i] ===  input[i].toUpperCase()){
    output = output + input[i].toLowerCase()
    } else {
      output = output + input[i].toUpperCase()
    } 
    } return output
    }

/*
### function camelize(input) {

}

Write a JavaScript function *to convert a string into camel case*.

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
    "JavaScriptExercises"
    "JavaScriptExercises"
    "JavaScriptExercises"

### function uncamelize(input) {

}

Write a JavaScript function to *uncamelize* a string.

```js
    console.log(uncamelize('helloWorld', '_'));    // "hello_world"
```

### function repeat(input, n) {

}

Write a JavaScript function to *concatenates a given string n times* (default is 1).

    console.log(repeat('Ha!',3));
    "Ha!Ha!Ha!"

### function insert(input, insert, position) {

}

Write a JavaScript function to insert a string within a string at a *particular position* (default is 1).


    console.log(insert('We are doing some exercises.','JavaScript ',18));
    "We are doing some exercises."
    "JavaScript We are doing some exercises."
    "We are doing some JavaScript exercises."

*/