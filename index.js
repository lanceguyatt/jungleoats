const fs = require('fs-extra')
const path = require('path');
const pug = require('pug');
const serve = require('serve');

const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');

fs.copy(path.resolve(srcDir, 'public'), buildDir, err => {
  if (err) {
    return console.error(err);
  }
  console.log('Copied');
});

const server = serve(buildDir, {
  port: process.env.PORT || 3000,
  ignore: ['node_modules']
});
