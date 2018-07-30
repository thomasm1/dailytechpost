const express = require('express'); 
const app = express();
//const request = require('request'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

app.use(express.static(__dirname + '/client'));
//app.use(express.jsion());
app.use(bodyParser.json());
 
About = require('./models/about');
Archives = require('./models/archive');
Cat3 =require('./models/cat3'); 
Post = require('./models/post'); 
 
mongoose.connect('mongodb://localhost/poststore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/posts or /api/	');
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
app.get('/api/posts/:_id', (req, res) => {
	const posters = posts.find(c = c._id === parseInt(req.parems._id));
	if (!posters) res.status(404).send('The post with given ID was ' + res.send(posters));
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

/*
app.get('/api/about', (req, res) => {
	About.getAbouts((err, about) => {
		if(err){
			throw err;
		}
		res.json(about);
	});
});

app.get('/api/archives', (req, res) => {
	Archives.getArchives((err, archives) => {
		if(err){
			throw err;
		}
		res.json(archives);`
	});
});
 
app.get('/api/cat3s', (req, res) => {
	Cat3.getCat3s((err, cat3s) => {
		if(err){
			throw err;
		}
		res.json(cat3s);
	});
});

*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port 3000`)); 
console.log(`Running on port ${port}`);

 