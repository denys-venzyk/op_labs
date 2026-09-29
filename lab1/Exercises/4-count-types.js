'use strict';

const countTypesInArray = (array) => {
  const count = {};
  for (let item of array) {
    const type = typeof item;
    const counted = count[type] || 0;
    count[type] = counted + 1;
  }
  return count;
};

module.exports = { countTypesInArray };
