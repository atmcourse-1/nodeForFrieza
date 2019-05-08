const fs = require('fs')

const express = require('express')
const multer = require('multer')

const liability = require('./api/routes/liability.js')
const news = require('./api/routes/news.js')
const activities = require('./api/routes/activities.js')
const uploadFile = require('./api/routes/uploadFile.js')

const app = express()

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './api/uploadedFiles')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname)
//   }
// })
//
// const upload = multer({ storage: storage })

app.use('/liability', liability)
app.use('/news', news)
app.use('/activities', activities)
app.use('/uploadFile', uploadFile)

const port = process.env.PORT || 12345

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = express.Router()

router.get('/', function(req, res) {
  res.json({ message: 'API works' })
})

app.use('/', router)

app.listen(port)

console.log('hello port:' + port)