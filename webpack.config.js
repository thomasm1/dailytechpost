 
const path = require('path');

module.exports = {
  entry:  
      './client/src/index.js'   ,
  output: {
      path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle_daily_sept.js'
  } 
};