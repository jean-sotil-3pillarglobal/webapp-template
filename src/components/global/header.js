(function(){
	function controller($scope){
		mv = this;

		mv.$onInit = function(){
			/*Code goes here*/
		};
	};

	/*<global-header /> component*/
	app.component("globalHeader", {
		templateUrl : "./views/global/header.html",
		bindings: {},
		transclude: false,
		controllerAs : "mv",
		controller : ["$scope", controller]
	});
}());