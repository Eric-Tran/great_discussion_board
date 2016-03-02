var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		add: function(req, res) {
			var new_user = new User({name: req.body.name});
			new_user.save(function(err) {
				if(err) {
					console.log('error in saving new user');
				} else {
					res.send('success in saving new user!')
				}
			})
		},
		show: function(req, res) {
			User.findOne({name: req.body.name}, function(err, user) {
				if(err) {
					console.log('users.js: cannot find user')
				} else {
					res.json(user);
				}
			})
		}
	}
}) ();