require('babel-loader');
require('@babel/preset-env')
require('core-js/stable');
require('regenerator-runtime/runtime');
// require('html-loader');
// require('css-loader');
// require('style-loader');
// require('webpack');
// require('webpack-cli');
// require('webpack-dev-server');
// require('webpack-merge');
// require('path');
// require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: [
      // 'babel-polyfill',
      'core-js/stable',
      'regenerator-runtime/runtime', 
      './client/src/index1.js',
      './client/src/index2.js',
      './client/src/index3.js',
      './client/src/index4.js',
      './client/src/index5_d3.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
      path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle-daily2.js'
  },
  module: { 
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
            ]
          }
        }

        // query: {
        //    presets: ['env', 'stage-0']
        // }
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
  }
}