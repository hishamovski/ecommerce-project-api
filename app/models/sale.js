const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    text: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
},
{
  timestamps: true,
  toObject: {
    virtuals: true
  }
})

module.exports = mongoose.model('Sale', saleSchema)
