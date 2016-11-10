(function(){
	function service(){
		var log = function(msg){
			console.log(msg);
		};
		
		return {
			log : log
		}
	};

	/*Logger Service*/
	app.factory("loggerService", service);
}());