'use strict';

const iterate = (obj, callback) => {
  for (const key of Object.keys(obj)) {
    callback(key, obj[key], obj)
  }
};

module.exports = { iterate };
