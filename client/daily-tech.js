var dailyTech = angular.module('dailyTech',['ngRoute']);
//
dailyTech.config(function($routeProvider){
	$routeProvider.when('/', { 
		controller:'HomeController',
		templateUrl: 'views/home.html',

	})
	.when('/archives', {
		controller:'ArchivesController',
		templateUrl: 'views/archives.html'
	})  
	.when('/posts', {
		controller:'PostsController',
		templateUrl: 'views/posts.html'
	})  
	.when('/_For_Cat_Eyes_Only_', {
		controller:'CatsController',
		templateUrl: 'views/cats.html'
	})  
	.when('/posts/details/:id',{
		controller:'PostsController',
		templateUrl: 'views/post_details.html'
	})
	.when('/posts/add',{
		controller:'PostsController',
		templateUrl: 'views/add_post.html'
	})
	.when('/posts/edit/:id',{
		controller:'PostsController',
		templateUrl: 'views/edit_post.html'
	})
	/*
	*/
	.otherwise({
		redirectTo: '/'
	});
 
	dailyTech.controller('HomeController', ['$scope', function ($scope){
console.log("home");
	}]);
	
});