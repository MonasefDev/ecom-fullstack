const Condition = require('../models/conditionModel');
const catchAsync = require('../utils/catchAsync');

// GET ALL CONDITIONS
exports.getAllConditions = catchAsync(async (req, res, next) => {
  const conditions = await Condition.find();
  res.status(200).json({
    status: 'success',
    results: conditions.length,
    data: {
      conditions
    }
  });
});

// CREATE CONDITION
exports.createCondition = catchAsync(async (req, res, next) => {
  const newCondition = await Condition.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      condition: newCondition
    }
  });
});
