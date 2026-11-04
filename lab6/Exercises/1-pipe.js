'use strict';

const pipe = (...fns) => {
  const checkedFns = fns.every(fn => typeof fn === 'function');

  if (!checkedFns) {
    throw new Error('Pipe args should be functions');
  }

  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

module.exports = { pipe };
