import {gameValue, INITIAL_STATE} from './game-data';

const gameStatus = Object.assign({}, INITIAL_STATE);

const changeLevel = (level) => {

  if (!Number.isInteger(level)) {
    throw new Error(`level should be number type`);
  }

  if (level < 0) {
    throw new Error(`level should be grater than 0`);
  }

  if (level > gameValue.MAX_LEVEL) {
    throw new Error(`level should be less than ${gameValue.MAX_LEVEL}`);
  }

  return Object.assign({}, gameStatus, {level});

};

export default changeLevel;
