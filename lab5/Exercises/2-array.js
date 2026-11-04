'use strict';

const array = () => {
  const res = [];
  const act = (x) => res[x];

  act.push = (x) => res.push(x);
  act.pop = () => res.pop();

  return act;
};

module.exports = { array };
