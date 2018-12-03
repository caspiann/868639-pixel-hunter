import {INITIAL_STATE} from './game-data';

const gameStatus = Object.assign({}, INITIAL_STATE);

const changeLives = (answer) => {

  if (typeof answer !== `boolean`) {
    throw new Error(`Answer must be boolean type`);
  }

  const answerResult = answer ? 0 : 1;

  const lives = gameStatus.lives -= answerResult;

  if (lives < 0) {
    throw new Error(`Lives can't be a negative number`);
  }

  return Object.assign({}, gameStatus, {lives});

};

export default changeLives;
