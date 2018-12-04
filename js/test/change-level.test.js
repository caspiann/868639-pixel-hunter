import {assert} from 'chai';
import changeLevel from './change-level';
import {gameValue} from './game-data';

describe(`Change level`, () => {

  it(`changeLevel should return an object`, () => {
    assert.isObject(changeLevel(5));
  });

  it(`should accept level parameter as number`, () => {
    assert.throws(() => changeLevel(`three`), `level should be number type`);
  });

  it(`should accept number only less or equal ${gameValue.MAX_LEVEL}`, () => {
    assert.throws(() => changeLevel(25), `level should be less than ${gameValue.MAX_LEVEL}`);
  });

  it(`should accept number only grater than or equal 0`, () => {
    assert.throws(() => changeLevel(-5), `level should be grater than 0`);
  });

});
