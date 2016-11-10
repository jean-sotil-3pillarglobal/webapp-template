var app = angular.module('myApp', ['ngRoute']);

(function(){
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	  $routeProvider.
	  	when("/register", {
	  		templateUrl : "../views/register/register.html",
	  		controller : "RegisterController"
	  	}).
	  	when("/admin", {
	  		templateUrl : "../views/admin/home.html",
	  		controller : "AdminController"
	  	}).
	  	when("/profile", {
	  		templateUrl : "../views/profile/home.html",
	  		controller : "ProfileController"
	  	});
	  	$locationProvider.html5Mode(true);
	}]);
}());