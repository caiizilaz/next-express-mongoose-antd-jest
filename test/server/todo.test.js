import request from 'supertest'
import config from '~/config/server'
import mongoose from 'mongoose'

const id = new mongoose.mongo.ObjectId()
const req = request(`${config.devSite}:${config.devPort}`)

describe('#routes #todos', () => {

  describe('PUT /api/todo/addtodo', () => {
    it('should insert todo to database "success"', async () => {
      const res = await req
        .put('/api/todo/addtodo')
        .type('form')
        .send({ _id: id, item: 'test by jest' })
        .set('Accept', /application\/json/)
      expect(res.body.success)
        .toEqual(true)
    })
  })

  describe('POST /api/todo/edittodo', () => {
    it('should update todo item "test by jest" "success"', async () => {
      const res = await req
        .post('/api/todo/edittodo')
        .type('form')
        .send({ _id: id, item: 'test by jest updated' })
        .set('Accept', /application\/json/)
      expect(res.body.success)
        .toEqual(true)
    });
  });

  describe('GET /api/todo/gettodo', () => {
    it('should get todos from database "success"', async () => {
      const res = await req
        .get('/api/todo/gettodo')
      expect(res.body.success)
        .toEqual(true)
    })
  })



})