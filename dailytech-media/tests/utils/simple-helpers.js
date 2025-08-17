// Simple test helpers - no over-engineering

class SimpleHelpers {
  // Generate unique test data to avoid conflicts
  static generateUniqueTrack(prefix = 'test') {
    const timestamp = Date.now();
    return {
      trackTitle: `${prefix} Song ${timestamp}`,
      trackArtist: `${prefix} Artist ${timestamp}`,
      trackYear: 2023
    };
  }

  static generateUniqueUser(prefix = 'testuser') {
    const timestamp = Date.now();
    return `${prefix}${timestamp}`;
  }

  // Simple response validation
  static expectRatingResponse(response, expectedUp, expectedDown) {
    expect(response.body).toHaveProperty('ratings');
    expect(response.body.ratings.up).toBe(expectedUp);
    expect(response.body.ratings.down).toBe(expectedDown);
  }

  static expectError(response, statusCode) {
    expect(response.status).toBe(statusCode);
    expect(response.body).toHaveProperty('error');
  }

  static expectSuccess(response) {
    expect(response.status).toBe(200);
  }
}

module.exports = SimpleHelpers;