# Test Suite Documentation

## Overview

Comprehensive testing framework for the Daily Tech Media radio streaming platform with separate test suites for backend, frontend, and integration testing.

## Test Structure

```
tests/
├── backend/           # Server-side API and logic tests
├── frontend/          # Client-side DOM and JavaScript tests  
├── integration/       # End-to-end user workflow tests
└── utils/            # Test utilities and helpers
```

## Test Suites

### Backend Tests (`tests/backend/`)

- **Database isolation**: Each test uses fresh test database
- **API endpoint testing**: All REST endpoints with edge cases
- **Business logic validation**: Rating system, user management
- **Security testing**: Input validation, authentication

#### Key Test Files:
- `ratings.test.js` - Rating system and duplicate prevention
- `fingerprinting.test.js` - Guest user fingerprinting system

### Frontend Tests (`tests/frontend/`)

- **DOM testing without browser**: Uses JSDOM environment
- **JavaScript unit tests**: Individual function testing
- **UI component testing**: Form validation, display updates
- **Mock HTTP requests**: API interaction testing

#### Key Test Files:
- `dom.test.js` - DOM manipulation and component testing
- `javascript.test.js` - Pure JavaScript function testing

### Integration Tests (`tests/integration/`)

- **Complete user workflows**: Guest and registered user journeys
- **Cross-system testing**: Frontend + Backend + Database
- **Error recovery**: Network failures, concurrent access
- **Data consistency**: Multi-user scenarios

#### Key Test Files:
- `workflows.test.js` - Complete user interaction flows

## Running Tests

### Individual Test Suites

```bash
# Backend tests only (with database isolation)
npm run test:backend

# Frontend tests only (JSDOM environment)  
npm run test:frontend

# Integration tests only (longer timeout)
npm run test:integration
```

### Combined Testing

```bash
# All tests with coverage report
npm run test:coverage

# Watch mode for development
npm run test:watch

# CI/CD mode with coverage thresholds
npm run test:ci

# Debug mode with verbose output
npm run test:debug
```

## Key Testing Features

### 🗃️ Database Isolation

- Each test gets a fresh `radio_db_test` database
- Automatic schema setup and teardown
- Test data seeding utilities
- No test interference or pollution

### 👤 User Fingerprinting Testing

- Simulates different browser fingerprints
- Tests guest user creation and persistence
- Validates duplicate rating prevention
- Cross-session identity maintenance

### 🎵 Rating System Testing

- Duplicate vote prevention (users and guests)
- Concurrent rating attempt handling
- Rating aggregation accuracy
- Edge case validation

### 🔄 Integration Scenarios

- Guest → Registered user transitions
- Multiple user rating interactions
- Network failure recovery
- Data consistency under load

## Test Utilities

### TestDatabase Class
- Automated test database creation/destruction
- Schema initialization with proper indexes
- Data seeding with realistic test scenarios
- Connection pooling and cleanup

### TestHelpers Class
- Fingerprint generation utilities
- Mock request/response objects
- User creation and login helpers
- Assertion validation helpers

## Coverage Requirements

- **Minimum 70%** coverage across:
  - Branches (conditional logic)
  - Functions (all functions called)
  - Lines (code execution)
  - Statements (individual statements)

## Environment Setup

### Prerequisites

```bash
# Install dependencies (includes test dependencies)
npm install

# Create test database
npm run db:test:create

# Initialize test database schema
npm run db:test:init
```

### Environment Variables

Tests use these environment variables (automatically set):

```bash
NODE_ENV=test
TEST_DB_NAME=radio_db_test
DB_HOST=localhost
DB_USER=radio_user
DB_PASSWORD=radio_pass
```

## Test Examples

### Backend API Test
```javascript
test('should prevent duplicate ratings', async () => {
  const cookies = await TestHelpers.loginUser(app, 'testuser');
  
  // First rating succeeds
  await request(app)
    .post('/api/rate-track')
    .set('Cookie', cookies)
    .send({ rating: 'up', trackTitle: 'Test', trackArtist: 'Artist' })
    .expect(200);
    
  // Second rating fails
  await request(app)
    .post('/api/rate-track') 
    .set('Cookie', cookies)
    .send({ rating: 'down', trackTitle: 'Test', trackArtist: 'Artist' })
    .expect(400);
});
```

### Frontend DOM Test
```javascript  
test('should update rating display', () => {
  const ratings = { up: 5, down: 2 };
  updateRatingDisplay(ratings, 'up');
  
  expect(document.getElementById('thumbs-up-count').textContent).toBe('(5)');
  expect(document.getElementById('thumbs-up-btn').classList.contains('user-rated')).toBe(true);
});
```

### Integration Workflow Test
```javascript
test('should handle complete guest user journey', async () => {
  // Rate track as guest
  const response1 = await request(app)
    .post('/api/rate-track')
    .set('User-Agent', 'test-browser')
    .send({ rating: 'up', trackTitle: 'Test', trackArtist: 'Artist' })
    .expect(200);
    
  // Verify rating persists across requests
  const response2 = await request(app)
    .get('/api/track-ratings')
    .set('User-Agent', 'test-browser')
    .query({ trackTitle: 'Test', trackArtist: 'Artist' })
    .expect(200);
    
  expect(response2.body.userRating).toBe('up');
});
```

## Debugging Tests

### Verbose Output
```bash
npm run test:debug
```

### Single Test File
```bash
npx jest tests/backend/ratings.test.js --verbose
```

### Watch Mode with Coverage
```bash
npm run test:watch -- --coverage
```

### Debug Database State
```bash
# Access test database directly
PGPASSWORD=radio_pass psql -h localhost -U radio_user -d radio_db_test
```

## Best Practices

1. **Isolation**: Each test should be independent
2. **Cleanup**: Always clean up test data after tests
3. **Mocking**: Mock external services and APIs  
4. **Assertions**: Use specific, meaningful assertions
5. **Naming**: Descriptive test names that explain the scenario
6. **Grouping**: Organize related tests with `describe` blocks
7. **Edge Cases**: Test error conditions and boundary values

## Continuous Integration

The test suite is designed for CI/CD environments:

- **Fast execution**: Parallel test running where possible
- **Clean environment**: No external dependencies
- **Coverage reporting**: Automated coverage analysis
- **Exit codes**: Proper success/failure status codes
- **Timeouts**: Reasonable timeouts for reliable execution