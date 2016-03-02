var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html'
		})
		.when('/user/:user', {
			templateUrl: '/partials/user.html'
		})
		.when('/topic/:id', {
			templateUrl: '/partials/topic.html'
		})
		.otherwise({
			redirectTo:'/'
		})
});