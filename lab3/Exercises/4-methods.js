'use strict';

const methods = (iface) => {
  const res = [];
  for (const item of iface) {
    if (typeof iface[item] === 'function') {
      res.push([item, iface[item].length]);
    }
  }

  return res;
};

module.exports = { methods };
