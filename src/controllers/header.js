(function(){
	app.controller('HeaderController', ['$scope', "constantsService", function ($scope, constantsService) {
	  $scope.app_title = constantsService.APP_TITLE;
	  $scope.message="Hello!";

	  $scope.display = function(){
	  	toastr.error('Are you the 6 fingered man?')
	  };
	}]);
}());