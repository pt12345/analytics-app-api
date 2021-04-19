const path = require('path')
const express = require('express')
//const xss = require('xss')
const SalesService = require('./sales-service')

const salesRouter = express.Router()
const jsonParser = express.json()

const serializeSales = sale => ({
    id: String(sale.id),
    name: sale.name,
    dollars: sale.dollars
  })

salesRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        SalesService.getAllSales(knexInstance)
          .then(sales => {
            res.json(sales.map(serializeSales))
          })
          .catch(next)
    })
    /*.post(jsonParser, (req, res, next) => {
        const { name } = req.body
        const newNote = { name }
    
        CountService.addFolder(
          req.app.get('db'),
          newNote
        )
          .then(folder => {
            res
              .status(201)
              .location(path.posix.join(req.originalUrl, `/${folder.id}`))
              .json(serializeFolder(folder))
          })
          .catch(next)
      })*/

module.exports = salesRouter