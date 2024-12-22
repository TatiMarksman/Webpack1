import { default as Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';  // Импортируем Game и другие элементы

console.log('app worked');

const game = new Game();
game.start();

loadGame();
saveGame();
