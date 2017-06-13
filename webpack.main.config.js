/* eslint-disable import/newline-after-import */
const webpackRules = require('./webpack.rules');

module.exports = {
    target: 'electron-main',
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
