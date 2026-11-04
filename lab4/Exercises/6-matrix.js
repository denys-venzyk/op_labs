'use strict';

const max = (matrix) => {
  let res = matrix[0][0];

  for (let i = 0; i < matrix.length; i++) {
    const r = matrix[i];

    for (let j = 0; j < r.length; j++) {
      const c = r[j];
      if (res < c) {
        res = c;
      }
    }
  }
};

module.exports = { max };
