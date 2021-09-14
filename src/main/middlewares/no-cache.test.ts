import app from '@/main/config/app'
import { noCache } from './no-cache'
import request from 'supertest'

describe('No Cache Middleware', () => {
  test('Should disable cache', async () => {
    app.get('/test_no_cache', noCache, (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_no_cache')
      .expect('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('Surrogate-Control', 'no-store')
  })
})
