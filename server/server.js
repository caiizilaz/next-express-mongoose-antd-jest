import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import next from 'next'
import pathMatch from 'path-match'

import config from '~/config/server'
import configDB from '~/config/db'
import todoRouter from './routes/todo-route.js'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const db = mongoose.connect(configDB.db)

mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${configDB.db}`)
})
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`)
})
mongoose.Promise = global.Promise

app.prepare().then(() => {

  const server = express()

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}));

  server.use('/api', todoRouter)

  const route = pathMatch()

  server.put('todo/addtodo', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.post('todo/edittodo', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })
  
  server.get('todo/gettodo', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.delete('todo/deletetodo/:id', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.devPort, (err) => {
    if (err) throw err
    console.log('Server ready on http: //localhost:3000')
  })

})