myApp.controller('loginController', function($scope, $location, $routeParams, userFactory) {
	$scope.addUser = function() {
			userFactory.addUser($scope.user.name);
			$location.path('/dashboard/').search({name: $scope.user.name});
	}
})