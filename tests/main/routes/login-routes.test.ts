import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/'
import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getColletion('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Stephano',
          email: 'stephano@mail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Stephano',
        email: 'stephano@mail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'stephano@mail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 if login fails', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'stephano@mail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
