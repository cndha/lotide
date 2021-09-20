const eqArrays = require('./eqArray');
const assertArraysEqual = require('./assertArraysEqual');

// arrays with 1 or 2 methods, return empty array
// arrays.length odd numbers = single element returned
// arrays.length even numbers = 2 elements returned

const middle = function (array){
  for (var i = 0; i < array.length; i++){
    let midIndex = array.length/2;

    if (array.length <= 2) {
      return [];
    } else {
      
      if (array.length % 2 !== 0){
        let array2 = [];
        array[i] = Math.ceil(midIndex);
        array2.push(array[i]); 
        return array2;
      } else {
        let array3 = [];
        array3.push(array[midIndex - 1]);
        array3.push(array[midIndex]);
        return array3;
      } 
    }
  }
};

module.exports = middle;