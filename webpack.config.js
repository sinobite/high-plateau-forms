const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/example/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
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
        new webpack.HotModuleReplacementPlugin()
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
