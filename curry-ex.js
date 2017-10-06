require('../../support');
let R = require('ramda');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

let words = R.split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

let sentences = R.map(words);

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// let filterQs = function (xs) {
//   return filter(function (x) { return match(/q/i, x); }, xs);
// };

let filterQs = R.filter(match(/q/i));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
let _keepHighest = function (x, y) { return x >= y ? x : y; };

// REFACTOR THIS ONE:
// let max = function (xs) {
//   return reduce(function (acc, x) {
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

let max = R.reduce(_keepHighest, -Infinity);

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
let slice = R.curry((start, end, xs) => xs.slice(start, end));

// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b']
let take = slice(0);

module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
};
