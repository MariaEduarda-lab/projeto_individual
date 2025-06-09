const express = require('express');
const router = express.Router();
const DonoBancaController = require('../controllers/donoBancaController');

router.get('/login', DonoBancaController.exibirLogin);
router.get('/cadastro', DonoBancaController.exibirCadastro);
router.get('/perfil', DonoBancaController.exibirPerfil); 
router.get('/perfil/editar', DonoBancaController.editarPerfil);
router.post('/perfil/editar', DonoBancaController.atualizarPerfil);

router.post('/login', DonoBancaController.entrar);
router.post('/cadastro', DonoBancaController.store);

module.exports = router;