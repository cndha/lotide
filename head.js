const assertEqual = require('./assertEqual')

const head = function(array){
  for (var i = 0; i < array.length; i++) {
    return array[0];
  }
};

module.exports = head;