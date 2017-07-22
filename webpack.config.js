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

    // Root
    target.context = path.resolve(__dirname, './');

    // Output directory
    target.output.path = path.resolve(__dirname, './dist');

    // Node Configuration
    target.node = {
        __dirname: false,
        __filename: false
    };

    // Where the root of the app is and extensions to focus
    target.resolve = {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.join(__dirname, 'app'),
            'node_modules',
        ],
    };
}

module.exports = targets;
