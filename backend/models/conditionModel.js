const mongoose = require('mongoose');

const conditionSchema = new mongoose.Schema(
  {
    condition: {
      type: String,
      required: [true, 'A condition must be provided'],
      trim: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
// remove _id and __v from json
conditionSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});
// remove _id and __v from object
conditionSchema.set('toObject', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;
