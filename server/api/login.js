const express = require('express')
const router = express.Router()
const Promise = require('bluebird')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');

const initOptions = {
  noWarnings: true,
  promiseLib: Promise
};

var pgp = require("pg-promise")(initOptions);
var db = pgp(process.env.DB_CONNECT_STRING);

router.post('/auth/login', (req, res) => {
  var condition
    if (req.body.username && req.body.password) {
      var username = req.body.username
      var password = req.body.password
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
        condition = "email"
      } else {
        condition = "loginid"
      }
      db.any('select * from public.users LEFT JOIN public.users_details ON users.id = users_details.userid where users.'+ condition + '=$1', username)
      .then(function (data) {
        // success;
        if(data.length === 0){
          return res.status(401).json({status: "NG", message:"user not exited"})
        } else {
          // check password
          if(!bcrypt.compareSync(password, data[0].password)){
            return res.status(401).json({status: "NG", message:"password faild"})
          } 

          var privateKEY  = fs.readFileSync(path.join(__dirname + '/../key/private.pem'), 'utf8');
          // create JWT Token
          var token = jwt.sign({
            username: data[0].userid,
            expiresIn: '24h',
            iat: Math.floor(Date.now() / 1000) - 120,
            email: data[0].email,
            "https://hasura.io/jwt/claims": {
              "x-hasura-allowed-roles": ["login","anonymous"],
              "x-hasura-default-role": "login",
              "x-hasura-user-id": data[0].id,
            }
          },privateKEY, {algorithm: 'RS256'})

          // data[0].token = token
          delete data[0].password
          return res.json({
            status: "OK",
            token:token,
            data: data[0]
          })
        }
        // return res.json({ data: data })
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ message: 'Bad credentials' })
      });
    }
  })

module.exports = router