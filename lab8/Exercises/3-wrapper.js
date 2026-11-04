'use strict';

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < args.length; i++) {
      const expected = argTypes[i];
      const current = args[i];

      if (typeof current !== expected.name.toLowerCase()) {
        throw new TypeError(`Argument type ${typeName} expected`);
      }
    }

    const res = fn(...args);

    if (typeof res !== returnType.name.toLowerCase()) {
      throw new TypeError(`Result type ${typeName} expected`);
    }

    return res;
  }
};

module.exports = { contract };
