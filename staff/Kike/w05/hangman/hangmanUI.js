var gameState = gameLogic.newObject();

var newGameButton = document.getElementById('newGameButton');
var submitButton = document.getElementById('submitButton');

newGameButton.addEventListener('click', function () {
  console.log('entro');
  gameLogic.newGame();
  const currentData = getFromLocalStorage();

  document.getElementById('lLeft').style.display = 'block';
  document.getElementById('lRight').style.display = 'block';
  document.getElementById('hLeft').style.display = 'block';
  document.getElementById('hRight').style.display = 'block';
  document.getElementById('torso').style.display = 'block';
  document.getElementById('head').style.display = 'block';

  document.getElementById('guessWord').style.display = 'block';
  document.getElementById('submitButton').style.display = 'block';

  document.getElementById('hiddenWord').innerHTML = currentData.palabraAmagada;
});

submitButton.addEventListener('click', function () {
  console.log('entro 2');
  document.getElementById('guessWord').style.display = 'block';
  document.getElementById('submitButton').style.display = 'block';
  gameLogic.testLetter();
  const currentData = getFromLocalStorage();
  document.getElementById('hiddenWord').innerHTML = currentData.palabraAmagada;
  killZombie(currentData.vidas);
  gameOver(currentData.vidas);
});



function gameOver(vidas) {
  const currentData = getFromLocalStorage();
  if (vidas === 0) {
      document.getElementById('hiddenWord').innerHTML = 'HAS PERDIDO LA PARTIDA';
  }
  else if (currentData.palabraEscogida === currentData.palabraAmagada) {
      document.getElementById('hiddenWord').innerHTML = 'HAS GANADO!!!';
  }
}

function killZombie(vidas) {
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
