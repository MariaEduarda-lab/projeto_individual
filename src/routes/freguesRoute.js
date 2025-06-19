const express = require('express');
const router = express.Router();
const FreguesController = require('../controllers/freguesController');
const MercadoriaController = require('../controllers/mercadoriaController');

router.get('/', FreguesController.index);
router.get('/mercadorias', MercadoriaController.exibirMercadoriasParaFregues);
router.get('/:id', FreguesController.show);
router.post('/', FreguesController.store);
router.put('/:id', FreguesController.update);
router.delete('/:id', FreguesController.delete);

module.exports = router;