const mongoose = require('mongoose');

function arrayLimit(val) {
  return val.length > 0;
}

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'A category must have a name'],
      trim: true
    },
    brands: {
      type: [String],
      validate: [arrayLimit, 'A category must have at least one brand']
    },
    features: {
      type: [String],
      validate: [arrayLimit, 'A category must have at least one feature']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

categorySchema.set('toJSON', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

categorySchema.set('toObject', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
