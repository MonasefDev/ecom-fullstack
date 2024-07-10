const express = require('express');

const conditionsController = require('../controllers/conditionsController');

const router = express.Router();

router
  .route('/')
  .get(conditionsController.getAllConditions)
  .post(conditionsController.createCondition);

module.exports = router;
