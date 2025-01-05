const express = require('express');
const router = express.Router();
const { MCA } = require('../controller/mcaController.js')

router.get('/',MCA);

module.exports = router;