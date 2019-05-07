const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// const routes = require('./api/routes/todoListRoutes.js')
// routes(app)
const router = express.Router()
router.get('/', function(req, res) {
  res.json({ message: 'API works' })
})

app.use('/api', router)

app.listen(port)

console.log('hello port:' + port)