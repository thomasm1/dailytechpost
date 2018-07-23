const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const d3 = require('d3');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Cat3 =require('./models/cat3');
Post =require('./models/post');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/poststore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/posts or /api/	');
});

app.get('/api/cat3s', (req, res) => {
	Cat3.getCat3s((err, cat3s) => {
		if(err){
			throw err;
		}
		res.json(cat3s);
	});
});

app.post('/api/cat3s', (req, res) => {
	var cat3 = req.body;
	Cat3.addCat3(cat3, (err, cat3) => {
		if(err){
			throw err;
		}
		res.json(cat3);
	});
});

app.put('/api/cat3s/:_id', (req, res) => {
	var id = req.params._id;
	var cat3 = req.body;
	Cat3.updateCat3(id, cat3, {}, (err, cat3) => {
		if(err){
			throw err;
		}
		res.json(cat3);
	});
});

app.delete('/api/cat3s/:_id', (req, res) => {
	var id = req.params._id;
	Cat3.removeCat3(id, (err, cat3) => {
		if(err){
			throw err;
		}
		res.json(cat3);
	});
});

app.get('/api/posts', (req, res) => {
	Post.getPosts((err, posts) => {
		if(err){
			throw err;
		}
		res.json(posts);
	});
});

app.get('/api/posts/:_id', (req, res) => {
	Post.getPostById(req.params._id, (err, post) => {
		if(err){
			throw err;
		}
		res.json(post);
	});
});

app.post('/api/posts', (req, res) => {
	var post = req.body;
	Post.addPost(post, (err, post) => {
		if(err){
			throw err;
		}
		res.json(post);
	});
});

app.put('/api/posts/:_id', (req, res) => {
	var id = req.params._id;
	var post = req.body;
	Post.updatePost(id, post, {}, (err, post) => {
		if(err){
			throw err;
		}
		res.json(post);
	});
});

app.delete('/api/posts/:_id', (req, res) => {
	var id = req.params._id;
	Post.removePost(id, (err, post) => {
		if(err){
			throw err;
		}
		res.json(post);
	});
});

app.listen(3000);
console.log('Running on port 3000...');