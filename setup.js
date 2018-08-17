'use strict';


const fs = require('fs');

const { argv } = require('yargs')
  .usage('Usage: $0 --name packageName')
  .alias('n', 'name')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018');

var packageJson = require('./package.json');

packageJson.name = argv.name;
packageJson.version = '1.0.0';
packageJson.description = '';
packageJson.repository.url = '';

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

fs.writeFileSync('./README.md', `# ${argv.name}`);
