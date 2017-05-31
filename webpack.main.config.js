const path = require('path');

module.exports = {
    target: 'electron-main',
    context: path.resolve(__dirname, './'),
    // WebPack Entry Scanner; starts looking through all the modules to pull in from this point
    entry: {
        // Main App Index
        app: ['./app/main/app.js']
        // Other: ['./thing.js'], // To note you can bundle other types like so
    },

    // WebPack Bundler Output location and strategy
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'electron-main.bundle.js'
    },
    module: {
        // Where the bundler magic happens; each rule represents a "transform" of sorts on a file
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // Below is to process JS as Babelified files
            {
                test: /\.js$/,
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
            }
        ]
    }
};
