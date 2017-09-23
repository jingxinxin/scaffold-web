const webpack            = require('webpack');
const merge              = require('webpack-merge');
const UglifyJSPlugin     = require('uglifyjs-webpack-plugin');
const common             = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output : {
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});