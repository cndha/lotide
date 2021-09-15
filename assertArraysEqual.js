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

assertArraysEqual([1, 1, 3], [1, 2, 4]); 

