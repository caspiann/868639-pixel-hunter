import {gameValue, INITIAL_STATE} from './game-data';

const gameStatus = Object.assign({}, INITIAL_STATE);

const updateTime = (time) => {

  if (!Number.isInteger(time)) {
    throw new Error(`time should be number type`);
  }

  if (time > gameValue.MAX_ANSWER_TIME) {
    throw new Error(`max time can't be grater than ${gameValue.MAX_ANSWER_TIME}`);
  }

  if (time < 0) {
    throw new Error(`min time can't be less than 0`);
  }

  return Object.assign({}, gameStatus, {time});

};

export default updateTime;
