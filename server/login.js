const express = require('express')

// const db = require('./db');
const router = express.Router()

var pgp = require("pg-promise");

// router.get('/login', (req, res, next) => {
//   const param = { test: 'success' }
//   res.header('Content-Type', 'application/json; charset=utf-8')
//   res.send(param)
// })
const db = pgp(process.env.DB_CONNECT_STRING);
console.log(process.env.DB_CONNECT_STRING)
router.post('/login', (req, res) => {
    console.log(req.body.username)
    // if (req.body.username === 'demo' && req.body.password === 'demo') {
      req.body.username = "test1"
      db.any("select * from users where id=$1", req.body.username)
      .then(function (data) {
        // success;
        console.log(data);
        return res.json({ username: data })
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
    res.status(401).json({ message: 'Bad credentials' })
  })

module.exports = router