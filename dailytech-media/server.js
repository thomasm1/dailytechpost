const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const crypto = require('crypto');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3009;

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Middleware
app.use(cors({
  origin: ['http://localhost:3009', 'http://127.0.0.1:3009'],
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));
app.use(express.static('public'));

// Basic routes
app.get('/api', (req, res) => {
  res.json({ message: 'Radio Thomas1 API Server' });
});

app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'healthy', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', database: 'disconnected', error: error.message });
  }
});

// Helper function to check if string is email
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }
    
    const isEmailUsername = isEmail(username);
    
    // If username is email, password is required
    if (isEmailUsername && !password) {
      return res.status(400).json({ error: 'Password is required when using email as username' });
    }
    
    // Check if user already exists
    const existingUser = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    
    let passwordHash = null;
    if (password) {
      passwordHash = await bcrypt.hash(password, 12);
    }
    
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash, is_email_username) VALUES ($1, $2, $3, $4) RETURNING id, username, is_email_username',
      [username, isEmailUsername ? username : null, passwordHash, isEmailUsername]
    );
    
    const user = result.rows[0];
    req.session.userId = user.id;
    req.session.username = user.username;
    
    res.json({ 
      message: 'User registered successfully', 
      user: { id: user.id, username: user.username, isEmailUsername: user.is_email_username }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }
    
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }
    
    const user = result.rows[0];
    
    // If user has email username, password is required
    if (user.is_email_username) {
      if (!password) {
        return res.status(400).json({ error: 'Password is required' });
      }
      
      const isValidPassword = await bcrypt.compare(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }
    }
    
    // Update last login
    await pool.query('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1', [user.id]);
    
    req.session.userId = user.id;
    req.session.username = user.username;
    
    res.json({ 
      message: 'Login successful', 
      user: { id: user.id, username: user.username, isEmailUsername: user.is_email_username }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// User Logout
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

// Get current user
app.get('/api/user', (req, res) => {
  if (req.session.userId) {
    res.json({ 
      loggedIn: true, 
      user: { id: req.session.userId, username: req.session.username }
    });
  } else {
    res.json({ loggedIn: false });
  }
});

// Helper function to generate fingerprint hash
function generateFingerprint(userAgent, acceptLanguage, ip) {
  const fingerprintData = `${userAgent}-${acceptLanguage}-${ip}`;
  return crypto.createHash('sha256').update(fingerprintData).digest('hex').substring(0, 8);
}

// Helper function to get or create guest user
async function getOrCreateGuestUser(fingerprint, ip) {
  try {
    // Check if guest user exists
    let result = await pool.query('SELECT username FROM guest_users WHERE fingerprint_hash = $1', [fingerprint]);
    
    if (result.rows.length > 0) {
      // Update last seen
      await pool.query('UPDATE guest_users SET last_seen = CURRENT_TIMESTAMP WHERE fingerprint_hash = $1', [fingerprint]);
      return result.rows[0].username;
    }
    
    // Create new guest user
    const guestCountResult = await pool.query('SELECT COUNT(*) FROM guest_users');
    const guestCount = parseInt(guestCountResult.rows[0].count) + 1;
    const guestUsername = `guest-${guestCount}-${fingerprint}`;
    
    await pool.query(
      'INSERT INTO guest_users (fingerprint_hash, username) VALUES ($1, $2)',
      [fingerprint, guestUsername]
    );
    
    return guestUsername;
  } catch (error) {
    console.error('Error creating guest user:', error);
    return `guest-temp-${fingerprint}`;
  }
}

// Rate track endpoint
app.post('/api/rate-track', async (req, res) => {
  try {
    const { rating, trackTitle, trackArtist, trackYear } = req.body;
    
    if (!rating || !trackTitle || !trackArtist) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (!['up', 'down'].includes(rating)) {
      return res.status(400).json({ error: 'Invalid rating value' });
    }
    
    // Get user info
    let username;
    let userFingerprint = null;
    const userIp = req.ip || req.connection.remoteAddress;
    
    if (req.session.userId) {
      // Registered user
      username = req.session.username;
    } else {
      // Guest user - create fingerprint
      const userAgent = req.headers['user-agent'] || '';
      const acceptLanguage = req.headers['accept-language'] || '';
      userFingerprint = generateFingerprint(userAgent, acceptLanguage, userIp);
      username = await getOrCreateGuestUser(userFingerprint, userIp);
    }
    
    // Check if user already rated this track
    const existingRating = await pool.query(
      'SELECT id FROM track_ratings WHERE track_title = $1 AND track_artist = $2 AND username = $3',
      [trackTitle, trackArtist, username]
    );
    
    if (existingRating.rows.length > 0) {
      return res.status(400).json({ error: 'You have already rated this track' });
    }
    
    // Insert new rating
    await pool.query(
      'INSERT INTO track_ratings (track_title, track_artist, track_year, rating, username, user_fingerprint, user_ip) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [trackTitle, trackArtist, trackYear, rating, username, userFingerprint, userIp]
    );
    
    // Get updated rating counts
    const ratingsResult = await pool.query(
      'SELECT rating, COUNT(*) as count FROM track_ratings WHERE track_title = $1 AND track_artist = $2 GROUP BY rating',
      [trackTitle, trackArtist]
    );
    
    const ratings = { up: 0, down: 0 };
    ratingsResult.rows.forEach(row => {
      ratings[row.rating] = parseInt(row.count);
    });
    
    res.json({ 
      message: 'Rating recorded successfully',
      ratings: ratings,
      username: username
    });
    
  } catch (error) {
    console.error('Rating error:', error);
    res.status(500).json({ error: 'Server error recording rating' });
  }
});

// Get track ratings
app.get('/api/track-ratings', async (req, res) => {
  try {
    const { trackTitle, trackArtist } = req.query;
    
    if (!trackTitle || !trackArtist) {
      return res.status(400).json({ error: 'Missing track title or artist' });
    }
    
    const ratingsResult = await pool.query(
      'SELECT rating, COUNT(*) as count FROM track_ratings WHERE track_title = $1 AND track_artist = $2 GROUP BY rating',
      [trackTitle, trackArtist]
    );
    
    const ratings = { up: 0, down: 0 };
    ratingsResult.rows.forEach(row => {
      ratings[row.rating] = parseInt(row.count);
    });
    
    // Check if current user has rated
    let userRating = null;
    if (req.session.userId) {
      const userRatingResult = await pool.query(
        'SELECT rating FROM track_ratings WHERE track_title = $1 AND track_artist = $2 AND username = $3',
        [trackTitle, trackArtist, req.session.username]
      );
      if (userRatingResult.rows.length > 0) {
        userRating = userRatingResult.rows[0].rating;
      }
    } else {
      // Check guest user rating
      const userAgent = req.headers['user-agent'] || '';
      const acceptLanguage = req.headers['accept-language'] || '';
      const userIp = req.ip || req.connection.remoteAddress;
      const userFingerprint = generateFingerprint(userAgent, acceptLanguage, userIp);
      const guestUsername = await getOrCreateGuestUser(userFingerprint, userIp);
      
      const userRatingResult = await pool.query(
        'SELECT rating FROM track_ratings WHERE track_title = $1 AND track_artist = $2 AND username = $3',
        [trackTitle, trackArtist, guestUsername]
      );
      if (userRatingResult.rows.length > 0) {
        userRating = userRatingResult.rows[0].rating;
      }
    }
    
    res.json({ 
      ratings: ratings,
      userRating: userRating
    });
    
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Server error fetching ratings' });
  }
});

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Radio server running on port ${port}`);
  });
}

module.exports = app;