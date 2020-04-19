const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: false
  },
  isbn: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  number_of_copies: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
