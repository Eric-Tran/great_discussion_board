var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	user: String,
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	comment: String
})

mongoose.model('Comment', CommentSchema);
