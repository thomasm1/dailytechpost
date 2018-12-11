 
const path = require('path');

module.exports = {
  entry:  
      './client/app/src/index.js',
  output: {
      path: path.resolve(__dirname, 'client/app/dist'),
    filename: 'bundle_daily_d3c10.js'
  } 
};
