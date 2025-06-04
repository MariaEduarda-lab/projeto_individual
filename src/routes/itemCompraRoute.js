const express = require('express');
const router = express.Router();
const ItemCompraController = require('../controllers/itemCompraController');

router.get('/', ItemCompraController.index);
router.get('/:id', ItemCompraController.show);
router.post('/', ItemCompraController.store);
router.put('/:id', ItemCompraController.update);
router.delete('/:id', ItemCompraController.delete);

module.exports = router;