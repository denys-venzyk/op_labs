'use strict';

const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);

module.exports = { sum };
