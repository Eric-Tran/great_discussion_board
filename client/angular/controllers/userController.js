myApp.controller('userController', function($scope, $location, $routeParams, userFactory) {
	user = $routeParams.user;
	userFactory.getUser(user, function(data) {
		$scope.userInfo = data;
	})
	$scope.goDashboard = function() {
		$location.path('/dashboard').search({name: $routeParams.name});
	}
});