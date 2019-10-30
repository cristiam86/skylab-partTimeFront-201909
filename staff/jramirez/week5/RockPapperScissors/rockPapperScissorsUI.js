
   var player1 = "";
   var player2 = "";
 


function setGameUiStatus() {
    $_id('gamePlayed').innerHTML = data.gamesPlayed;
    $_id('score1').innerHTML = data.score1;
    $_id('score2').innerHTML = data.score2;
    $_id('ties').innerHTML = data.ties;
}

$_id('startGame').addEventListener('click', function() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
    console.log(player1);
    console.log(player2);
    $_id('player-A').classList.add('show');
    document.getElementById('Player-name-1').innerHTML = "Hola " + player1 + ", ¿que eliges?";
    
})

$_id('reStart').addEventListener('click', function() {
    console.log('Volviendo');
    $_id('player-A').classList.add('show');
    $_id('result').classList.remove('show');
    $_id('prevResult').style.display = "block";
    $_id('winner').style.display = "none";
    $_id('ResultadosShow').style.display = "none";
})


Array.from($_class('player-hand1')).forEach(function(button){
    button.addEventListener('click', function() {
        //this.classList.add('active');
        hand1 = this.dataset.value;
        document.getElementById('Player-name-2').innerHTML = "¿Y tú " + player2 + "?";
        $_id('player-A').classList.remove('show');
        $_id('player-B').classList.add('show');
    })
  })

  Array.from($_class('player-hand2')).forEach(function(button){
    button.addEventListener('click', function() {
        //this.classList.add('active');
        hand2 = this.dataset.value;
        $_id('player-B').classList.remove('show');
        $_id('result').classList.add('show');
    })
  })

  $_id('initGame').addEventListener('click', function() {
    initGame(hand1, hand2);
    $_id('winner').style.display = "block";
    $_id('ResultadosShow').style.display = "block";
    $_id('prevResult').style.display = "none";
    if (data.previousWin === 'hand1') {
        document.getElementById('winner').innerHTML = "Gana " + player1;
    } 
    if (data.previousWin === 'hand2') {
        document.getElementById('winner').innerHTML = "Gana " + player2;
    }
    if (data.previousWin === 'tie') {
        document.getElementById('winner').innerHTML = "Empateeeee";
    }  
    setGameUiStatus();
})

function removeElementsByClass(className){
    var elements = $_class(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function $_id(id){
    return document.getElementById(id);
  }

  function $_class(className){
    return document.getElementsByClassName(className);
}