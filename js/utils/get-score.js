import {Answer} from "../game-data/constants";

export default (answers, lives) => {
  const correctAnswersCount = answers.filter(
      (answer) => answer === `correct` || answer === `fast` || answer === `slow`
  ).length;
  const correctAnswersPoints = correctAnswersCount * Answer.CORRECT;

  const fastAnswerCount = answers.filter((answer) => answer === `fast`).length;
  const fastAnswerPoints = fastAnswerCount * Answer.FAST;

  const slowAnswerCount = answers.filter((answer) => answer === `slow`).length;
  const slowAnswerPoints = slowAnswerCount * Answer.SLOW;

  const livesPoints = lives * Answer.REMAINING_LIFE;

  const totalScore =
    correctAnswersPoints + fastAnswerPoints + slowAnswerPoints + livesPoints;

  const gameResult = {
    correctAnswers: {
      count: correctAnswersCount,
      points: correctAnswersPoints
    },
    fastResponse: {
      count: fastAnswerCount,
      points: fastAnswerPoints
    },
    slowResponse: {
      count: slowAnswerCount,
      points: slowAnswerPoints
    },
    lives: {
      count: lives,
      points: livesPoints
    },
    totalScore
  };

  return gameResult;
};
