//Test

function removeDuplicates (string) {

}

var stringNoDuplicated = removeDuplicates ("abcarbbdee");

if(stringNoDuplicated !== "abcrde") {
    console.log("ERROR removing duplicates")
} 

//Exer.

function removeDuplicates(stringWithDuplicates) {
    var characterNoDuplicated = [];

for (var i = 0; i< stringWithDuplicates.length; i++) {
    var character = stringWithDuplicates[i];
      if(!hasElement(characterNoDuplicated.includes, character)) {
          characterNoDuplicated.push(character)
      }
    }
    
    return characterNoDuplicate.join('');
}

function removeDuplicates(stringWithDuplicates) {
    var charsSet = new Set (stringWithDuplicates);
    var arrWithoutDuplicates = Array.from(charsSet);
    return arrWithoutDuplicates.join('')
}

function removeDuplicates (stringWithDuplicates, characterNoDuplicated) {
    if (stringWithDuplicates === ''){
        return Object.keys(charactersNoDuplicated).join('')
    }

//1. sacar in caracter del string
var character = stringWithDuplicates.split('').splice(0,1);
characterNoDuplicate[character] = true


//2. procesar el resto el string
return removeDuplicates (stringWithDuplicates.substr(1), characterNoDuplicated)

}

//String al revés

