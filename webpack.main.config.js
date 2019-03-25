/* eslint-disable import/newline-after-import */
const NodeExternals = require('webpack-node-externals');
const webpackRules = require('./webpack.rules');

module.exports = {
    target: 'electron-main',
    externals: [NodeExternals()],
    entry: {
        app: ['./app/main.js']
    },
    output: {
        filename: 'electron-main.bundle.js'
    },
    module: {
        rules: [
            webpackRules.fileRule,
            webpackRules.babelRule
        ]
    }
};
