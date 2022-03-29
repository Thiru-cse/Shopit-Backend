const Product = require('../models/product')

// Create new product   =>   /api/admin/product/new
exports.newProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}
