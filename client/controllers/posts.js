var dailyTech = angular.module('dailyTech');

dailyTech.controller('PostsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PostsController loaded...');

	$scope.getPosts = function(){
		$http.get('/api/posts').success(function(response){
			$scope.posts = response;
		});
	}
 

	$scope.updatePost = function(){
		var id = $routeParams.id;
		$http.put('/api/posts/'+id, $scope.post).success(function(response){
			window.location.href='#/posts';
		});
	}

	$scope.removePost = function(id){
		$http.delete('/api/posts/'+id).success(function(response){
			window.location.href='#/posts';
		});
	}
}]);