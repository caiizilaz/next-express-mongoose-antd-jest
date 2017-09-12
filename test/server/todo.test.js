import request from 'supertest'
import config from '~/config/server'

describe('#routes #todos', () => {

  describe('GET /api/todo/gettodo', () => {
    it('should get todos from database "success"', async () => {
      const res = await request(`${config.devSite}:${config.devPort}`)
        .get('/api/todo/gettodo')
      expect(res.body.success)
        .toEqual(true)
    })
  })

  describe('POST /api/todo/addtodo', () => {
    it('should insert todo to database "success"', async () => {
      const res = await request(`${config.devSite}:${config.devPort}`)
        .post('/api/todo/addtodo')
        .type('form')
        .send({ item: 'test by jest2' })
        .set('Accept', /application\/json/)
      expect(res.body.success)
        .toEqual(true)
    })
  })

})