var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

// add
router.post('/add', productController.add);

module.exports = router;