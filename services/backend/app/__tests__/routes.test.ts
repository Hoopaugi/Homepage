// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import app from '..';

describe('Test main routes', () => {
  test('/', async () => {
    const res = await request(app).get('/');
    expect(res.body).toEqual({ message: 'Express + TypeScript Server' });
  });
});
