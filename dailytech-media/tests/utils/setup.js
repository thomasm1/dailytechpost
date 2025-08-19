// Jest global setup for all test environments

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.TEST_DB_NAME = 'radio_db_test';

// Increase timeout for integration tests
jest.setTimeout(30000);

// Suppress console logs in tests unless debugging
if (!process.env.DEBUG) {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    // Only show errors that are important for tests
    if (args[0] && typeof args[0] === 'string') {
      if (args[0].includes('Test') || args[0].includes('Error') || args[0].includes('Failed')) {
        originalConsoleError.apply(console, args);
      }
    }
  };
}

// Global test utilities
global.testUtils = {
  sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Mock console methods for testing
  mockConsole: () => {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = jest.fn();
    console.error = jest.fn();
    console.warn = jest.fn();
    
    return {
      restore: () => {
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;
      },
      getLogs: () => console.log.mock.calls,
      getErrors: () => console.error.mock.calls,
      getWarnings: () => console.warn.mock.calls
    };
  },

  // Generate test data
  generateTestTrack: (index = 1) => ({
    trackTitle: `Test Song ${index}`,
    trackArtist: `Test Artist ${index}`,
    trackYear: 2020 + index
  }),

  generateTestUser: (index = 1, isEmail = false) => {
    if (isEmail) {
      return {
        username: `testuser${index}@example.com`,
        password: `testpass${index}`
      };
    }
    return {
      username: `testuser${index}`,
      password: null
    };
  },

  // Assertion helpers
  expectRatingResponse: (response, expectedUp, expectedDown) => {
    expect(response.body).toHaveProperty('ratings');
    expect(response.body.ratings.up).toBe(expectedUp);
    expect(response.body.ratings.down).toBe(expectedDown);
  },

  expectErrorResponse: (response, statusCode, messageContains) => {
    expect(response.status).toBe(statusCode);
    expect(response.body).toHaveProperty('error');
    if (messageContains) {
      expect(response.body.error).toContain(messageContains);
    }
  }
};

// Handle unhandled promise rejections in tests
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit the process in tests, just log the error
});

// Graceful test cleanup
afterAll(async () => {
  // Give time for any pending operations to complete
  await global.testUtils.sleep(100);
});