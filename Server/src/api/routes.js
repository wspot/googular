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

router.post('/getfilteredSearch', async (req, res, next) => {
    try {
        let topics = ('topics' in req.body) ? req.body.topics : [];
        let query = topics.length > 0 ? { 'topics': { $in: topics } } : {};
        let result = await searchResult.find(query);
        res.json({ result });

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