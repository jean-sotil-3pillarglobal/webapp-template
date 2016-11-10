(function(){
	function service(loggerService, $http){
		var getAllMovies = function(){
			loggerService.log("loading books.");
			return [
				{
					"name":"dummy 1",
					"rating" : 4
				},
				{
					"name":"dummy 2",
					"rating" : 3
				},
				{
					"name":"dummy 3",
					"rating" : 2
				}
			];
		};
		var getAllReaders = function(){
			return [
				{
					"name":"dummy 1",
					"lastname" : "lastname dummy 1"
				},
				{
					"name":"dummy 1",
					"lastname" : "lastname dummy 2"
				},
				{
					"name":"dummy 1",
					"lastname" : "lastname dummy 3"
				}
			];
		};
		
		return {
			getAllMovies : getAllMovies,
			getAllReaders : getAllReaders
		}
	};

	/*Inject loggerService as a dependency! */
	service.$inject = ['loggerService', '$http'];

	/*Data Service*/
	app.factory("dataService", service);

}());