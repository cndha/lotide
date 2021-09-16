const eqArrays = function(array1, array2){
  if (array1.length !== array2.length){
    return false;
  } 
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB){
  if (eqArrays(arrayA, arrayB)) {
  console.log(`This is true`);
  } else {
  console.log('This is false');
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) { 
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]); // grabbing the first letter of each word 

assertArraysEqual(results1, map); // negates to false
// this is true b/c results1 = array of only first letters, DOES NOT equal to function of map

assertArraysEqual(results1, words); // this should be false
// this is true b/c results1 = array of only first letters, DOES NOT equal to words array

assertArraysEqual(results1, results1); //obviously, this is true