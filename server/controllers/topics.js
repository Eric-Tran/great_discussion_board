var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = (function() {
	return {
		add: function(req, res) {
			console.log('adding new topic, req body is:', req.body);
			User.findOne({name: req.body.user}, function(err, user) {
				console.log('this is the user', user)
			var topic = new Topic({user: req.body.user, category: req.body.category, topic: req.body.topic, description: req.body.description});
			console.log('this is the new topic being added', topic);
			user.topics.push(topic);
			topic.save(function(err) {
				user.save(function(err) {
					if(err) {
						console.log('cannot save topics in topics.js');
					} else {
						User.update({name: req.body.user}, { $inc: { topicCount: 1 }}, function(err) {
								if(err) {
									console.log('error', err);
								} else {
									console.log('success updating topicCount!');
								}
							});	
						res.json('SAVED!')
					}
				})
			})
		})
		},

		show: function(req, res) {
			console.log('got to the topics.js to get topics')
			Topic.find({}).populate('_user').exec(function(err, result) {
				console.log('this is the result of with all the topics', result);
				if(err) {
					console.log("error showing topics in controller");
				} else {
					res.json(result);
				}	
			})
		},
		showOne: function(req, res) {
			Topic.findOne({_id: req.body.id})
			.populate({
				path: 'posts',
				model: 'Post',
				populate: {
					path: 'comments',
					model: 'Comment'
				}
			})
			.exec(function(err, result) {
				if(err) {
					console.log('error in showing one topic in topic.js')
				} else {
					res.json(result);
				}
			})
		}
	}
})()


