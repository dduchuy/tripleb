'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin@ds127105.mlab.com:27105/tripleb");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', () => {
  console.log("Database connected...");
});

module.exports = db;
