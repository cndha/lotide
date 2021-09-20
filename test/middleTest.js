const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual((middle([1])), []); 
assertArraysEqual((middle([1, 2])), []); 
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); 
assertArraysEqual((middle([1, 2, 3, 4, 5, 6, 7])), [4]); 
assertArraysEqual((middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), [8]);

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); 
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 3]);  
