const { assert } = require('chai');
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middle', () => {
  it('should return empty array with <= 2 elements in array', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return middle 2 values if given even length array', () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);
  })

  it('should return middle value if given odd length array', () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), [7]);
  })

});
