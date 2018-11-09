const request = require('supertest');
const app = require('../server/app');

describe('GET /', () => {
  it('respond with text', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, done);
  });
});
