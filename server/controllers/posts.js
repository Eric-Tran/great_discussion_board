var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		add: function(req, res) {
			Topic.findOne({_id: req.body.id}, function(err, topic) {
				var post = new Post({user: req.body.user, post: req.body.post})
				topic.posts.push(post);
				post.save(function(err) {
					topic.save(function(err) {
						if(err) {
							console.log('error addiding a new post in posts.js');
						} else {
							User.update({name: req.body.user}, { $inc: { postCount: 1 }}, function(err) {
								if(err) {
									console.log('error', err);
								} else {
									console.log('success updating postCount!');
								}
							});	
							res.json('post saved!');			
						}
					})
				})
			})
		}
	}
})()

