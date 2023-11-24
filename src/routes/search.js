const express = require('express');
const router = express.Router();

const SearchController = require('../app/controllers/SearchController');

router.get('/:slug', SearchController.index);

module.exports = router;
