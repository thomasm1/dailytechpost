'use strict';

(function() {

    angular.module('app')
        .controller('IndexController', ['$q', '$scope',  '$http', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', '$route', 'currentUser', IndexController]);



    function IndexController($q, $scope, $http, dataService, $cookies, $cookieStore, $log, $route, currentUser) {

        var vm = this; 
        $scope.titleLambda = "AWS Lambda POSTS";
        $http.get
        const okToGreet = function() {
            console.log(name);
            var favoriteName = name;
            return favoriteName;
        };

        vm.favoriteName = $cookies.favoriteName;

        function asyncGreet(name) {
            // perform some asynchronous operation, resolve or reject the promise when appropriate.
            return $q(function(resolve, reject) {
                setTimeout(function() {
                    if (okToGreet(name)) {
                        resolve('Hello, ' + name + '!');
                    } else {
                        reject('Greeting ' + name + ' is not allowed.');
                    }
                }, 1000);
            });
        }

        var promise = asyncGreet('Robin Hood');
        promise.then(function(greeting) {
            console.log('Success: ' + greeting);
        }, function(reason) {
            console.log('Failed: ' + reason);
        }); 

    }

}());