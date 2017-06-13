/* eslint-disable import/newline-after-import */
const path = require('path');

const targets = [
    require('./webpack.main.config.js'),
    require('./webpack.renderer.config.js')
];
targets.forEach(configureTarget);

/**
 * Perform the global target configuration changes
 * @param target WebPack target to modify
 */
function configureTarget(target) {
    target.context = path.resolve(__dirname, './');
    target.output.path = path.resolve(__dirname, './dist');
    target.node = {
        __dirname: false,
        __filename: false
    };
}

module.exports = targets;
