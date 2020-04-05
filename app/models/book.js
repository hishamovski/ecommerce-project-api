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
    type: String
  },
  url: {
    type: String
  },
  number_of_copies: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
