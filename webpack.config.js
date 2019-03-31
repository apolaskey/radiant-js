/* eslint-disable import/newline-after-import */
const webpack = require('webpack');
const webpack_cli = require('webpack-cli');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// This is used to basically run common defaults onto multiple webpack configs; Electron has two targets
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
            'node_modules'
        ]
    };

    // Build out plugins if it doesn't exist
    if (target.plugins === undefined) {
        target.plugins = [];
    }

    if (process.env.NODE_ENV === 'development') {
        // Configures generation of source-maps; needed for development
        target.devtool = 'source-map';
        /* Target.plugins.push(new UglifyJSPlugin({
            sourceMap: true,
            parallel: true
        })); */
        // Logs to console the full path of HMR files
        target.plugins.push(new webpack.NamedModulesPlugin());
    } else {
        // Production minification of code
        target.plugins.push(new UglifyJSPlugin({
            sourceMap: false,
            parallel: true
        }));
    }
}

module.exports = targets;
