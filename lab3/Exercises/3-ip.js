'use strict';

const ipToInt = (ip = '127.0.0.1') =>
ip
  .split('.')
  .reduce((acc, num) => (acc << 8) + +num, 0);

module.exports = { ipToInt };
