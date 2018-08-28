var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	post : String
})

module.exports = {
	Post : mongoose.model('Post', postSchema)
}