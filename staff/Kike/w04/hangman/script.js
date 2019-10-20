var diccionario = ['fantasma', 'bruja', 'esqueleto', 'zombie', 'vampiro'];

var palabraEscogida = '';
var palabraAmagada = '';
var letraEscogida = '';
var vidas = 6;

function newGame() {
    palabraEscogida = '';
    palabraAmagada = '';
    letraEscogida = '';
    vidas = 6;
    var newWord;
    document.getElementById('guessWord').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    newWord = getNewWord();
    palabraEscogida = newWord.split('').join(' ');
    generateHiddenWord(newWord);
}

function getNewWord() {
    var longitud = diccionario.length;
    var random = Math.floor((Math.random() * longitud));

    return diccionario[random];
}

function generateHiddenWord(word) {
    var wordCopy = word;
    var rExpression = /[a-z]/ig;
    var wordHidden = wordCopy.replace(rExpression, '_');
    wordHidden = wordHidden.split('').join(' ');
    palabraAmagada = wordHidden;
    document.getElementById('hiddenWord').innerHTML = wordHidden;
}


function testLetter() {
    document.getElementById('guessWord').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    var letra = document.getElementById("guessWord").value;
    letraEscogida = letra;
    if (letra.length !== 1) {
        console.error('DE MOMENTO SOLO UNA LETRA');
    }
    else {
        compareLetterWord(letraEscogida, palabraEscogida, palabraAmagada);
    }
}

function compareLetterWord(letra, palabra, amagada) {
    // console.log("TCL: compareLetterWord -> amagada", amagada)
    // console.log("TCL: compareLetterWord -> palabra", palabra)
    // console.log("TCL: compareLetterWord -> letra", letra)

    var palabraArr = palabra.split('');
    var amagadaArr = amagada.split('');
    var acierto = false;

    palabraArr.forEach(function (element, i) {

        if (element === letra) {
            amagadaArr = changeLetter(amagadaArr, i, letra);
            amagada = amagadaArr.join('');
            palabraAmagada = amagada;
            document.getElementById('hiddenWord').innerHTML = amagada;
            acierto = true;
        }
        else {
            acierto = false;
        }
    });

    if (!acierto) {
        vidas -= 1;
        killZombie();
    }
    gameOver();
}

function changeLetter(arr, i, letra) {
    arr[i] = letra;
    return arr;
}

function gameOver() {
    if (vidas === 0) {
        document.getElementById('hiddenWord').innerHTML = 'HAS PERDIDO LA PARTIDA';
    }
    else if (palabraEscogida === palabraAmagada) {
        document.getElementById('hiddenWord').innerHTML = 'HAS GANADO!!!';
    }
}

function killZombie() {
    switch (vidas) {
        case 5:
            document.getElementById('lLeft').style.display = 'none';
            break;
        case 4:
            document.getElementById('lRight').style.display = 'none';
            break;
        case 3:
            document.getElementById('hLeft').style.display = 'none';
            break;
        case 2:
            document.getElementById('hRight').style.display = 'none';
            break;
        case 1:
            document.getElementById('torso').style.display = 'none';
            break;
        case 0:
            document.getElementById('head').style.display = 'none';
            break;
    }
}