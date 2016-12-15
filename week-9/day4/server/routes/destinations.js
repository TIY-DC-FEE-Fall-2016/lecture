
var express = require('express');
var destinationsModel = require('../models/destinations');

// This will be my collection of routes for "/destinations"
var router = express.Router();

router.get('/', function allDestinations(req, res) {
    // res
    //     .status(200)
    //     .set('Content-Type', 'application/json')
    //     .send( JSON.stringify([ { id: 1, name: 'Cancun', activities: [] } ]) );

    // or we can just do this...

    // call a function which will read the DB and get us all destinations
    destinationsModel.getAll(function dataRetrieved(err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('Uh oh... couldn\'t get your data');
            return;
        }
        res.json( data );
    });
});

/**
 * Handles individual destination route where the URL matches something like:
 * /destinations/123456789012345678901234
 *
 * @param  {Object} req
 * @param  {Object} res
 * @return {void}
 */
router.get('/:id([a-f0-9]{24})', function getSingleDestination(req, res) {
    res.json({ id: req.params.id, name: 'Whatever', activities: [] });
});

router.post('/', function createDestination(req, res) {
    console.log( req.body );

    destinationsModel.create(req.body, function dataCreated(err, data) {
        if (err) { /* do stuff */ }
        res.json( data );
    });
});

router.get('/search', function doSearch(req, res) {
    res.json([ { id: 96, name: 'SEARCHED LOCATION', activities: [] } ]);
});



module.exports = router;
