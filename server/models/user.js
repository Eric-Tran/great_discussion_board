var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	topicCount: Number,
	postCount: Number,
	commentCount: Number,
	topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	commments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('User', UserSchema);