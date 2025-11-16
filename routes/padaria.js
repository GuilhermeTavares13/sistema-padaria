const express = require('express');

const padariaController = require('../controllers/padaria');

const router = express.Router();

router.get('/', padariaController.getIndex);

module.exports = router;