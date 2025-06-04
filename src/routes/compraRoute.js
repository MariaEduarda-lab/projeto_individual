const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/compraController');

router.get('/', CompraController.index);
router.get('/:id', CompraController.show);
router.post('/', CompraController.store);
router.put('/:id', CompraController.update);
router.delete('/:id', CompraController.delete);

module.exports = router;