const express = require('express')
const router = express.Router()
const Promise = require('bluebird')

const initOptions = {
  promiseLib: Promise
};

var pgp = require("pg-promise")(initOptions);
var db = pgp(process.env.DB_CONNECT_STRING);

router.post('/login', (req, res) => {
    console.log(req.body.username)
    // if (req.body.username === 'demo' && req.body.password === 'demo') {
      db.any('select * from public.users where "userId"=$1', req.body.username)
      .then(function (data) {
        // success;
        console.log(data);
        return res.json({ data: data })
      })
      .catch(function (error) {
        console.log(error);
        res.status(401).json({ message: 'Bad credentials' })
      });
    // }
    
  })

module.exports = router