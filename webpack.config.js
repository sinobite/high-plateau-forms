const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    resolve: {
        extensions: ['*', '.jsx', '.js', '.json'],
    },
    output: {
        path: __dirname + '/www/static',
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        contentBase: './www/static',
        hot: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserPlugin()]
    }
}