/* eslint-disable capitalized-comments,spaced-comment */
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
        test: /\.(png|svg|jpg|gif|html)$/,
        use: [
            'file-loader'
        ]
    },
    /**
     * Used to find and locate js files to be babelified with ES2017+
     */
    babelRule: {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    /**
     * Used to find and locate jsx files to be transformed via jsx to mithril
     */
    babelJsxRule: {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: [
                        ['transform-react-jsx', {pragma: 'm'}]
                    ]
                }
            }
        ]
    },
    vanillaCssRule: {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    /**
     * Used for SASS CSS Bundling
     */
    sassCssRule: {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }]
    }
};
