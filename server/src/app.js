const express = require('express')
const bodyParse = require('body-parser')
const { sequelize } = require('./models')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
