'use strict';

var mongoose = require('mongoose');

var itemModel = function() {
	var itemSchema = mongoose.Schema({
		title: String,
		description: String,
		author: String,
		publisher: String,
		category: String,
		price: Number,
		cover: String,
	});

	return mongoose.model('Item', itemSchema);
}


module.exports = new itemModel();