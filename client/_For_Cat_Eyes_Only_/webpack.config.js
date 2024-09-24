const path = require('path');

const config = {
    entry: {cats: './cats.js', config: './config.js'}, 
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
  filename: '[name].bundle-1.js'
},
  module: {
    rules: [
      { test: /\.txt$/, 
        exclude: /node_modules/,
        use:{ loader: 'raw-loader'} }
    ]
  }
};

module.exports = config;
