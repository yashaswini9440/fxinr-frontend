const path = require('path');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src'),
};

var HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration
module.exports = {
    entry: './src/index.js',
    output: {
        path: paths.DIST,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port:3000,
        hot:true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                 use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use:{
                    loader: 'url-loader?limit=100000'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Custom template',
            favicon: 'favicon.ico',
            template: './src/index.html'
        })]
};


