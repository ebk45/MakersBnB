const listingsController = require('../controllers').listings;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Listings API!',
    }));

    app.post('/api/listings', listingsController.create);
    app.get('/api/listings', listingsController.list);
    app.get('/api/listings/:id', listingsController.retrieve);
    app.delete('/api/listings/:id', listingsController.delete)
    app.put('/api/listings/:id', listingsController.update)
};
