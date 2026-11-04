'use strict';

const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      if (handlers.length === 0) throw error;

      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error') {
      handlers.push(handler);
    }
    return composed;
  };

  return composed;
};

module.exports = { compose };
