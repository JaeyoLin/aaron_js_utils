import assert from 'assert';
import add, { subtract } from '../src';

describe('Add Testing', () => {
  it('1 + 4 = 5', () => {
    assert.equal(add(1, 4), 5);
  });
});

describe('Subtract Testing', () => {
  it('4 - 1 = 3', () => {
    assert.equal(subtract(4, 1), 3);
  });
});