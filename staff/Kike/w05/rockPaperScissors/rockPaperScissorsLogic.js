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
  const currentData = getFromLocalStorage()
  return currentData ? currentData : setFromLocalStorage(state)
}


function initGame() {
  const sessionInit = {
    gamesPlayed: 0,
    score1: 0,
    score2: 0,
    lastPlayWinner: null,
    lastPlayError: false
  }

  return checkPreviousGame(sessionInit)
}

const WINS = {paper: 'rock',scissors: 'paper',rock: 'scissors'};

const PLAYS = ['rock', 'paper', 'scissors'];

function areValidHands(hand1, hand2) {
  return (!PLAYS.includes(hand1) || !PLAYS.includes(hand2)) ? false : true;
}

function checkPlay(hand1, hand2) {
  return (WINS[hand1] === hand2) ? 'hand1' : (WINS[hand2] === hand1) ? 'hand2' : 'tie';
}

function play(hand1, hand2, gameState) {

  const currentData = getFromLocalStorage();

  if (!areValidHands(hand1, hand2)) {
    const result = {
      ...currentData,
      gamesPlayed: gameState.gamesPlayed + 1,
      lastPlayWinner: null,
      lastPlayError: true
    }
    return setFromLocalStorage(result)
  }

  const winner = checkPlay(hand1, hand2);
  if (winner === 'tie') {
    const result = {
      ...currentData,
      gamesPlayed: gameState.gamesPlayed + 1,
      lastPlayWinner: 'tie',
      lastPlayError: false
    }
    return setFromLocalStorage(result)
  } else if (winner === 'hand1') {
    const result = {
      ...currentData,
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1 + 1,
      lastPlayWinner: 'hand1',
      lastPlayError: false
    }
    return setFromLocalStorage(result)
  } else {
    const result = {
      ...currentData,
      gamesPlayed: gameState.gamesPlayed + 1,
      score2: gameState.score2 + 1,
      lastPlayWinner: 'hand2',
      lastPlayError: false
    }
    return setFromLocalStorage(result)
  }
}


const gameLogic = {
  initGame,
  play
};
// module.exports = gameLogic;
