const fs = require('fs');

var packageJson = require('./package.json');

packageJson.name = process.argv[2];
packageJson.version = '1.0.0';
packageJson.description = '';
packageJson.author = '';
packageJson.repository.url = '';

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

fs.writeFileSync('./README.md', `# ${process.argv[2]}`);

fs.unlinkSync('./setup.js');

fs.rmdirSync('./.git', { recursive: true });
