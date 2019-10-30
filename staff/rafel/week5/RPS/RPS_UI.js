function setGameUiStatus(gameLogicState) {

    $('#gamesPlayed').html(resultControl.total)
    $('#score1').html(resultControl.hand1)
    $('#score2').html(resultControl.hand2)
    $('#tie').html(resultControl.tie)
    $('#winner').html(resultControl.lastWinner)

}

Array.from($('.player1-button')).forEach(function(button){
    button.addEventListener('click', function() {
      handsChosen.hand1 = this.dataset.move;
      checkGameResult(handsChosen);
    })
})

Array.from($('.player1-button')).forEach(function(button){
    button.addEventListener('click', function() {
      handsChosen.hand2 = this.dataset.move;
      checkGameResult(handsChosen);
    })
})
