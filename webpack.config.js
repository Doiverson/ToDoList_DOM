const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/js/index.js',
        style: './src/scss/style.scss',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[id].js'
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
        new FixStyleOnlyEntriesPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'public',
                to: './'
            },
        ]),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        openPage: "index.html",
        compress: true,
        open: true,
        port: 3000,
    }
};
