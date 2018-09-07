'use strict';

const fs = require('fs-extra');

const { expect } = require('chai');

const { readFile } = require('../lib');

describe('#readFile', () => {

  it('should pass read a file', () => {

    return new Promise(async (resolve, reject) => {
      try {
        const filename = './package.json';

        const expected = await fs.readFile(filename, 'utf8');

        let file = await readFile(filename);

        expect(file).to.deep.equal(expected);
      } catch(err) {
        return reject(err);
      }

      return resolve();
    });
  });

});
