const express = require('express');
const router = express.Router();
const MercadoriaController = require('../controllers/mercadoriaController');

router.get('/minhas', MercadoriaController.exibirMinhasMercadorias);
router.post('/minhas', MercadoriaController.salvarMercadoria);

router.get('/', MercadoriaController.index);
router.get('/:id', MercadoriaController.show);
router.post('/', MercadoriaController.store);
router.put('/:id', MercadoriaController.update);
router.delete('/:id', MercadoriaController.delete);
router.get('/fregues', MercadoriaController.exibirMercadoriasParaFregues);

module.exports = router;