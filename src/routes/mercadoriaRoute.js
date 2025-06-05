const express = require('express');
const router = express.Router();
const MercadoriaController = require('../controllers/mercadoriaController');

router.get('/', MercadoriaController.index);
router.get('/:id', MercadoriaController.show);
router.post('/', MercadoriaController.store);
router.put('/:id', MercadoriaController.update);
router.delete('/:id', MercadoriaController.delete);

module.exports = router;