var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },
        { 
            test: /\.css$/, 
            loader: 'css-loader' 
        
        },
    ]
  }
};
