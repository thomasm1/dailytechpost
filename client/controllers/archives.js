var dailyTech = angular.module('dailyTech');

dailyTech.controller('ArchivesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log(' ArchivesController loaded...');

	$scope.getArchives = function(){
		$http.get('/api/archives').success(function(response){
			$scope.archives = response;
		});
	};
  
}]);