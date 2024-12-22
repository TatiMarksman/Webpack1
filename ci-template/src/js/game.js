import Character from './domain';

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
  constructor() {
    console.log('GameSavingData created');
  }
}

function readGameSaving() {
  console.log('Game data loaded');
}

function writeGameSaving() {
  console.log('Game data saved');
}

export default Game; 
export { GameSavingData, readGameSaving, writeGameSaving };