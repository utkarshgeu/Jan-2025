const express = require('express');
const router = express.Router();
const { main } = require('../controller/mainController.js')

router.get('/',main);

module.exports = router;