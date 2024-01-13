var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

// add
router.post('/add', productController.add);

// get one
router.get('/find/:id', productController.find);

// get all 
router.get('/all', productController.getAll);

// update
router.put('/update/:id', productController.update);

// delete
router.delete('/delete/:id', productController.delete);

module.exports = router;