app.get('/items', function (req, res) {
    Item.find({}, function (err, items) {
        if (err)
            throw err;
        res.send(items);
    });
});
//# sourceMappingURL=items.js.map