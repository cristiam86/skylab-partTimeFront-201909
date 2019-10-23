var word = [
    { word: 'hancok', hint: "Super Heroe negro protagonizado por will smith" },
    { word: 'panter', hint: "Animal que representa el super Heroe Negro Marvel" },
    { word: 'tecca', hint: "Apellido del rapero de cabecera de skylabCoders" },
    { word: 'arrow', hint: "Perro en Skylab con nombre de un tipo de función" },
    { word: '50cent', hint: "Rapero de chicago que su nombre es igual que el precio del café en Skylab" },
    { word: '365cafe', hint: "¿Dónde quedamos los sábados a las 9:30 pa desayuneo?" },
];

randomNum = getRandomArbitrary(word.length);
var wordToGuess = word[randomNum].word.split('');

// decrease lives
var points = 0;
var guessing = wordToGuess.map(function(){return '_'})
document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
document.getElementById('hint').innerHTML = word[randomNum].hint;

document.getElementById('submit-button').addEventListener('click', checkLetter);



function checkLetter(event){
    event.preventDefault();
    var inputLetter = document.getElementById('letter-input').value;
    
    // Miro si el campo es empty
    if (inputLetter === "") {
        alert("Si no pones una letra o un número, ná de ná");
    } else if (points > 9) {
        document.getElementById('points').innerHTML = "Tas to ahorcao";
    } else {
        //check if inputLetter exists on wordToGuess
        var wordcheck = wordToGuess.includes(inputLetter);
        if (wordcheck) { 
            // replace matching letters with inputLetter
            var sitios = [];
            var index = wordToGuess.indexOf(inputLetter);

            while (index != -1) {
                sitios.push(index);
                guessing[index] = inputLetter;
                index = wordToGuess.indexOf(inputLetter, index + 1); 
                youWin();
            }
            document.getElementById('word-to-guess').innerHTML = guessing.join(' ');
            resetInput();

        } else {
            points += 1;
            document.getElementById('points').innerHTML = points;
            resetInput();
            paintAhoracado();
            document.getElementById('linea').style.display = "block";
        }
    }
}

// Get Random Num
function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
}

// Borrar contenido del input
function resetInput() {
    document.getElementById('letter-input').value = "";
}   

// Cuando se gana
function youWin() {
    if (word[randomNum].word === guessing.join('')) {
        document.getElementById('linea').style.display = "block";
        document.getElementById('btnreload').style.display = "block";
        document.getElementById('linea').innerHTML = "Has ganaooo pringaooo";
        document.getElementById('picture').style.backgroundColor = "green";
    }
}



// Pintado muñeco
function paintAhoracado() { 
    document.getElementById('show-'+points).style.opacity = "1";
}

function submitForm(event){
    var inputLetter = document.getElementById('letter-input').value;
    console.log(inputLetter);
}
