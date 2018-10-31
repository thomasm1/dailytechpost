const mongoose = require('mongoose');

// Cat3 Schema
const cat3Schema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Cat3 = module.exports = mongoose.model('Cat3', cat3Schema);

// Get Cat3s
module.exports.getCat3s = (callback, limit) => {
	Cat3.find(callback).limit(limit);
};

// Add Cat3
module.exports.addCat3 = (cat3, callback) => {
	Cat3.create(cat3, callback);
};

// Update Cat3
module.exports.updateCat3 = (id, cat3, options, callback) => {
	var query = {_id: id};
	var update = {
		name: cat3.name,
		create_date: cat3.create_date
	};
	Cat3.findOneAndUpdate(query, update, options, callback);
};


// Delete Cat3
module.exports.removeCat3 = (id, callback) => {
	var query = {_id: id};
	Cat3.remove(query, callback);
};
