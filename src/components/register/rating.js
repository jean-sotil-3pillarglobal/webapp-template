(function(){
	function controller($scope){
		mv = this;

		mv.$onInit = function(){
			mv.entries = new Array(mv.value);
		};
	};

	/*<rating-component /> component*/
	app.component("ratingComponent", {
		templateUrl : "./views/register/rating.html",
		bindings: { 
			value : "="
		},
		transclude: true,
		controllerAs : "mv",
		controller : ["$scope", controller]
	});
}());