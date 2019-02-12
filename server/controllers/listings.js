const Listings = require('../models').Listing;

module.exports = {
    create(req, res) {
        return Listings
            .create({
                // title: req.body.title,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
};
