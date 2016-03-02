var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		add: function(req, res) {
			console.log('comments.js: this is the req.body:', req.body, req.body.user, req.body.id, req.body.comment);
			Post.findOne({_id: req.body.id}, function(err, post) {
				var comment = new Comment({user: req.body.user, comment: req.body.comment});
				post.comments.push(comment);
				comment.save(function(err) {
					post.save(function(err) {
						if(err) {
							console.log('error adding comment in comments.js');
						} else {
							User.update({name: req.body.user}, { $inc: { commentCount: 1 }}, function(err) {
								if(err) {
									console.log('error', err);
								} else {
									console.log('success updating commentCount!');
								}
							});	
							res.json('comment saved!');
						}
					})
				})
			})
		}
	}
})()
