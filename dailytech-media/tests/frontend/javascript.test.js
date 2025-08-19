/**
 * @jest-environment jsdom
 */

// Mock global functions that would be in app.js
global.fetch = jest.fn();
global.console.error = jest.fn();

// Helper functions from app.js (extracted for testing)
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function generateFingerprint(userAgent, acceptLanguage, ip) {
  const crypto = require('crypto');
  const fingerprintData = `${userAgent}-${acceptLanguage}-${ip}`;
  return crypto.createHash('sha256').update(fingerprintData).digest('hex').substring(0, 8);
}

function validateTrackData(trackTitle, trackArtist, rating) {
  if (!trackTitle || !trackArtist || !rating) {
    return { valid: false, error: 'Missing required fields' };
  }
  
  if (!['up', 'down'].includes(rating)) {
    return { valid: false, error: 'Invalid rating value' };
  }
  
  return { valid: true };
}

// Mock DOM elements
function setupMockDOM() {
  document.body.innerHTML = `
    <div id="track-title"></div>
    <div id="track-info"></div>
    <div id="track-album"></div>
    <div id="track-year"></div>
    <div id="stream-quality"></div>
    <div id="thumbs-up-count"></div>
    <div id="thumbs-down-count"></div>
    <div id="rating-status"></div>
    <div id="current-codec"></div>
    <div id="current-bitrate"></div>
    <div id="buffer-health"></div>
    <div id="network-speed"></div>
    <div id="codec-badge"></div>
    <div id="codec-explanation"></div>
    <button id="thumbs-up-btn" class="rating-btn"></button>
    <button id="thumbs-down-btn" class="rating-btn"></button>
    <input id="username" type="text">
    <input id="password" type="password">
    <div id="login-form"></div>
    <div id="user-info" style="display: none;"></div>
    <span id="current-username"></span>
    <div id="error-container"></div>
    <audio id="audio-player"></audio>
  `;
}

