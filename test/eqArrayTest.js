const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');

assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); //>> PASS