 
const path = require('path');

module.exports = {
  entry:  
      './client/public/src/index.js',
  output: {
      path: path.resolve(__dirname, 'client/public/dist'),
    filename: 'bundle_daily_d3c10.js'
  } 
};
