const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
        // JavaScript
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.html$/i,
            use: ["html-loader"],
        },
        // Images
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        // Fonts and SVGs
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        ],
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sprint 2 Whatsapp',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}