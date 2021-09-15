const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function should take in string & count all the letters in that string by letter
// ie. 'LHL' returns L: 2 and H: 1
// skip & don't count spaces 
// tip: use for-of loop

const countLetters = function(sentence){
  let result = {}; // this needs to produce a character key & number value

// loop through the sentence, each time it loops and finds the same letter, +1

  for (let letter of sentence) {
    if (letter !== ' ') { // if the letter does not equal a space, continue
      if (result[letter]) { // if the letter (key) already exists in new object
        result[letter] = result[letter] + 1; //then add 1
      } else { //if it doesn't exist in new object
        result[letter] = 1; //then set it equal to 1
      }

    }
  }
  return result;
};

console.log(countLetters("Jason"));
console.log(countLetters("Karima"));
console.log(countLetters("Fang"));
console.log(countLetters("Agouhanna"));
