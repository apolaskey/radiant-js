/* eslint-disable capitalized-comments,spaced-comment */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//noinspection WebpackConfigHighlighting

/**
 * This will export out various rules to be used within the application for Webpack
 * @type {{}}
 */
module.exports = {
    /**
     * Used to find and locate static resources to add them to the bundle
     */
    fileRule: {
        test: /\.(png|svg|jpg|gif|html|woff|woff2|eot|ttf)$/,
        use: [
            'file-loader?name=[name].[ext]'
        ]
    },
    /**
     * Used to find and locate js files to be babelified with ES2017+
     */
    babelRule: {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', {modules: false}],
                        ['react'],
                        ['stage-0']
                    ],
                    plugins: [
                        ['react-hot-loader/babel'],
                        ['transform-runtime'],
                        ['transform-react-jsx']
                    ]
                }
            }
        ]
    },
    /**
     * Used for SASS CSS Bundling
     */
    bundleCssRule: {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }
};
