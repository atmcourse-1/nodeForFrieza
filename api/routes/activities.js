const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('GET handle for /activities route.')
  res.json({})
})

router.post('/', function (req, res) {
  res.send('POST handle for /activities route')
  res.json({})
})

module.exports = router