const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')

let upload_path = './download'

router.get('/', function (req, res) {
  res.send('GET handle for /uploadFile route.')
  res.json({})
})

router.post('/', function (req, res) {
  let form = new formidable.IncomingForm()

  form.parse(req, function(err, fields, files) {
    let oldPath = files.filetoupload.path
    let newPath = upload_path + files.filetoupload.name

    fs.rename(oldPath, newPath, function(err) {
      if(err) throw err
      res.write('File uploaded and moved!')
      res.end()
    })
  })
})

module.exports = router