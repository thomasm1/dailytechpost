var dailyTech = angular.module('dailyTech');

dailyTech.controller('AboutController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log(' AboutController loaded...');

	$scope.getAbouts = function(){
		$http.get('/api/about').success(function(response){
			$scope.about = response;
		});
	};
  
}]);