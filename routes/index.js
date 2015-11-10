'use strict'

let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/report', (req, res, next) => {
  console.log(req.body) // TODO save to db
  res.send(req.body)
})

module.exports = router
