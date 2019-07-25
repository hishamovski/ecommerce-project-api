const express = require('express')
const passport = require('passport')
const Cart = require('../models/cart')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const requireToken = passport.authenticate('bearer', { session: false })
const removeBlanks = require('../../lib/remove_blank_fields')
const router = express.Router()

router.post('/carts', requireToken, removeBlanks, (req, res, next) => {
  req.body.cart.owner = req.user.id
  console.log('****************************************************')
  console.log(req.user.id)
  console.log('****************************************************')

  Cart.create({
    product: req.body.cart.product._id,
    owner: req.body.cart.owner
  })
    .then(product => {
      return product.populate('product').execPopulate()
    })
    // .populate('product')
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(product => {
      // product = await product.populate('product').exe?cPopulate()
      res.status(201).json({ product: product.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

router.delete('/carts/:id', requireToken, (req, res, next) => {
  Cart.findById(req.params.id)
    .then(handle404)
    .then(cart => {
      // throw an error if current user doesn't own `example`
      requireOwnership(req, cart)
      // delete the example ONLY IF the above didn't throw
      cart.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

router.get('/carts', requireToken, (req, res, next) => {
  console.log('****************************************************')
  console.log(req.user.id)
  console.log('****************************************************')

  Cart.find({
    owner: req.user.id
  })
    .populate('product')
    .then(carts => {
      return carts.map(cart => cart.toObject())
    })
    .then(carts => res.status(200).json({ carts: carts }))
    .catch(next)
})

router.get('/carts/:id', requireToken, (req, res, next) => {
  Cart.findById(req.params.id)
    .populate('product')
    .then(handle404)
    .then(cart => res.status(200).json({ cart: cart.toObject() }))
    .catch(next)
})

module.exports = router
