const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js' //[contenthash].bundle.js' 
  },
  module: {
    rules: [{ // without additional settings, this will reference .babelrc
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"],  "@babel/preset-typescript"],
            // cacheDirectory:true
          }
        }
    },  
    {test:/\.(s(a|c)ss)$/,
  use:["style-loader","css-loader","sass-loader"]},
]
  },
  plugins:[ new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  mode: process.env.NODE_ENV==="production"?"production":"development",
  devtool: "source-map",
  devServer: {
    static: {
     directory: path.resolve(__dirname, './client')
    },
    hot:true
  }
}
