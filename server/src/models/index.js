const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const config = require('../config/config')
const db = {}

// Connect to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })

// Load models
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(mongoose)
    db[model.modelName] = model
  })

// Export database object
module.exports = db
