const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: "./app/main",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TsConfigPathsPlugin({
                compiler: 'typescript'
            })
        ]
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.ts/, 
            loaders: ['awesome-typescript-loader', 'angular2-template-loader'], 
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        inline: true,
        port: 9000,
        openPage: ''
    }
};