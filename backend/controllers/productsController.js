const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

// GET ALL PRODUCTS
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products
    }
  });
});

// CREATE PRODUCT

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      product: newProduct
    }
  });
});
