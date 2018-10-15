// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function (config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: 'client/',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
 
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", 
      "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.js",
      "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-route.js",
      "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-cookies.js",
      "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular-resource.js"  
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8888,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'FirefoxHeadless'
    ],

    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
      CustomHeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Which plugins to enable
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
     proxies: {
       '/': 'http://localhost:9000/'
     },
     // URL root prevent conflicts with the site root
    urlRoot: '_karma_'
  });
};
