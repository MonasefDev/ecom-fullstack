const mongoose = require('mongoose');

function arrayLimit(val) {
  return val.length > 0;
}
const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'A product must have a category'],
      trim: true
    },
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      trim: true,
      maxlength: [
        100,
        'A product name must have less or equal then 100 characters'
      ]
    },
    brand: {
      type: String,
      required: [true, 'A product must have a brand'],
      trim: true
    },
    features: {
      type: [String],
      validate: [arrayLimit, 'A product must have features']
    },
    condition: {
      type: String,
      required: [true, 'A product must have a condition'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'A product must have a description'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price']
    },
    originalPrice: {
      type: Number,
      required: [true, 'A product must have an original price'],
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val > this.price;
        },
        message: 'Original price ({VALUE}) should be above current price'
      }
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be above 0.0'],
      max: [5, 'Rating must be below 5.0']
    },
    orders: {
      type: Number,
      default: 0
    },
    shipping: {
      type: String,
      required: [true, 'A product must have a shipping information'],
      trim: true
    },
    poster: {
      type: String,
      required: [true, 'A product must have a poster image'],
      trim: true
    },
    images: {
      type: [String],
      validate: [arrayLimit, 'A product must have images']
    },
    verified: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
