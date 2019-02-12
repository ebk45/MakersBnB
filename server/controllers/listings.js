const Listing = require('../models').Listing;

module.exports = {
    create(req, res) {
        return Listing
            .create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Listing
            .all()
            .then(listings => res.status(200).send(listings))
            .catch(error => res.status(400).send(error))
    },
    retrieve(req, res) {
        return Listing
            .findById(req.params.id)
            .then(listing => {
                if (!listing) {
                    return res.status(404).send({
                        message: 'Listing not found',
                    })
                }
                return res.status(200).send(listing);
            })
            .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return Listing
            .findById(req.params.id)
            .then(listing => {
                if (!listing) {
                    return res.status(400).send({
                        message: 'listing not found'
                    })
                }
                return listing
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
    update(req, res) {
        return Listing
            .findById(req.params.id)
            .then(listing => {
                if (!listing) {
                    return res.status(404).send({
                        message: 'listing not found'
                    })
                }
                return listing
                    .update({
                        name: req.body.name || listing.name,
                        description: req.body.description || listing.description,
                        price: req.body.price || listing.price
                    })
                    .then(() => res.status(200).send(listing))
                    .catch((error) => res.status(400).send(error))
                })
            .catch((error) => res.status(400).send(error))
    },
};
