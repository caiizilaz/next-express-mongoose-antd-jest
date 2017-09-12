import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import next from 'next'
import pathMatch from 'path-match'

import config from '~/config/server'
import configDB from '~/config/db'
import todoRouter from './routes/todo-route.js'
import userRouter from './routes/user-route.js'

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
  server.use('/api', userRouter)

  const route = pathMatch()

  server.get('todo/gettodo', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.post('todo/addtodo', (req, res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.get('user/search', (req, res) => {
    return app.render(req, res, '/user', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.devPort, (err) => {
    if (err) throw err
    console.log('Server ready on http: //localhost:3000')
  })

})