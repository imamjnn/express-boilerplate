import request from 'supertest';
import app from '../app';

describe('API endpoints', () => {
  it('GET / returns welcome message and date', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hi!');
    expect(res.body.date).toBeDefined();
  });

  it('GET /example returns example message', async () => {
    const res = await request(app).get('/example');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Example');
  });

  it('GET /unknown returns 404', async () => {
    const res = await request(app).get('/unknown');

    expect(res.status).toBe(404);
    expect(res.text).toBe("Sorry can't find that!");
  });
});
