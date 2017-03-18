const path = require('path');
const serve = require('serve');

const buildDir = path.resolve(__dirname, 'build');

const server = serve(buildDir, {
    port: process.env.PORT || 3000,
    ignore: ['node_modules']
});
