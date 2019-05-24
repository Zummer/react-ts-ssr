const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
        './client/index'
    ],
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader',
            include: [
                path.join(__dirname, 'client'),
                path.join(__dirname, 'common')
            ]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify("client")
            }
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3333,
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    output: {
        path: path.join(__dirname, './build'),
        publicPath: 'http://localhost:3333/',
        filename: 'client.js'
    }
};
