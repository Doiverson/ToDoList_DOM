const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/js/index.js',
        style: './src/scss/style.scss',
    },
    output: {
        path: path.resolve(__dirname, 'src/css'),
        filename: '[name].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new FixStyleOnlyEntriesPlugin()
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        openPage: "index.html",
        publicPath: '/',
        compress: true,
        port: 3000,
        open: true,
        inline: true
    }
};
