const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title cannot be empty']
  },
  description: {
    type: String,
    required: [true, 'Description cannot be empty']
  },
  url: {
    type: String,
    required: [true, 'URL cannot be empty']
  },
  image: {
    type: String,
    required: [true, 'Image cannot be empty']
  }
})

module.exports = mongoose.models.Article || mongoose.model('Article', articleSchema)
