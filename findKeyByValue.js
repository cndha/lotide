const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// given object & values
// scan the object
// return first key which contains the value
// if no key is found = return undefined
// use Object.keys()

const findKeyByValue = function(sourceObj, value) {
  for (let prop in sourceObj) { //loop through sourceObj
    if (sourceObj[prop] === value) { // sourceObj[prop] will return values of that key
      return prop; //return key if values = value
    } 
  }
};

// sourceObj[prop] will return values of that key
// the value you're checking here is "The Wire"
// the Expected (from assertEqual) = 'drama'
// 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
