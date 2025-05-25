const express = require('express');
const router = express.Router();
const freguesController = require('../controllers/freguesController');

router.get('/', freguesController.getAllFregueses);
router.get('/:id', freguesController.getFreguesById);
router.post('/', freguesController.createFregues);
router.put('/:id', freguesController.updateFregues);
router.delete('/:id', freguesController.deleteFregues);

module.exports = router;