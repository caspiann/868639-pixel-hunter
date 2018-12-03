const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

const gameValue = {
  MAX_LEVEL: 10,
  MAX_LIVE: 3,
  MAX_ANSWER_TIME: 30,
};

const answerScore = {
  CORRECT_ANSWER_SCORE: 100,
  WRONG_ANSWER_SCORE: 0,
  FAST_ANSWER: {
    TIME: 10,
    SCORE: 50
  },
  SLOW_ANSWER: {
    TIME: 20,
    SCORE: 50
  },
  LIVE_BONUS_SCORE: 50
};

export {gameValue, INITIAL_STATE, answerScore};
