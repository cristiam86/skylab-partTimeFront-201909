var cities = [
    "Berlin", "Barcelona", "Amsterdam", "Paris", "Florencia", "Edinburgo", "Glasgow", "Zurich", "Roma", "Madrid", 
    "Frankfurt", "Napoles", "Londres", "Moscu", "Estambul", "Liverpool", "Manchester", "Lisboa", "Budapest", "Atenas"
]

// Método para seleccionar una ciudad random.
var selectCitie = cities[Math.floor(Math.random() * cities.length)];
console.log(selectCitie)



var check = prompt('escriba una letra')
var selectW = check;
console.log(selectW)




if(selectCitie.includes(selectW)){
    console.log('Contiene la letra ' + selectW)
} else{
    console.log('no')
}



for(x = 0; x < selectCitie.length; x++){
    
}



var wordToGuess = selectCitie.split('');
var guessing = wordToGuess.map(function(){return '__'})

console.log('Ciudad seleccionada:  ' + guessing)


