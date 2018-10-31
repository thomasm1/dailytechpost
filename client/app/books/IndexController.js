'use strict';

(function() {

    angular.module('app')
        .controller('IndexController', ['$q', 'books', 'dataService', 'badgeService', '$cookies', '$cookieStore', '$log', '$route', 'currentUser', IndexController]);

 

    function IndexController($q, books, dataService, badgeService, $cookies, $cookieStore, $log, $route, currentUser) {

        var vm = this;

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
            alert('Success: ' + greeting);
          }, function(reason) {
            alert('Failed: ' + reason);
          });
          
        vm.appName = books.appName;
 
        dataService.getAllBooks()
            .then(getBooksSuccess, null, getBooksNotification)
            .catch(errorCallback)
            .finally(getAllBooksComplete);
 
        function getAllBooksComplete() {
            //console.log('getAllBooks has completed');
        } 
 

    }

}());