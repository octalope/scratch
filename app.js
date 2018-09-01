#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');

const argv = require('yargs')
  .usage('Usage: $0 --x number --file filename')
  .default('x', 1)
  .default('f', './package.json')
  .alias('f', 'file')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018')
  .argv;

const readFile = async (fileName) => {
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
};

setImmediate(async () => {
  try {
    const content = await readFile(argv.file);
    console.log(content); // eslint-disable-line no-console
  } catch(e) {
    console.log(e); // eslint-disable-line no-console
  }
});
