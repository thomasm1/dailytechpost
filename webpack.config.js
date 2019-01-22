 
const path = require('path');

module.exports = {
  entry:  
      './client/public/src/index.js',
  output: {
      path: path.resolve(__dirname, 'client/public/dist'),
    filename: 'bundle-tmm.js'
  } 
};
