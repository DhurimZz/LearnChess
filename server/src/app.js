const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const routes = require('./routes')

const app = express()

// Middlewares
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
const router = express.Router()
routes(router)
app.use('/', router)

// Connect to MongoDB
mongoose
  .connect(config.db.url)
  .then(() => {
    console.log('Connected to MongoDB')
    // Start the server
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`)
    })
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error)
  })
