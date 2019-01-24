import {GameConcept, TIME} from "./game-data/constants";

export default class GameModel {
  constructor(gameData, gamePreloadedImages, playerName) {
    this.gameData = gameData;
    this.gamePreloadedImages = gamePreloadedImages;
    this.playerName = playerName;
    this.restartGame();
  }

  get gameState() {
    return this._gameState;
  }

  get gameOrder() {
    return this._gameOrder;
  }

  restartGame() {
    this._gameState = {
      level: 0,
      time: TIME.MAX_TIME,
      lives: GameConcept.MAX_LIVES,
      answers: []
    };
  }

  renewQuestionType() {
    this._question = this.gameData[this._gameState.level];
    return this._question;
  }

  die() {
    this._gameState.lives--;
  }

  isDead() {
    return this._gameState.lives < GameConcept.MIN_LIVES;
  }

  goToNextLevel() {
    return this._gameState.level++;
  }

  isGameComplete() {
    return this._gameState.level === GameConcept.MAX_LEVELS;
  }

  tick() {
    this._gameState.time--;
  }

  renewTimer() {
    this._gameState.time = TIME.MAX_TIME;
  }
}
