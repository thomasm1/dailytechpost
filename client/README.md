# webpack --mode production 
 "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack --mode production",
    "serve": "webpack-dev-server --output-public-path=/dist/"
# webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_tmm.js'
  }
};
# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### License

This project is licensed under the MIT License