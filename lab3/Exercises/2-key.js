'use strict';

const generateKey = (length, possible) => {
  const maxCharacters = possible.length;
  let key = '';

  for (let i = 0; i < length; i++) {
    key += possible[Math.floor(Math.random() * maxCharacters)];
  }

  return key;
};

module.exports = { generateKey };
