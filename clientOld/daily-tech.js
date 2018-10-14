var dailyTech = angular.module('dailyTech',['ngRoute']);

dailyTech.controller('HomeController', ['$scope', function ($scope){
	console.log("home");
		}]);
		
dailyTech.controller('nasaAppController', ['$scope', function ($scope) {
 
	console.log("nasaAppController"); 
		$scope.nasas =  ['2018_08_12_Bolid_Perseus_1024px.jpg','charon_then_now_1024.jpg','PIA22486CuriositySelf2018dustStorm1024.jpg','NGC1360-Final5D-Cc2_c1024.jpg' ] ;
		$scope.added = ['PencilNebula_Perez_1080.jpg','PlaneMoon_Kim_960.jpg','CurtainsofLightRohner1024.jpg','enceladusstripes_cassini_960.jpg','AroundSadrNarduzziColombari1024.jpg','Comet-21p-Giacobini-Zinner1060.jpg','2018_08_12_Bolid_Perseus_1024px.jpg','charon_then_now_1024.jpg','PIA22486CuriositySelf2018dustStorm1024.jpg','NGC1360-Final5D-Cc2_c1024.jpg','enceladusstripes_cassini_960.jpg','enceladusstripes_cassini_960.jpg' ];
				 
 
 
 
 
}]);


dailyTech.controller('nasaApiCtrl', ['$scope', function ($scope) {
 
	console.log("nasaApiCtrl"); 
 
}]);

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
	.otherwise({
		redirectTo: '/'
	});
 
	
});