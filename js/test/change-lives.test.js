import {assert} from 'chai';
import changeLives from '../game-logic/change-lives';
import {INITIAL_STATE} from '../game-logic/game-data';

describe(`Change lives`, () => {

  it(`game should start with 3 lives`, () => {
    assert.equal(INITIAL_STATE.lives, 3);
  });

  it(`changeLives should return an object`, () => {
    assert.isObject(changeLives(true));
  });

  it(`Parameter should be of boolean type`, () => {
    assert.throws(() => changeLives(123), `Answer must be boolean type`);
  });

  it(`Should return 2 if game start with 3 lives and get wrong answer`, () => {
    assert.equal(changeLives(false).lives, 2);
  });

  it(`Should return 2 if game start with 3 lives and get wrong answer`, () => {
    changeLives(false).lives = -10;
    assert.isAtLeast(changeLives(false).lives, -1);
  });

});
