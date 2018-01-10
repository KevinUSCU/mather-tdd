const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))

const MatherRouter = require('./routes/mather.routes')
app.use('/api', MatherRouter)

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`
  res.status(status).json({ status, message })
})

app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!'
  res.status(status).json({ status, message })
})

module.exports = app