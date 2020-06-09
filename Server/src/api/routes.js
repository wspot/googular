const { Router } = require('express');
const router = Router();
const searchResult = require('./../models/SearchResult');

router.get('/searchResults', async (req, res, next) => {
    try {
        const results = await searchResult.find();
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.post('/searchResults', async (req, res, next) => {
    try {
        const entity = new searchResult(req.body);
        const createdEntity = await entity.save();
        res.json(createdEntity);
    } catch (error) {
        if (error.name == 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});

module.exports = router;