const express = require('express');
const router = express.Router();
const MercadoriaController = require('../controllers/mercadoriaController');

// 🔹 ROTA ESPECÍFICA PARA PÁGINA WEB
router.get('/minhas', MercadoriaController.exibirMinhasMercadorias);
router.post('/minhas', MercadoriaController.salvarMercadoria); // <- ADICIONADO

// 🔹 ROTAS REST (API JSON)
router.get('/', MercadoriaController.index);
router.get('/:id', MercadoriaController.show);
router.post('/', MercadoriaController.store);
router.put('/:id', MercadoriaController.update);
router.delete('/:id', MercadoriaController.delete);

module.exports = router;