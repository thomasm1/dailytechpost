const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const WebpackManifestPlugin = require("webpack-manifest-plugin")

const config = {
  entry: "./src/index.js",
  output: {
    filename: "myBundle.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8082,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], "@babel/preset-react"]
          }
        }
      }
    ]
  }
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.[hash].css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config
