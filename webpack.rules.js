/* eslint-disable capitalized-comments,spaced-comment */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//noinspection WebpackConfigHighlighting

/**
 * This will export out various rules to be used within the application for Webpack
 * @type {{}}
 */
module.exports = {
    urlRule: {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
            'url-loader'
        ]
    },
    /**
     * Used to find and locate static resources to add them to the bundle
     */
    fileRule: {
        test: /\.(png|svg|jpg|gif|hqx|json)$/,
        use: [
            'file-loader?name=[name].[ext]'
        ]
    },
    /**
     * Used to find and locate js files to be babelified with ES2017+
     */
    babelMainRule: {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        ['@babel/preset-env'],
                        ['@babel/preset-react']
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties']
                    ]
                }
            }
        ]
    },
    babelRendererRule: {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        ['@babel/preset-env'],
                        ['@babel/preset-react']
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties'],
                        ['react-hot-loader/babel']
                    ]
                }
            }
        ]
    },
    reactHotPatchRule: {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
    },
    /**
     * Used for SASS CSS Bundling
     */
    bundleCssRule: {
        test: /\.(css|scss|sass)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: { }
            },
            "sass-loader"
        ]
    }
};
