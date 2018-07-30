const mongoose = require('mongoose');

// Archive Schema
const archiveSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Archive = module.exports = mongoose.model('Archive', archiveSchema);

// Get Archives
module.exports.getArchives = (callback, limit) => {
	Archive.find(callback).limit(limit);
};
 