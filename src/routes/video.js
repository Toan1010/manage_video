const express = require('express');
const router = express.Router();

const VideoController = require('../app/controllers/VideoController');

router.get('/create', VideoController.create);
router.post('/store', VideoController.store);
router.get('/edit', VideoController.operation);
router.get('/edit/:slug', VideoController.editItem);
router.put('/:id', VideoController.update);
router.delete('/:id', VideoController.delete);
router.get('/:slug', VideoController.index);

module.exports = router;