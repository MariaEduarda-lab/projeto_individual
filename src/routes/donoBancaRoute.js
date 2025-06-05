const express = require('express');
const router = express.Router();
const DonoBancaController = require('../controllers/donoBancaController');

router.get('/', DonoBancaController.index);
router.get('/:id', DonoBancaController.show);
router.post('/', DonoBancaController.store);
router.put('/:id', DonoBancaController.update);

module.exports = router;