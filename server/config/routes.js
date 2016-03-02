var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');
var comments = require('./../controllers/comments.js');

module.exports = function(app) {
	app.post('/users', function(req, res) {
		users.show(req, res);
	})
	app.post('/users/add', function(req, res) {
		users.add(req, res);
	})
	app.post('/topic/new', function(req, res) {
		console.log('now in routes adding topic with', req.body)
		topics.add(req, res);
	})
	app.get('/topic', function(req, res) {
		console.log('got here to the routes with req');
		topics.show(req, res);
	})
	app.post('/topic/one', function(req, res) {
		topics.showOne(req, res);
	})
	app.post('/post/new', function(req, res) {
		posts.add(req, res);
	})
	app.post('/comment/new', function(req, res) {
		comments.add(req, res);
	})
}


