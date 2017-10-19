var app = require('express')();
var Book = require('../models/bookModel');

app.get('/books', function(req, res) {

	Book.find({}, function(err, books) {
		if(err) throw err;

		res.send(books);
	});
});

app.get('/book', function(req, res) {
	var id = req.query.bookId;

	Book.find({ _id: id }, function(err, book) {
		if(err) throw err;
		
		res.send(book[0]);
	});
});

app.delete('/book', function(req, res) {
	var bookId = req.query.bookId;
	console.log(bookId)

	Book.findByIdAndRemove(bookId, function(err, book) {
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "The request was not completed. Book with id " + book._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully deleted",
				id: book._id
			});
		}
	});
});

app.post('/book', function(req, res) {
	var bookData = req.body.bookData;
	var book = new Book(bookData);
	book.save(function(err, createdBookObject) {
		if(err) {
			res.send({
				success: false,
				message: "Book not added"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully added",
				book: createdBookObject
			});
		}
	});
});

app.put('/book', function(req, res) {
	var bookData = req.body.bookData;

	Book.findById(bookData.id, function(err, book) {
		if(err) {
			res.send(err);
		} else {
			book.title = bookData.title;
			book.author = bookData.author;
			book.publisher = bookData.publisher;
			book.price = bookData.price;
			book.description = bookData.description;
			book.category = bookData.category;
			book.cover = bookData.cover;

			book.save(function(err, book) {
				if(err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "Book successfully updated"
					});
				}
			});
		}
	});
});

module.exports = app;