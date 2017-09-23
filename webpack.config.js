const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

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
        test: /\.(scss|css)$/,
        use : [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
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
      sagas     : path.resolve(__dirname, 'src/sagas')
    },
    extensions: [ '.js', '.jsx' ]
  }
};