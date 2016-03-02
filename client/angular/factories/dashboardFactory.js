myApp.factory('dashboardFactory', function($http) {
	var factory = {};
	var topics = [];
	factory.addTopic = function(user, topic, callback) {
		$http.post('/topic/new', {user: user, category: topic.category, topic: topic.topic, description: topic.description}).success(function(res) {
			callback(res);
		})
	}
	factory.getTopics = function(callback) {
		$http.get('/topic').success(function(data) {
			topics = data;
			callback(topics);
		})
	}
	return factory;
})