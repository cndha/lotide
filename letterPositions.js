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

// want object to return number of the indexes each letter is at in sentence
// loop through each letter, if letter exists, add the index number 
// spaces don't count 


const letterPositions = function(sentence){
  const results = {};

  for (let i = 0; i < sentence.length; i++){ // loop through sentence
    let letter = sentence[i];
    if (letter !== ' '){  // if sentence is NOT a space, move on
      if (results[letter]){  // if letter is in object,
        results[letter].push(i);  // add(push) index to results.letter key
      } else {
        results[letter] = [i]; 
      }
    }
  }
  return results;
};  

console.log(letterPositions('lighthouse in the house'));