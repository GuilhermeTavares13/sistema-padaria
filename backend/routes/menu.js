const express = require('express');

const menuController = require('../controllers/menu');

const router = express.Router();

router.get('/', menuController.getIndex);

module.exports = router;