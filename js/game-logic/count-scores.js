import {answerScore, gameValue} from './game-data';

const countScores = (answers, lives) => {

  if (!Array.isArray(answers)) {
    throw new Error(`lives should be number type`);
  }

  if (!Number.isInteger(lives)) {
    throw new Error(`lives should be number type`);
  }

  if (lives < 0 || lives > gameValue.MAX_LIVE) {
    throw new Error(`Number of lives not between 0 and ${gameValue.MAX_LIVE}`);
  }

  if (answers.length < gameValue.MAX_LEVEL) {
    return -1;
  }

  const currentAnswerScore = (currentAnswer) => {
    const correctnessAnswerScore = currentAnswer.answer ? answerScore.CORRECT_ANSWER_SCORE : 0;
    const fastAnswerScore = currentAnswer.time <= answerScore.FAST_ANSWER.TIME - 1 ? answerScore.FAST_ANSWER.SCORE : 0;
    const slowAnswerScore = currentAnswer.time >= answerScore.SLOW_ANSWER.TIME + 1 ? answerScore.SLOW_ANSWER.SCORE : 0;
    const score = correctnessAnswerScore + fastAnswerScore - slowAnswerScore;
    return score < 0 ? 0 : score;
  };

  const totalScores = answers.reduce((total, currentAnswer) => {
    return total + currentAnswerScore(currentAnswer);
  }, 0) + lives * answerScore.LIVE_BONUS_SCORE;

  return totalScores;
};

export default countScores;
