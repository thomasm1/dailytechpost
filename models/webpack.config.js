const path = require('path');

module.exports = {
  entry: './post-schema.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};