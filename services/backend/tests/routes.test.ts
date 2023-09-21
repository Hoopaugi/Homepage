import request from 'supertest';

import app from '../src/app';

describe('App routes', () => {
  describe('/api', () => {
    test('GET /health returns <200> "ok"', async () => {
      const res = await request(app).get('/api/health');

      expect(res.status).toEqual(200);
      expect(res.text).toEqual('ok');
    });

    test('GET /ping returns <200> "pong"', async () => {
      const res = await request(app).get('/api/ping');

      expect(res.status).toEqual(200);
      expect(res.text).toEqual('pong');
    });
  });
});
