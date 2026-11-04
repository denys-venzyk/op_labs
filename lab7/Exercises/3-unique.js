'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => [...new Set(array)];

module.exports = { unique };
