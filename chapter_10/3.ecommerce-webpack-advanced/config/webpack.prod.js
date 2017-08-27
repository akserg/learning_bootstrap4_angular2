const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig(), {

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new UglifyJsPlugin({
      comments: false, 
      compress: { 
        dead_code: true, // eslint-disable-line camelcase 
        screw_ie8: true, // eslint-disable-line camelcase 
        unused: true, 
        warnings: false 
      }, 
      mangle: { 
        screw_ie8: true  // eslint-disable-line camelcase 
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]

});
