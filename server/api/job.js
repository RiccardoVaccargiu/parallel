const express = require('express')
const db = require('../db_connect')
const router = express.Router()

router.get('/api/get', (req, res) => {
    const sqlInsert = 'SELECT * FROM job'
    db.query(sqlInsert, (err, result) => {
        res.json(result)
    })
})

router.post('/api/create', (req, res) => {

    const title = req.body.title
    const description = req.body.description
  
    const sqlInsert = 'INSERT INTO job (title, subtitle) VALUES (?,?)'
    db.query(sqlInsert, [title, description], (err, result) => {
      console.log(result, err)
    })  
  })

  module.exports = router