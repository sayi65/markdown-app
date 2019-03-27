const express = require('express')
const bodyParser = require('body-parser');
const app = express()
// Create express router
const multer = require('multer');
const upload = multer();



// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const { Nuxt, Builder } = require('nuxt')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
let config = require('../nuxt.config.js')
const isProd = process.env.NODE_ENV === 'production'


const router = express.Router()
// router.use((req, res, next) => {
//   Object.setPrototypeOf(req, app.request)
//   Object.setPrototypeOf(res, app.response)
//   req.res = res
//   res.req = req
//   next()
// })

// Add POST - /api/login
router.post('/login', upload.array(), (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.body.username = "test1"
    db.any("select * from users where id=$1", req.body.username)
    .then(function (data) {
      // success;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}

app.listen(port);
console.log('server start listen on port ' + port);
start()