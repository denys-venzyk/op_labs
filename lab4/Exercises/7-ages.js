'use strict';

const ages = (persons) => {
  let res = {};

  for (const i in persons) {
    const person = persons[i];
    res[i] = person.died - person.born;
  }

  return res;
};

module.exports = { ages };
