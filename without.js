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

// build a without function that takes in 2 arrays, first array is the source, second array denotes the words to remove


const without = function(words, itemsToRemove) {
  let store = [] // empty array to push into 
  for (let word of words){ //loop through source array 
    if (!itemsToRemove.includes(word)) { //find what items of itemsToRemove is not contained in source array
      store.push(word); //push into new array 
    }
  }
  return store;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [7, 3]);


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case // "hello" "world"
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
