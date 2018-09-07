'use strict';

const fs = require('fs-extra');

module.exports = {

  readFile: async (fileName) => {
    return new Promise((resolve, reject) => {
      let buffer = [];
      fs.createReadStream(fileName)
        .on('end', () => {
          resolve(buffer.toString('utf8'));
        })
        .on('error', reject)
        .on('data', (chunk) => {
          buffer += chunk;
        });
    });
  }

};
