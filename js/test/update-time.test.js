import {assert} from 'chai';
import updateTime from './update-time';
import {gameValue} from './game-data';

describe(`updateTimer`, () => {

  it(`should return an object`, () => {
    assert.isObject(updateTime(25));
  });

  it(`should accept time parameter as number`, () => {
    assert.throws(() => updateTime(`three`), `time should be number type`);
  });

  it(`should accept number only less or equal ${gameValue.MAX_ANSWER_TIME}`, () => {
    assert.throws(() => updateTime(31), `max time can't be grater than ${gameValue.MAX_ANSWER_TIME}`);
  });

  it(`should accept number only grater than 0`, () => {
    assert.throws(() => updateTime(-5), `min time can't be less than 0`);
  });

});
