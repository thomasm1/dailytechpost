

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app1: 
    // [  'babel-polyfill',
      './src/index1.js',
    // ],
    app2: './src/index2.js',
    app3: './src/index3.js',
    app4: './src/index4.js',
    app5: './src/index5_d3.js'
  },
  output: { 
      path: path.resolve(__dirname, 'dist'),
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
    {
      test:/\.(s(a|c)ss)$/,
  use:["style-loader","css-loader","sass-loader"] 
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    } 
]
  },
  plugins:[ new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
  mode: process.env.NODE_ENV==="production"?"production":"development",
  devtool: "source-map",
  devServer: {
    static: {
     directory: path.resolve(__dirname, './')
    },
    hot:true
  }
}


 