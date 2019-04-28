const mongoose = require('mongoose');

// About Schema
const aboutSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	}
});

const About = module.exports = mongoose.model('About', aboutSchema);

// Get Abouts
 module.exports.getAbouts = (callback, limit) => {
	About.find(callback).limit(limit);
}; 
 