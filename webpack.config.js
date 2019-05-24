const webpack = require('webpack')
const path = require('path')
const StartServerPlugin = require('start-server-webpack-plugin')
module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './src/index',
        // 'webpack-dev-server/client?',
        // 'webpack/hot/only-dev-server'
    ],
    mode: 'production',
    watch: true,
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: {
                    loader: 'awesome-typescript-loader',
                }
            }
        ]
    },
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         "BUILD_TARGET": JSON.stringify('server')
        //     }
        // }),
    ],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'server.js'
    }
}