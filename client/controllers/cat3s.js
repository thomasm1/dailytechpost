var dailyTech = angular.module('dailyTech');

dailyTech.controller('Cat3sController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Cat3sController loaded...');

	$scope.getCat3s = function(){
		$http.get('/api/cat3s').success(function(response){
			$scope.cat3s = response;
			console.log(response);
		});
	};

	$scope.updateCat3s = function(){
		var id = $routeParams.id;
		$http.put('/api/cat3s/'+id, $scope.cat3).success(function(response){
			window.location.href='#/cat3s';
		});
	};

	$scope.removeCat3s = function(id){
		$http.delete('/api/cat3s/'+id).success(function(response){
			window.location.href='#/cat3s';
		});
	};
}]);