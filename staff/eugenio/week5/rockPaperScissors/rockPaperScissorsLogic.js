function initGame(){


}

function play(hand1, hand2){
  
  if(hand1 == 'paper' && hand2 == 'rock'){
    return 'hand1';
  }else if(hand1 == 'scissors' && hand2 == 'paper'){
    return 'hand1';
  }else if(hand1 == 'rock' && hand2 == 'scissors'){
    return 'hand1';
  }else if(hand1 == 'rock' && hand2 == 'paper'){
    return 'hand2';
  }else if(hand1 == 'scissors' && hand2 == 'rock'){
    return 'hand2';
  }else if(hand1 == 'paper' && hand2 == 'scissors'){
    return 'hand2';
  }else if(hand1 == 'rock' && hand2 == 'rock'){
    return 'tie';
  }else if(hand1 == 'scissors' && hand2 == 'scissors'){
    return 'tie';
  }else if(hand1 == 'paper' && hand2 == 'paper'){
    return 'tie';
  }else if(typeof hand1 == 'string' && typeof hand2 == 'string'){
    return 'correct format';
  }
}

module.exports = {
  initGame,
  play
}
