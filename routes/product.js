const express = require('express')
const router = express.Router();

const {  newProduct } = require('../controllers/productController')

router.route('/product/new').post( newProduct);

module.exports = router;