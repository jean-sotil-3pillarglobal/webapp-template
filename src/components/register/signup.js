(function(){

	function controller ($http, dataService){
		var mv = this;
	
		mv.$onInit = function(){
			mv.message = "Message from component";
			mv.movies = dataService.getAllMovies();
		};
	};

	/*<sign-up /> component*/
	app.component('signUp', {
		templateUrl : "./views/register/signup.html",
		controllerAs : "mv", //mv instead $ctrl default to reach scope values 
		controller : ["$http", "dataService", controller]
	});
}());