myApp.controller('dashboardController', function($scope, $location, $routeParams, dashboardFactory, userFactory) {
		dashboardFactory.getTopics(function(data) {
		$scope.topics = data;
	})
	$scope.user = $routeParams.name;

	$scope.addTopic = function() {
		dashboardFactory.addTopic($scope.user, $scope.new_topic, function(data) {
			dashboardFactory.getTopics(function(data) {
			$scope.topics = data;
			$scope.new_topic = {};
			});
		});
	};


	$scope.goTopic = function(id) {
		$location.path('/topic/' + id).search({name: $scope.user});
	}
	$scope.goUser = function(user) {
		$location.path('/user/' + user).search({name: $scope.user});
	}
})