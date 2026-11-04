'use strict';

const sum = (...args) => {
  let res = 0;

  if (args.length === 0) {
    return;
  }

  do {
    res += args.pop();
  } while (args.length > 0);

  return res;
};

module.exports = { sum };
