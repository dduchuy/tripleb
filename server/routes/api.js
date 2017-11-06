var app = require('express')();
var Item = require('../models/itemModel');

app.get('/items', function(req, res) {

  Item.find({}, function(err, items) {
    if(err) throw err;

    res.send(items);
  });
});

app.get('/item', function(req, res) {
	var id = req.query.itemId;

	Item.find({ _id: id }, function(err, item) {
		if(err) throw err;

		res.send(item[0]);
	});
});

app.delete('/item', function(req, res) {
	var itemId = req.query.itemId;
	console.log(itemId)

	Item.findByIdAndRemove(item, function(err, item) {
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "The request was not completed. Item with id " + item._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "Item, successfully deleted",
				id: item._id
			});
		}
	});
});

app.post('/item', function(req, res) {
	var itemData = req.body.itemData;
	var item = new Item(itemData);
	item.save(function(err, createdItemObject) {
		if(err) {
			res.send({
				success: false,
				message: "Item not added"
			});
		} else {
			res.send({
				success: true,
				message: "Item successfully added",
				item: createdItemObject
			});
		}
	});
});

app.put('/item', function(req, res) {
	var itemData = req.body.itemData;

	Item.findById(itemData.id, function(err, item) {
		if(err) {
			res.send(err);
		} else {
			item.title = itemData.title;
			item.author = itemData.author;
			item.publisher = itemData.publisher;
			item.price = itemData.price;
			item.description = itemData.description;
			item.category = itemData.category;
			item.cover = itemData.cover;

			item.save(function(err, item) {
				if(err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "Item successfully updated"
					});
				}
			});
		}
	});
});

module.exports = app;
