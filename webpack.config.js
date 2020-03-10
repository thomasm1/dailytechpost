const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './client/src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
      path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle-daily2.js'
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