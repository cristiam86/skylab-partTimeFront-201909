

(function(){

    // Animtaion: 
    $( "#openGame" ).click(function() {
        $( "#playGameFI" ).fadeIn( 2000, function() {

        });
        $( "#hideTitle" ).fadeOut( 1000, function(){
            
        })
    });
      
    $( "#closeGame" ).click(function() {
        $( "#playGameFI" ).fadeOut( 1000, function() {
           
        });
        $( "#hideTitle" ).fadeIn( 1000, function(){
            
        })
    });


    

    var gameState = gameLogic.initGame();
    var gameUiState = initUiState();
  
    function resetUiHands() {
      gameUiState = initUiState();
    }
  
    function setGameUiStatus(gameLogicState) {
      //
      $_id('games-played-counter').innerHTML = gameLogicState.gamesCounter;
      $_id('hand1-score').innerHTML = gameLogicState.resultA;
      $_id('hand2-score').innerHTML = gameLogicState.resultB;
      $_id('tie-score').innerHTML = getTieScore(gameLogicState);
      $_id('game-last-winner').innerHTML = getWinnerAsString(gameLogicState.playerWin);

      // recompnesa:
      $_id('recompensa').innerHTML = gameLogicState.resultA;
    }
  
    Array.from($_class('player1-button')).forEach(function(button){
      button.addEventListener('click', function() {
        gameUiState.hand1 = this.dataset.move;
        checkGameResult(gameUiState);
      })
    })
  
    Array.from($_class('player2-button')).forEach(function(button){
      button.addEventListener('click', function() {
        gameUiState.hand2 = this.dataset.move;
        checkGameResult(gameUiState);
      })
    })
  
    function checkGameResult(uiState) {
      if (uiState.hand1 && uiState.hand2) {
        gameState = gameLogic.play(uiState.hand1, uiState.hand2, gameState);
        setGameUiStatus(gameState);
        resetUiHands();
      }
    }
  
    function initUiState() {
      return {
        hand1: null,
        hand2: null
      } 
    }
  
    function $_id(id){
      return document.getElementById(id);
    }
  
    function $_class(className){
      return document.getElementsByClassName(className);
    }
  
    function getWinnerAsString(winner) {
      if (winner === 'resultA') return 'HAND 1';
      else if (winner === 'resultB') return 'HAND 2';
      else return 'Empate';
    }
  
    function getErrorAsString(error) {
      return error ? 'ERROR' : 'NO ERROR';
    }
  
    function getTieScore(gameLogicState) {
      return gameLogicState.gamesCounter - (gameLogicState.resultA + gameLogicState.resultB);
    }


    function getRecompensa(){
        if(winner === 'hand 1'){
            console.log('sasasa')
        }
    }


  
    setGameUiStatus(gameState);
  })();