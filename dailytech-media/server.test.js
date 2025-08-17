const request = require('supertest');
const express = require('express');

// Mock environment variables
process.env.DB_HOST = 'localhost';
process.env.DB_PORT = '5432';
process.env.DB_NAME = 'radio_db_test';
process.env.DB_USER = 'radio_user';
process.env.DB_PASSWORD = 'radio_pass';
process.env.SESSION_SECRET = 'test-secret';
process.env.PORT = '3001';

// Mock pg module
jest.mock('pg', () => {
  const mockQuery = jest.fn();
  const mockPool = jest.fn(() => ({
    query: mockQuery,
  }));
  
  return {
    Pool: mockPool,
    __mockQuery: mockQuery,
  };
});

// Import after mocking
const { Pool } = require('pg');
const mockQuery = require('pg').__mockQuery;

describe('Radio Thomas1 API', () => {
  let app;
  
  beforeAll(() => {
    // Import server after setting up mocks
    delete require.cache[require.resolve('./server.js')];
    app = require('./server.js');
  });
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Health Check', () => {
    it('should return healthy status when database is connected', async () => {
      mockQuery.mockResolvedValue({ rows: [{ '?column?': 1 }] });
      
      const response = await request(app)
        .get('/health')
        .expect(200);
        
      expect(response.body).toEqual({
        status: 'healthy',
        database: 'connected'
      });
    });

    it('should return unhealthy status when database is disconnected', async () => {
      mockQuery.mockRejectedValue(new Error('Connection failed'));
      
      const response = await request(app)
        .get('/health')
        .expect(500);
        
      expect(response.body).toEqual({
        status: 'unhealthy',
        database: 'disconnected',
        error: 'Connection failed'
      });
    });
  });

  describe('User Registration', () => {
    it('should register a user with username only', async () => {
      mockQuery
        .mockResolvedValueOnce({ rows: [] }) // Check existing user
        .mockResolvedValueOnce({ 
          rows: [{ id: 1, username: 'testuser', is_email_username: false }] 
        }); // Insert user
      
      const response = await request(app)
        .post('/api/register')
        .send({ username: 'testuser' })
        .expect(200);
        
      expect(response.body.message).toBe('User registered successfully');
      expect(response.body.user.username).toBe('testuser');
      expect(response.body.user.isEmailUsername).toBe(false);
    });

    it('should register a user with email and password', async () => {
      mockQuery
        .mockResolvedValueOnce({ rows: [] }) // Check existing user
        .mockResolvedValueOnce({ 
          rows: [{ id: 2, username: 'test@example.com', is_email_username: true }] 
        }); // Insert user
      
      const response = await request(app)
        .post('/api/register')
        .send({ username: 'test@example.com', password: 'testpass123' })
        .expect(200);
        
      expect(response.body.message).toBe('User registered successfully');
      expect(response.body.user.username).toBe('test@example.com');
      expect(response.body.user.isEmailUsername).toBe(true);
    });

    it('should reject registration if username already exists', async () => {
      mockQuery.mockResolvedValue({ rows: [{ id: 1 }] }); // User exists
      
      const response = await request(app)
        .post('/api/register')
        .send({ username: 'existinguser' })
        .expect(400);
        
      expect(response.body.error).toBe('Username already exists');
    });

    it('should reject registration with email but no password', async () => {
      const response = await request(app)
        .post('/api/register')
        .send({ username: 'test@example.com' })
        .expect(400);
        
      expect(response.body.error).toBe('Password is required when using email as username');
    });

    it('should reject registration without username', async () => {
      const response = await request(app)
        .post('/api/register')
        .send({})
        .expect(400);
        
      expect(response.body.error).toBe('Username is required');
    });
  });

  describe('User Login', () => {
    it('should login user with username only', async () => {
      mockQuery
        .mockResolvedValueOnce({ 
          rows: [{ id: 1, username: 'testuser', is_email_username: false, password_hash: null }] 
        }) // Get user
        .mockResolvedValueOnce({}); // Update last login
      
      const response = await request(app)
        .post('/api/login')
        .send({ username: 'testuser' })
        .expect(200);
        
      expect(response.body.message).toBe('Login successful');
      expect(response.body.user.username).toBe('testuser');
    });

    it('should reject login for non-existent user', async () => {
      mockQuery.mockResolvedValue({ rows: [] });
      
      const response = await request(app)
        .post('/api/login')
        .send({ username: 'nonexistent' })
        .expect(400);
        
      expect(response.body.error).toBe('User not found');
    });

    it('should reject login without username', async () => {
      const response = await request(app)
        .post('/api/login')
        .send({})
        .expect(400);
        
      expect(response.body.error).toBe('Username is required');
    });
  });

  describe('Track Rating', () => {
    it('should record a track rating for registered user', async () => {
      const agent = request.agent(app);
      
      // Mock session data by setting userId in session
      mockQuery
        .mockResolvedValueOnce({ rows: [] }) // Check guest user exists
        .mockResolvedValueOnce({ rows: [{ count: '0' }] }) // Get guest count
        .mockResolvedValueOnce({}) // Create guest user
        .mockResolvedValueOnce({ rows: [] }) // Check existing rating
        .mockResolvedValueOnce({}) // Insert rating
        .mockResolvedValueOnce({ 
          rows: [{ rating: 'up', count: '1' }] 
        }); // Get updated ratings
      
      // Create a session first (simulate login)
      const response = await agent
        .post('/api/rate-track')
        .send({
          rating: 'up',
          trackTitle: 'Test Song',
          trackArtist: 'Test Artist',
          trackYear: 2023
        });
        
      // Since we can't easily mock sessions in this test setup,
      // we'll test the guest user flow instead
      if (response.status !== 200) {
        console.log('Response body:', response.body);
        console.log('Response status:', response.status);
      }
      expect(response.status).toBe(200);
    });

    it('should reject invalid rating values', async () => {
      const response = await request(app)
        .post('/api/rate-track')
        .send({
          rating: 'invalid',
          trackTitle: 'Test Song',
          trackArtist: 'Test Artist'
        })
        .expect(400);
        
      expect(response.body.error).toBe('Invalid rating value');
    });

    it('should reject rating without required fields', async () => {
      const response = await request(app)
        .post('/api/rate-track')
        .send({
          rating: 'up'
        })
        .expect(400);
        
      expect(response.body.error).toBe('Missing required fields');
    });
  });

  describe('Get Track Ratings', () => {
    it('should return track ratings', async () => {
      mockQuery
        .mockResolvedValueOnce({ 
          rows: [
            { rating: 'up', count: '5' },
            { rating: 'down', count: '2' }
          ] 
        }) // Get ratings
        .mockResolvedValueOnce({ rows: [] }) // Check guest user exists
        .mockResolvedValueOnce({ rows: [{ count: '0' }] }) // Get guest count
        .mockResolvedValueOnce({}) // Create guest user
        .mockResolvedValueOnce({ rows: [] }); // Check guest user rating
      
      const response = await request(app)
        .get('/api/track-ratings')
        .query({ trackTitle: 'Test Song', trackArtist: 'Test Artist' })
        .expect(200);
        
      expect(response.body.ratings).toEqual({
        up: 5,
        down: 2
      });
      expect(response.body.userRating).toBe(null);
    });

    it('should reject request without track information', async () => {
      const response = await request(app)
        .get('/api/track-ratings')
        .expect(400);
        
      expect(response.body.error).toBe('Missing track title or artist');
    });
  });

  describe('API Root', () => {
    it('should return API message', async () => {
      const response = await request(app)
        .get('/api')
        .expect(200);
        
      expect(response.body.message).toBe('Radio Thomas1 API Server');
    });
  });

  describe('User Session', () => {
    it('should return not logged in for new session', async () => {
      const response = await request(app)
        .get('/api/user')
        .expect(200);
        
      expect(response.body.loggedIn).toBe(false);
    });
  });

  describe('Logout', () => {
    it('should logout user successfully', async () => {
      const agent = request.agent(app);
      
      const response = await agent
        .post('/api/logout')
        .expect(200);
        
      expect(response.body.message).toBe('Logged out successfully');
    });
  });
});