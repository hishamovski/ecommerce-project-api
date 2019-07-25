const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
},
{
  timestamps: true,
  toObject: {
    virtuals: true
  }
})

module.exports = mongoose.model('Cart', cartSchema)
