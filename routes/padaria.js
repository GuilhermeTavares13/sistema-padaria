const express = require('express');

const padariaController = require('../controllers/padaria');

const router = express.Router();

router.get('/', padariaController.getIndex);
router.get('/signin',padariaController.getSignIn);
router.get('/signup',padariaController.getSignUp);
router.get('/cliente',padariaController.getCliente);
router.get('/produto',padariaController.getProduto);

module.exports = router;