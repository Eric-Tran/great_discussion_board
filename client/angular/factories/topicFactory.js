myApp.factory('topicFactory', function($http) {
	var factory ={};
	var topic = [];
factory.getTopic = function(data, callback) {
	$http.post('/topic/one', {id: data}).success(function(result) {
		topic = result;
		callback(topic);
	})
}
factory.addPost = function(id, user, data, callback) {
	$http.post('/post/new', {id: id, user: user, post: data.post}).success(function(result) {
		callback(result);
	})
}
factory.addComment = function(id, user, data, callback) {
	$http.post('/comment/new', {id: id, user: user, comment: data}).success(function(result) {
		callback(result);
	})
}
return factory;
})