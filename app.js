#!/usr/bin/env node

'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

const argv = require('yargs')
  .usage('Usage: $0 --x number --file filename')
  .default('x', 1)
  .default('f', './package.json')
  .alias('f', 'file')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018')
  .argv;

new Promise((resolve, reject) => {
  fs.createReadStream(argv.file)
    .on('end', resolve)
    .on('error', reject)
    .on('data', (chunk) => {
      console.log(chunk.toString());
    });
}).then(() => {
  console.log('done.');
}).catch(err => {
  console.log(JSON.stringify(err, null, 2));
});
