const express = require('express')
const router = express.Router()
const Promise = require('bluebird')
const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = 10;
const initOptions = {
  noWarnings: true,
  promiseLib: Promise
};

var pgp = require("pg-promise")(initOptions);
var db = pgp(process.env.DB_CONNECT_STRING);

router.post('/register', (req, res) => {
    if(req.body.username && req.body.password && req.body.email){
      var username = req.body.username
      var password = req.body.password
      var email = req.body.email
      db.any('select * from public.users where userId=$1', username)
      .then(function (data) {
        // success;
        if(data.length === 1){
          //when data is exited - userid
          return res.status(401).json({status: "NG" ,message: 'ID already exited'})
        } else {
          db.any('select * from public.users where email=$1', email)
          .then(function(data){
            if(data.length === 1){
              //when data is exited - email
              return res.status(401).json({status: "NG" ,message: 'Email already exited'})
            } else {
              // cryption password
              bcrypt.hashSync(password ,BCRYPT_SALT_ROUNDS)
              .then(function(hashedPassword){

                db.none('INSERT INTO public.users(userid, email, password) VALUES($1,$2,$3)', [username, email, hashedPassword])
                .then(data => {
                  res.json({status:"OK"})
                  return null
                })
                .catch(error => {
                  console.log(error)
                  return res.status(401).json({ message: 'Insert Faild' })
                });
              })
            }
          })
          .catch(function(error){
            console.log(error)
            res.status(401).json({ message: 'Bad credentials' })
          })
        }
        
      })
      .catch(function (error) {
        console.log(error);
        res.status(401).json({ message: 'Bad credentials' })
      });
    } else {
      return res.status(401).json({message: 'Bad Parameters'})
    }
    
  })

module.exports = router