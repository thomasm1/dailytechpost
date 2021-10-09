const path = require('path');

module.exports = {
  entry: {
    app1: 
    // [  'babel-polyfill',
      './client/src/index1.js',
    // ],
    app2: './client/src/index2.js',
    app3: './client/src/index3.js',
    app4: './client/src/index4.js',
    app5: './client/src/index5_d3.js'
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