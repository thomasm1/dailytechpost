var dailyTech = angular.module('dailyTech',['ngRoute']);

dailyTech.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PostsController',
		templateUrl: 'views/posts.html'
	})
	.when('/posts', {
		controller:'PostsController',
		templateUrl: 'views/posts.html'
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
	.otherwise({
		redirectTo: '/'
	});
});