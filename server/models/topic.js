var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
	user: String,
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	category: String,
	topic: String,
	description: String
})

mongoose.model('Topic', TopicSchema);