myApp.controller('topicController', function($scope, $location, $routeParams, topicFactory) {
	$scope.user = $routeParams.name;
	topicFactory.getTopic($routeParams.id, function(data) {
		$scope.topic = data;
	})

	$scope.goDashboard = function() {
		$location.path('/dashboard').search({name: $routeParams.name});
	}

	$scope.addPost = function() {
		topicFactory.addPost($routeParams.id, $routeParams.name, $scope.new_post, function(data) {
			topicFactory.getTopic($routeParams.id, function(data) {
				$scope.topic = data;
				$scope.new_post = {};
			})
		});
	}

	$scope.addComment = function(id, comment, $index) {
		topicFactory.addComment(id, $routeParams.name, comment, function(data) {
			topicFactory.getTopic($routeParams.id, function(data) {
			$scope.topic = data;
			$scope.new_comment[$index] = {};
			})
		});
	}

	$scope.goUser = function(user) {
		$location.path('/user/' + user).search({name: $scope.user});
	}
})

