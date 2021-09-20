const assertEqual = require('./assertEqual')

const tail = function(words) {
  for (let i = 0; i <= words.length; i++) {
    return words[i];
  }
};

module.exports = tail;
