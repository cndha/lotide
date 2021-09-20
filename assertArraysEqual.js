const eqArrays = require('./eqArray');

const assertArraysEqual = function(arrayA, arrayB){
  if (eqArrays(arrayA, arrayB)) {
  console.log(`😸 This is true`);
  } else {
  console.log('😾 This is false');
  }
};

module.exports = assertArraysEqual;

