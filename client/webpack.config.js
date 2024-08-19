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
    // app: [
    //   // 'babel-polyfill',
    //   'core-js/stable',
    //   'regenerator-runtime/runtime'],
      app1: './src/index1.js',
      app2: './src/index2.js',
      app3: './src/index3.js',
      app4: './src/index4.js',
      app5: './src/index5_d3.js' 
  }, 
  output: {
    path: path.resolve(__dirname, 'build'),
      path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle-daily.js'
  },
    module: {
      // loaders: [{
      //     test: /\.js?$/,
      //     exclude: /node_modules/,
      //     loader: 'babel-loader',
      //     query: {
      //        presets: ['env', 'stage-0']
      //     }
      // }] 
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
 

 