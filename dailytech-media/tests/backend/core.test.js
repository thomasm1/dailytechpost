const request = require('supertest');
const app = require('../../server');
const SimpleHelpers = require('../utils/simple-helpers');

describe('Core Radio App Tests - What Users Actually Need', () => {
  
  describe('Basic Server Health', () => {
    test('should respond to health check', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body.status).toBe('healthy');
    });

    test('should serve API endpoint', async () => {
      const response = await request(app)
        .get('/api')
        .expect(200);
      
      expect(response.body.message).toContain('Radio Thomas1');
    });
  });

  describe('Rating System - Core Functionality', () => {
    test('should allow guest user to rate a track', async () => {
      const track = SimpleHelpers.generateUniqueTrack('guest');
      
      const response = await request(app)
        .post('/api/rate-track')
        .set('User-Agent', 'test-browser-unique')
        .send({
          rating: 'up',
          ...track
        })
        .expect(200);

      SimpleHelpers.expectRatingResponse(response, 1, 0);
    });

    test('should prevent duplicate rating from same user', async () => {
      const track = SimpleHelpers.generateUniqueTrack('duplicate');
      const userAgent = `browser-${Date.now()}`;

      // First rating should succeed
      await request(app)
        .post('/api/rate-track')
        .set('User-Agent', userAgent)
        .send({ rating: 'up', ...track })
        .expect(200);

      // Second rating should fail
      const response = await request(app)
        .post('/api/rate-track')
        .set('User-Agent', userAgent)
        .send({ rating: 'down', ...track })
        .expect(400);

      SimpleHelpers.expectError(response, 400);
    });

    test('should retrieve ratings for a track', async () => {
      const response = await request(app)
        .get('/api/track-ratings')
        .query({
          trackTitle: 'Simple Test Song',
          trackArtist: 'Simple Test Artist'
        })
        .expect(200);

      expect(response.body).toHaveProperty('ratings');
      expect(response.body.ratings).toHaveProperty('up');
      expect(response.body.ratings).toHaveProperty('down');
    });

    test('should validate required rating fields', async () => {
      const response = await request(app)
        .post('/api/rate-track')
        .send({ rating: 'up' }) // Missing trackTitle and trackArtist
        .expect(400);

      expect(response.body.error).toBeDefined();
    });

    test('should reject invalid rating values', async () => {
      const response = await request(app)
        .post('/api/rate-track')
        .send({
          rating: 'invalid',
          trackTitle: 'Test Song',
          trackArtist: 'Test Artist'
        })
        .expect(400);

      expect(response.body.error).toContain('Invalid rating');
    });
  });

  describe('User Management - Essential Features', () => {
    test('should register a simple username', async () => {
      const username = SimpleHelpers.generateUniqueUser();
      
      const response = await request(app)
        .post('/api/register')
        .send({ username })
        .expect(200);

      expect(response.body.user.username).toBe(username);
    });

    test('should get current user status', async () => {
      const response = await request(app)
        .get('/api/user')
        .expect(200);

      expect(response.body).toHaveProperty('loggedIn');
    });
  });
});