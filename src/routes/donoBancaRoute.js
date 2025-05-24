const express = require('express');
const router = express.Router();
const donoBancaController = require('../controllers/donoBancaController');

router.get('/', donoBancaController.getAllDonos);
router.get('/:id', donoBancaController.getDonoById);
router.post('/', donoBancaController.createDono);
router.put('/:id', donoBancaController.updateDono);
router.delete('/:id', donoBancaController.deleteDono);

module.exports = router;