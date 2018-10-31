const mongoose = require('mongoose');

// Post Schema
const postSchema = mongoose.Schema({
 
	 
	id:{ 
		type: String,
		required: true
	},
	title:{ 
		type: String,
		required: true
	},
	date:{ 
		type: String,
		required: true
	},
	did:{ 
		type: String,
		required: true
	},
	cat3:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	blogpost:{
		type: String,
		required: true
	},
	blogcite:{
		type: String,
		required: true
	} ,
	image_url:{
		type: String
	} 
});

const Post = module.exports = mongoose.model('Post', postSchema);

// Get Posts
module.exports.getPosts = (callback, limit) => {
	Post.find(callback).limit(limit);
};

// Get Post
module.exports.getPostById = (id, callback) => {
	Post.findById(id, callback);
};

// Add Post
module.exports.addPost = (post, callback) => {
	Post.create(post, callback);
};

// Update Post
module.exports.updatePost = (id, post, options, callback) => {
	var query = {_id: id};
	var update = {
		id: post.id,
		title: post.title,
		date: post.date,
		did: post.did,
		cat3: post.cat3,
		description: post.description,
		author: post.author,
		blogpost: post.blogpost,
		blogcite: post.blogcite, 
		image_url: post.image_url 
	};
	Post.findOneAndUpdate(query, update, options, callback);
};

// Delete Post
module.exports.removePost = (id, callback) => {
	var query = {_id: id};
	Post.remove(query, callback);
};
