const path = require('path');
const webpackRules = require('./webpack.rules');

module.exports = {
    target: 'electron-renderer',
    // WebPack Entry Scanner; starts looking through all the modules to pull in from this point
    entry: {
        // Main App Index
        app: ['../app/index.js']
    },
    // WebPack Bundler Output location and strategy
    output: {
        filename: 'electron-renderer.bundle.js'
    },
    module: {
        // Where the bundler magic happens; each rule represents a "transform" of sorts on a file
        rules: [
            webpackRules.fileRule,
            webpackRules.vanillaCssRule,
            webpackRules.sassCssRule,
            webpackRules.babelRule,
            webpackRules.babelJsxRule
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../app')
    }
};
