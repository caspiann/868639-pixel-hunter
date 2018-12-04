import {assert} from 'chai';
import {gameValue} from '../game-logic/game-data';
import countScores from '../game-logic/count-scores';

let answers = [];

describe(`Count result scores`, () => {

  it(`should accept answers parameter as array`, () => {
    assert.throws(() => countScores(`answers`, 3), `lives should be number type`);
  });

  it(`should accept lives parameter as number`, () => {
    assert.throws(() => countScores([], `three`), `lives should be number type`);
  });

  it(`should accept number of lives between 0 and ${gameValue.MAX_LIVE}`, () => {
    assert.throws(() => countScores([], 4), `Number of lives not between 0 and ${gameValue.MAX_LIVE}`);
    assert.throws(() => countScores([], -2), `Number of lives not between 0 and ${gameValue.MAX_LIVE}`);
  });

  it(`should return -1 if more than ${gameValue.MAX_LEVEL} or less than 0 answers `, () => {
    answers = [
      {answer: true, time: 15},
      {answer: true, time: 15},
    ];
    assert.equal(countScores(answers, 3), -1);
  });

  it(`should return 1150 if  "${gameValue.MAX_LEVEL} questions: true, time: normal, lives: 3" `, () => {
    answers = [
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15},
      {answer: true, time: 15}
    ];
    assert.equal(countScores(answers, 3), 1150);
  });

  it(`should return 650 if "${gameValue.MAX_LEVEL} questions: true, time: slow, lives: 3"  `, () => {
    answers = [
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25},
      {answer: true, time: 25}
    ];
    assert.equal(countScores(answers, 3), 650);
  });

  it(`should return 1650 if "${gameValue.MAX_LEVEL} questions: true, time: fast, lives: 3"  `, () => {
    answers = [
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5},
      {answer: true, time: 5}
    ];
    assert.equal(countScores(answers, 3), 1650);
  });

  it(`should return 850 if "${gameValue.MAX_LEVEL} combine answers and time - 50/50: true/false and fast/slow, lives: 2"  `, () => {
    answers = [
      {answer: false, time: 21},
      {answer: true, time: 8},
      {answer: false, time: 21},
      {answer: true, time: 9},
      {answer: false, time: 21},
      {answer: true, time: 1},
      {answer: false, time: 25},
      {answer: true, time: 6},
      {answer: false, time: 22},
      {answer: true, time: 2}
    ];
    assert.equal(countScores(answers, 2), 850);
  });
});
