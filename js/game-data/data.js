import {TIME, Answer, GameConcept} from "./constants";

export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addAnswer = (array, answer, time) => {
  let newAnswer = {
    value: answer,
    time
  };
  array.push(newAnswer);
  return array;
};

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  if (level > GameConcept.MAX_LEVELS) {
    throw new Error(`Level should not be greater than 10`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export const changeLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  if (lives > GameConcept.MAX_LIVES) {
    throw new Error(`Lives should not be greater than 3`);
  }
  if (lives > 0 && lives <= GameConcept.MAX_LIVES) {
    lives--;
  }
  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};

export const countTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }
  if (time > TIME.MAX_TIME) {
    throw new Error(`Time should not be greater than 30 sec`);
  }
  if (time >= 0 && time < TIME.MAX_TIME) {
    time++;
  }
  const newGame = Object.assign({}, game, {
    time
  });
  return newGame;
};

export const countScore = (answers, livesNumber) => {
  if (answers.length < TIME.SLOW) {
    return -1;
  }
  return answers.reduce((score, current) => {
    if (current.value) {
      if (current.time < TIME.QUICK) {
        score += Answer.FAST;
      } else if (current.time > TIME.SLOW) {
        score += Answer.SLOW;
      }
      score += Answer.CORRECT;
    }
    return score;
  }, livesNumber * Answer.REMAINING_LIFE);
};
