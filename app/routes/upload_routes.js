
const express = require('express')
const multer = require('multer')
const passport = require('passport')

const Upload = require('../models/upload')
const requireToken = passport.authenticate('bearer', { session: false })

const multerUpload = multer({ dest: 'tempFiles/' })

const router = express.Router()
const { s3Upload, createParams, promiseReadFile } = require('../../lib/promiseS3Upload.js')
// const User = require('../models/user')

// const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
// const handle404 = customErrors.handle404

router.post('/uploads', multerUpload.single('file'), requireToken, (req, res, next) => {
  promiseReadFile(req.file)
    .then(createParams)
    .then(s3Upload)
    .then(s3Response => Upload.create({ url: s3Response.Location }))
    .then(upload => {
      // User.findById(req.user.id)
      //   .then(handle404)
      //   .then(user => {
      //     return user.update({url: upload.url})
      //   })
      res.status(201).json({ upload: upload.toObject() })
    })
    .catch(next)
})

module.exports = router
