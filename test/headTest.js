const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head')

describe ('#head', () => {
  it('should return 7 for [7, 8, 9]', () => {
    assert.strictEqual(head([7, 8, 9]), 7); 
  });

  it('should return Lighthouse in ["lighthouse", "labs", "world"]', () => {
    assert.strictEqual(head(['lighthouse', 'labs', 'world']), 'lighthouse');
  });
});
