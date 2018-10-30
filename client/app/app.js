'use strict';

(function() {

    var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngResource']);

    app.provider('books', ['constants', function (constants) {

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var appName = constants.APP_TITLE;
            var version = constants.APP_VERSION;

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = constants.APP_DESCRIPTION;

            return {
                appName: appName,
                appDesc: appDesc
            };
        };

    }]);

    app.config(['booksProvider', '$routeProvider', '$logProvider', '$httpProvider', '$locationProvider','$provide', function (booksProvider, $routeProvider, $logProvider, $httpProvider, $locationProvider, $provide) {

        $provide.decorator('$log', ['$delegate', 'books', logDecorator]);

        booksProvider.setIncludeVersionInTitle(true);
        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push('bookLoggerInterceptor');

        $routeProvider
        .when('/', {
                template: '<div><style>div.card-header {display:none;} button {z-index:1001 !important;} form {z-index:1001 !important;}</style></div>',
                controller: 'IndexController',
                controllerAs: 'iCtrl'
        })
            .when('/Books', {
                templateUrl: '/app/templates/read.html',
                controller: 'BooksController',
                controllerAs: 'books'
            })
            .when('/AddBook', {
                templateUrl: '/app/templates/addBook.html',
                controller: 'AddBookController',
                controllerAs: 'bookAdder'
            })
            .when('/archives', {
                controller:'ArchivesController',
                templateUrl: '/app/templates/archives.html'
            })  
            .when('/_For_Cat_Eyes_Only_', {
                controller:'CatsController',
                templateUrl: '/app/templates/cats.html'
            })  
            .when('/EditBook/:bookID', {
                templateUrl: '/app/templates/editBook.html',
                controller: 'EditBookController',
                controllerAs: 'bookEditor'
            })
            .otherwise('/');
            $locationProvider.html5Mode(true);

    }]);

    app.run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

         console.log('successfully changed routes'); 
         console.log(event);
         console.log(current);
         console.log(previous);
     //    console.log(rejection);
        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {

            console.log('error changing routes');

            console.log(event);
            console.log(current);
            console.log(previous);
            console.log(rejection);

        });

    }]);

    function logDecorator($delegate, books) {

        function log(message) {
            message += ' - ' + new Date() + ' (' + books.appName + ')';
            $delegate.log(message);
        }

        function info(message) {
            $delegate.info(message);
        }

        function warn(message) {
            $delegate.warn(message);
        }

        function error(message) {
            $delegate.error(message);
        }

        function debug(message) {
            $delegate.debug(message);
        }

        function awesome(message) {
            message = 'Awesome!!! - ' + message;
            $delegate.debug(message);
        }

        return {
            log: log,
            info: info,
            warn: warn,
            error: error,
            debug: debug,
            awesome: awesome
        };

    }

}());