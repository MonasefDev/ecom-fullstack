const express = require('express');

const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router
  .route('/')
  .get(categoriesController.getAllCategories)
  .post(categoriesController.createCategory);

module.exports = router;
