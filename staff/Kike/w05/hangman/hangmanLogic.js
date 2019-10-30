const diccionario = ['fantasma', 'bruja', 'esqueleto', 'zombie', 'vampiro'];

function getFromLocalStorage() {
  const localStr = window.localStorage;
  const LOCAL_STORAGE_KEY = 'sessionInit';
  const data = localStr.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(data)
}

function setFromLocalStorage(state) {
  const localStr = window.localStorage;
  const LOCAL_STORAGE_KEY = 'sessionInit';
  localStr.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  return state
}

function checkPreviousGame(state) {
  const currentData = getFromLocalStorage();
  return currentData ? currentData : setFromLocalStorage(state)
}

function newObject() {
  const sessionInit = {
    palabraEscogida: '',
    palabraAmagada: '',
    letraEscogida: '',
    vidas: 6
  };

  return checkPreviousGame(sessionInit);
}

function newGame() {
  const currentData = getFromLocalStorage();
  const newWord = getNewWord();

  const result = {
    ...currentData,
    palabraEscogida: newWord.split('').join(' '),
    palabraAmagada: '',
    letraEscogida: '',
    vidas: 6
  }
  setFromLocalStorage(result);

  generateHiddenWord(newWord);
}

function getNewWord() {
  const longitud = diccionario.length;
  const random = Math.floor((Math.random() * longitud));

  return diccionario[random];
}

function generateHiddenWord(word) {
  const currentData = getFromLocalStorage();
  const wordCopy = word;
  const rExpression = /[a-z]/ig;
  let wordHidden = wordCopy.replace(rExpression, '_');
  wordHidden = wordHidden.split('').join(' ');

  const result = {
    ...currentData,
    palabraAmagada: wordHidden,
  }
  setFromLocalStorage(result);

}

function testLetter() {
  const currentData = getFromLocalStorage();
  const letra = document.getElementById("guessWord").value;

  const result = {
    ...currentData,
    letraEscogida: letra,
  }
  setFromLocalStorage(result);


  if (result.letraEscogida.length !== 1) {
    console.error('DE MOMENTO SOLO UNA LETRA');
  }
  else {
    compareLetterWord(result.letraEscogida, result.palabraEscogida, result.palabraAmagada);
  }
}

function compareLetterWord(letra, palabra, amagada) {
  const currentData = getFromLocalStorage();

  const palabraArr = palabra.split('');
  let amagadaArr = amagada.split('');
  let acierto = false;

  palabraArr.forEach(function (element, i) {

    if (element === letra) {
      amagadaArr = changeLetter(amagadaArr, i, letra);
      amagada = amagadaArr.join('');

      const result = {
        ...currentData,
        palabraAmagada: amagada
      }
      setFromLocalStorage(result);

      acierto = true;
    }
  });

  if (!acierto) {
    const result = {
      ...currentData,
      vidas: currentData.vidas-1
    }
    setFromLocalStorage(result);
  }
}

function changeLetter(arr, i, letra) {
  arr[i] = letra;
  return arr;
}

const gameLogic = {
  newObject,
  newGame,
  testLetter
};
