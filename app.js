const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./config')

var Acount = require('./models/acount')
var Post = require('./models/post')

const db = mongoose.connection
db.on('error', console.error)
db.once('open', function() {
    console.log("Connected to mongod server")
})

mongoose.connect('mongodb://localhost/voice')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use(cors({ origin: 'https://www.zerocho.com' }))

app.set('jwt-secret', config.secret)

const port = process.env.PORT || 4000     

app.use('/api', require('./routes/api'))

app.listen(port, function() {
    console.log(`Express server has started on port ${port}`)
})