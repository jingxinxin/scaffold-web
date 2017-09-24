const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry  : [ 'babel-polyfill', './src/index' ],
  output : {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin({
      filename : 'main.css',
      allChunks: true
    })
  ],
  module : {
    rules: [
      {
        test   : /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : "babel-loader"
      },
      {
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use     : [ 'css-loader', 'postcss-loader' ]
        })
      },
      {
        test: /\.scss/,
        use : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use     : [ 'css-loader', 'postcss-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use : [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use : [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    alias     : {
      containers: path.resolve(__dirname, 'src/containers'),
      reducers  : path.resolve(__dirname, 'src/reducers'),
      sagas     : path.resolve(__dirname, 'src/sagas'),
      components: path.resolve(__dirname, 'src/components'),
      const     : path.resolve(__dirname, 'src/const')
    },
    extensions: [ '.js', '.jsx', 'scss' ]
  }
};