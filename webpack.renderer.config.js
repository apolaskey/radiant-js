const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const webpackRules = require('./webpack.rules');
const webpack = require('webpack');

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
    // WebPack Bundles Output location and strategy
    output: {
        filename: 'electron-renderer.bundle.js'
    },
    module: {
        // Where the bundler magic happens; each rule represents a "transform" of sorts on a file
        rules: [
            webpackRules.fileRule,
            webpackRules.urlRule,
            webpackRules.bundleCssRule,
            webpackRules.babelRule
        ]
    },
    devServer: {
        contentBase: './app/index.jsx',
        hot: true
    },
    plugins: [
        new WebpackBuildNotifierPlugin(),
        // Used to get CSS to export out from WebPack in one global CSS file
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles.css",
            chunkFilename: "[id].css"
        }),
        // Used to generate the "index.html" file, name configured by the below param
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // Ejs template used during the creation, asset management is handled via webpack
            template: 'index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
