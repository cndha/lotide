const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('💯💯💯 Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual("2", "2");
assertEqual(-7, 7);
