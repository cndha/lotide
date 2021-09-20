const { assert } = require('chai');

const tail = require('../tail')

describe('#tail', () => {
  it('should return "Labs", World" from ["Lighthouse", "Labs", "World"]', () => {
    assert.deepEqual(tail(["Lighthouse", "Labs", "World"]), ["Labs", "World"]);
  })
})
