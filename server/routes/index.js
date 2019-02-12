const listingController = require('../controllers').todos;

module.exports = (server) => {
    server.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Listings API!',
    }));

    server.post('/api/listings', listingController.create);
};

