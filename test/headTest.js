const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([6,5,5]), 5);
assertEqual(head(["World", "Lighthouse", "Labs"]), "Hello");