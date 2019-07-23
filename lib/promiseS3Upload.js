require('dotenv').config()
const AWS = require('aws-sdk')
const fs = require('fs')

const s3 = new AWS.S3()

const promiseReadFile = function (file) {
  console.log(file.path)
  return new Promise((resolve, reject) => {
    fs.readFile(file.path, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve([data, file])
    })
  })
}

// function that returns an object
const createParams = dataAndFile => ({
  ACL: 'public-read',
  Bucket: process.env.BUCKET_NAME, // backet Name
  // Key: Math.random().toString().split('.')[1],
  Key: Math.random().toString().split('.')[1],
  ContentType: dataAndFile[1].mimetype,
  Body: dataAndFile[0]
})

const s3Upload = function (params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

module.exports = {
  createParams,
  s3Upload,
  promiseReadFile
}
