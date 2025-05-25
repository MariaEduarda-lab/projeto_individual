const express = require('express');
const router = express.Router();
const itemCompraController = require('../controllers/itemCompraController');

router.get('/', itemCompraController.getAllitensCompra);
router.get('/:id', itemCompraController.getItemCompraById);
router.post('/', itemCompraController.createItem);
router.put('/:id', itemCompraController.updateItem);
router.delete('/:id', itemCompraController.deleteItem);

module.exports = router;