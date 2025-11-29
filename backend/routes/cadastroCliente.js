const express = require('express');

const cadastroClienteController = require('../controllers/cadastroCliente');

const router = express.Router();

router.post('/cliente', cadastroClienteController.postCliente);

module.exports = router;