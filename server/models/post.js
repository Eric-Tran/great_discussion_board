var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	user: String,
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	likes: Number,
	post: String,
})

mongoose.model('Post', PostSchema);