const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/app/js/index.js'),
        register: path.resolve(__dirname, './src/app/js/register.js'),
        chat: path.resolve(__dirname, './src/app/js/chat.js'),
        users: path.resolve(__dirname, './src/app/js/services/users.js'),
        functions: path.resolve(__dirname, './src/app/js/helpers/functions.js'),
        sweetalert: path.resolve(__dirname, './src/app/js/sweetalert.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: (chunkData)=>{
            let outputPath = '';
            if (chunkData.chunk.name === 'users') {
                outputPath = 'services/';
            } else if (chunkData.chunk.name === 'functions') {
                outputPath = 'helpers/';
            }
            return `${outputPath}[name].js`;
        }
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
            test: /\.s?[ac]ss$/i,
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
            title: 'Index',
            template: path.resolve(__dirname, './src/index.html'),
            chunks:['index','sweetalert'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Chat',
            template: path.resolve(__dirname, './src/app/pages/chat.html'),
            chunks:['chat','sweetalert'],
            filename: 'chat.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Register',
            template: path.resolve(__dirname, './src/app/pages/register.html'),
            chunks:['register','sweetalert'],
            filename: 'register.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}