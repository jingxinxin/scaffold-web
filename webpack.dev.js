const webpack        = require('webpack');
const merge          = require('webpack-merge');
const common         = require('./webpack.config.js');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
  output   : {
    filename: '[name].[hash].js',
  },
  devtool  : 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins  : [
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev')
      }
    }),
  ],
});


