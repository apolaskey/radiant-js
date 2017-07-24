const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackRules = require('./webpack.rules');

module.exports = {
    target: 'electron-renderer',
    // WebPack Entry Scanner; starts looking through all the modules to pull in from this point
    entry: {
        // Main App Index
        app: [
            'react-hot-loader/patch',
            './app/index.jsx'
        ]
    },
    performance: {
        hints: 'warning'
    },
    // WebPack Bundles Output location and strategy
    output: {
        filename: 'electron-renderer.bundle.js'
    },
    module: {
        // Where the bundler magic happens; each rule represents a "transform" of sorts on a file
        rules: [
            webpackRules.fileRule,
            webpackRules.bundleCssRule,
            webpackRules.babelRule
        ]
    },
    plugins: [
        // Used to get CSS to export out from WebPack in one global CSS file
        new ExtractTextPlugin('styles.css'),
        // Used to generate the "index.html" file, name configured by the below param
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // Ejs template used during the creation, asset management is handled via webpack
            template: 'index.ejs'
        })
    ]
};