describe('JavaScript Function Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setupMockDOM();
  });

  describe('Utility Functions', () => {
    describe('isEmail', () => {
      test('should validate correct email addresses', () => {
        const validEmails = [
          'user@example.com',
          'test.user@example.org',
          'user+tag@example.net',
          'user123@example-site.co.uk'
        ];

        validEmails.forEach(email => {
          expect(isEmail(email)).toBe(true);
        });
      });

      test('should reject invalid email addresses', () => {
        const invalidEmails = [
          'plainusername',
          'user@',
          '@example.com',
          'user@.com',
          'user.example.com',
          '',
          null,
          undefined
        ];

        invalidEmails.forEach(email => {
          expect(isEmail(email)).toBe(false);
        });
      });
    });

    describe('generateFingerprint', () => {
      test('should generate consistent fingerprints', () => {
        const userAgent = 'Mozilla/5.0 (test)';
        const acceptLanguage = 'en-US';
        const ip = '127.0.0.1';

        const fingerprint1 = generateFingerprint(userAgent, acceptLanguage, ip);
        const fingerprint2 = generateFingerprint(userAgent, acceptLanguage, ip);

        expect(fingerprint1).toBe(fingerprint2);
        expect(fingerprint1).toHaveLength(8);
        expect(typeof fingerprint1).toBe('string');
      });

      test('should generate different fingerprints for different inputs', () => {
        const base = generateFingerprint('browser1', 'en-US', '127.0.0.1');
        const different1 = generateFingerprint('browser2', 'en-US', '127.0.0.1');
        const different2 = generateFingerprint('browser1', 'fr-FR', '127.0.0.1');
        const different3 = generateFingerprint('browser1', 'en-US', '192.168.1.1');

        expect(base).not.toBe(different1);
        expect(base).not.toBe(different2);
        expect(base).not.toBe(different3);
      });

      test('should handle empty or undefined inputs', () => {
        const fingerprint1 = generateFingerprint('', '', '');
        const fingerprint2 = generateFingerprint(undefined, undefined, undefined);

        expect(fingerprint1).toHaveLength(8);
        expect(fingerprint2).toHaveLength(8);
        expect(fingerprint1).not.toBe(fingerprint2); // undefined vs empty string
      });
    });

    describe('validateTrackData', () => {
      test('should validate correct track data', () => {
        const result = validateTrackData('Song Title', 'Artist Name', 'up');
        expect(result.valid).toBe(true);
        expect(result.error).toBeUndefined();
      });

      test('should reject missing required fields', () => {
        const testCases = [
          { trackTitle: '', trackArtist: 'Artist', rating: 'up' },
          { trackTitle: 'Song', trackArtist: '', rating: 'up' },
          { trackTitle: 'Song', trackArtist: 'Artist', rating: '' },
          { trackTitle: null, trackArtist: 'Artist', rating: 'up' },
          { trackTitle: 'Song', trackArtist: null, rating: 'up' },
          { trackTitle: 'Song', trackArtist: 'Artist', rating: null }
        ];

        testCases.forEach(testCase => {
          const result = validateTrackData(testCase.trackTitle, testCase.trackArtist, testCase.rating);
          expect(result.valid).toBe(false);
          expect(result.error).toBe('Missing required fields');
        });
      });

      test('should reject invalid rating values', () => {
        const invalidRatings = ['like', 'dislike', '1', '0', 'yes', 'no'];

        invalidRatings.forEach(rating => {
          const result = validateTrackData('Song', 'Artist', rating);
          expect(result.valid).toBe(false);
          expect(result.error).toBe('Invalid rating value');
        });
      });
    });
  });

  describe('DOM Manipulation Functions', () => {
    function updateTrackDisplay(metadata) {
      const title = metadata.title || 'Unknown Track';
      const artist = metadata.artist || 'Unknown Artist';
      const album = metadata.album || 'Unknown Album';
      const year = metadata.date || 'Unknown Year';
      
      document.getElementById('track-title').textContent = title;
      document.getElementById('track-info').textContent = artist;
      document.getElementById('track-album').textContent = album;
      document.getElementById('track-year').textContent = year;
      
      // Update page title
      document.title = `${artist} - ${title} | Radio Thomas1`;
    }

    function updateRatingDisplay(ratings, userRating) {
      document.getElementById('thumbs-up-count').textContent = `(${ratings.up})`;
      document.getElementById('thumbs-down-count').textContent = `(${ratings.down})`;
      
      // Reset button styles
      const upBtn = document.getElementById('thumbs-up-btn');
      const downBtn = document.getElementById('thumbs-down-btn');
      upBtn.classList.remove('user-rated', 'disabled');
      downBtn.classList.remove('user-rated', 'disabled');
      
      // Highlight user's rating if they've voted
      if (userRating) {
        const button = userRating === 'up' ? upBtn : downBtn;
        button.classList.add('user-rated');
        
        // Disable both buttons since user already voted
        upBtn.classList.add('disabled');
        downBtn.classList.add('disabled');
        
        const statusText = userRating === 'up' ? 'Love It' : 'Not My Style';
        document.getElementById('rating-status').textContent = `You rated this track: ${statusText}`;
      } else {
        document.getElementById('rating-status').textContent = '';
      }
    }

    function showUserInfo(user) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('user-info').style.display = 'block';
      document.getElementById('current-username').textContent = user.username;
    }

    function showLoginForm() {
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('user-info').style.display = 'none';
    }

    describe('updateTrackDisplay', () => {
      test('should update track information in DOM', () => {
        const metadata = {
          title: 'Test Song',
          artist: 'Test Artist',
          album: 'Test Album',
          date: '2023'
        };

        updateTrackDisplay(metadata);

        expect(document.getElementById('track-title').textContent).toBe('Test Song');
        expect(document.getElementById('track-info').textContent).toBe('Test Artist');
        expect(document.getElementById('track-album').textContent).toBe('Test Album');
        expect(document.getElementById('track-year').textContent).toBe('2023');
        expect(document.title).toBe('Test Artist - Test Song | Radio Thomas1');
      });

      test('should handle missing metadata fields', () => {
        const metadata = {
          title: 'Only Title'
        };

        updateTrackDisplay(metadata);

        expect(document.getElementById('track-title').textContent).toBe('Only Title');
        expect(document.getElementById('track-info').textContent).toBe('Unknown Artist');
        expect(document.getElementById('track-album').textContent).toBe('Unknown Album');
        expect(document.getElementById('track-year').textContent).toBe('Unknown Year');
      });

      test('should handle empty metadata object', () => {
        updateTrackDisplay({});

        expect(document.getElementById('track-title').textContent).toBe('Unknown Track');
        expect(document.getElementById('track-info').textContent).toBe('Unknown Artist');
        expect(document.getElementById('track-album').textContent).toBe('Unknown Album');
        expect(document.getElementById('track-year').textContent).toBe('Unknown Year');
      });
    });

    describe('updateRatingDisplay', () => {
      test('should update rating counts', () => {
        const ratings = { up: 10, down: 3 };
        
        updateRatingDisplay(ratings, null);

        expect(document.getElementById('thumbs-up-count').textContent).toBe('(10)');
        expect(document.getElementById('thumbs-down-count').textContent).toBe('(3)');
      });

      test('should highlight user rating and disable buttons', () => {
        const ratings = { up: 5, down: 2 };
        
        updateRatingDisplay(ratings, 'up');

        const upBtn = document.getElementById('thumbs-up-btn');
        const downBtn = document.getElementById('thumbs-down-btn');

        expect(upBtn.classList.contains('user-rated')).toBe(true);
        expect(upBtn.classList.contains('disabled')).toBe(true);
        expect(downBtn.classList.contains('disabled')).toBe(true);
        expect(document.getElementById('rating-status').textContent).toContain('Love It');
      });

      test('should show down rating status', () => {
        const ratings = { up: 2, down: 5 };
        
        updateRatingDisplay(ratings, 'down');

        const downBtn = document.getElementById('thumbs-down-btn');
        expect(downBtn.classList.contains('user-rated')).toBe(true);
        expect(document.getElementById('rating-status').textContent).toContain('Not My Style');
      });

      test('should reset buttons when no user rating', () => {
        // First set some classes
        const upBtn = document.getElementById('thumbs-up-btn');
        const downBtn = document.getElementById('thumbs-down-btn');
        upBtn.classList.add('user-rated', 'disabled');
        downBtn.classList.add('disabled');

        const ratings = { up: 1, down: 1 };
        updateRatingDisplay(ratings, null);

        expect(upBtn.classList.contains('user-rated')).toBe(false);
        expect(upBtn.classList.contains('disabled')).toBe(false);
        expect(downBtn.classList.contains('disabled')).toBe(false);
        expect(document.getElementById('rating-status').textContent).toBe('');
      });
    });

    describe('Authentication UI', () => {
      test('showUserInfo should display user information', () => {
        const user = { username: 'testuser123' };
        
        showUserInfo(user);

        expect(document.getElementById('login-form').style.display).toBe('none');
        expect(document.getElementById('user-info').style.display).toBe('block');
        expect(document.getElementById('current-username').textContent).toBe('testuser123');
      });

      test('showLoginForm should display login form', () => {
        showLoginForm();

        expect(document.getElementById('login-form').style.display).toBe('block');
        expect(document.getElementById('user-info').style.display).toBe('none');
      });
    });
  });

  describe('API Request Handling', () => {
    beforeEach(() => {
      fetch.mockClear();
    });

    async function rateTrack(rating, trackData) {
      const response = await fetch('/api/rate-track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ rating, ...trackData })
      });

      return response.json();
    }

    async function loadTrackRatings(trackTitle, trackArtist) {
      const response = await fetch(
        `/api/track-ratings?trackTitle=${encodeURIComponent(trackTitle)}&trackArtist=${encodeURIComponent(trackArtist)}`,
        { credentials: 'include' }
      );

      return response.json();
    }

    test('should make rating request with correct data', async () => {
      const mockResponse = {
        message: 'Rating recorded',
        ratings: { up: 1, down: 0 },
        username: 'testuser'
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });

      const trackData = {
        trackTitle: 'Test Song',
        trackArtist: 'Test Artist',
        trackYear: 2023
      };

      const result = await rateTrack('up', trackData);

      expect(fetch).toHaveBeenCalledWith('/api/rate-track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ rating: 'up', ...trackData })
      });

      expect(result).toEqual(mockResponse);
    });

    test('should load track ratings with proper URL encoding', async () => {
      const mockRatings = {
        ratings: { up: 5, down: 2 },
        userRating: 'up'
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockRatings)
      });

      const result = await loadTrackRatings('Song With Spaces', 'Artist & Name');

      expect(fetch).toHaveBeenCalledWith(
        '/api/track-ratings?trackTitle=Song%20With%20Spaces&trackArtist=Artist%20%26%20Name',
        { credentials: 'include' }
      );

      expect(result).toEqual(mockRatings);
    });

    test('should handle API errors gracefully', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      try {
        await rateTrack('up', { trackTitle: 'Test', trackArtist: 'Test' });
      } catch (error) {
        expect(error.message).toBe('Network error');
      }

      expect(fetch).toHaveBeenCalled();
    });
  });
});