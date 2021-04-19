const path = require('path')
const express = require('express')
//const xss = require('xss')
const CountService = require('./counts-service')

const countsRouter = express.Router()
const jsonParser = express.json()

const serializeCount = count => ({
    id: String(count.id),
    name: count.name,
    count: count.counts
  })

countsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        CountService.getAllCounts(knexInstance)
          .then(counts => {
            res.json(counts.map(serializeCount))
          })
          .catch(next)
    })


countsRouter
  .route('/:count_name')
  .patch(jsonParser, (req, res, next) => {
    const { counts } = req.body
    console.log(req.body)
    CountService.updateCounts(
      req.app.get('db'),
      counts,
      req.params.count_name
    )
      .then(counts => {
        res
          .status(201)
          .json(counts.map(serializeCount))
      })
      .catch(next)
  })
module.exports = countsRouter