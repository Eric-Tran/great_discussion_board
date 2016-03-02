myApp.factory('userFactory', function($http) {
	var factory= {};
	var users = [];
	factory.addUser = function(data) {
		$http.post('/users/add', {name: data}).success(function() {
			console.log('user added!');
		})
	}
	factory.getUser = function(user, callback) {
		$http.post('/users', {name: user}).success(function(res) {
			users = res;
			callback(users);
		})
	}
return factory;
})


