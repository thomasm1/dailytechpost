const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './client/src/index1.js',
      './client/src/index2.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
      path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  }
}