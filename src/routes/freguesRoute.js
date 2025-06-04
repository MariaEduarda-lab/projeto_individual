const express = require('express');
const router = express.Router();
const FreguesController = require('../controllers/freguesController');

router.get('/', FreguesController.index);
router.get('/:id', FreguesController.show);
router.post('/', FreguesController.store);
router.put('/:id', FreguesController.update);
router.delete('/:id', FreguesController.delete);

module.exports = router;