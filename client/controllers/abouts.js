var dailyTech = angular.module('dailyTech');

dailyTech.controller('AboutController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log(' AboutController loaded...');
 
	var featured = '<div class="featured" id="featured">';

	$scope.getAbouts = function(){
		$http.get('/api/about').success(function(response){
			$scope.about = response;
		});
	};
  
}]);