# Daily Tech REST API

Spring Boot 3.3.9 REST API backend for the Daily Tech platform with comprehensive CRUD operations, authentication, and microservices architecture.

## Features

- **Posts Management**: CRUD operations with weblink citations
- **Comments System**: Post comments with user details
- **Categories**: News category management
- **Users & Authentication**: JWT-based security with role management
- **Weblinks**: Structured citation system for posts
- **Books**: Library management system

## Architecture

- **Framework**: Spring Boot 3.3.9 + Java 17
- **Database**: MySQL (production), H2 (testing)
- **Security**: Spring Security with JWT authentication
- **Documentation**: OpenAPI/Swagger integration
- **Build**: Maven with profiles (dev, prod, test)

## Quick Start

```bash
# Development
./mvnw spring-boot:run

# Build
./mvnw clean compile

# Tests
./mvnw test

# Package
./mvnw package

# Docker
docker build -t dailytech-rest .
docker-compose up
```

## API Endpoints

### Posts
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/{id}` - Get post by ID
- `PUT /api/posts/{id}` - Update post
- `DELETE /api/posts/{id}` - Delete post

### Comments
- `POST /api/posts/{postId}/comments` - Add comment to post
- `GET /api/posts/{postId}/comments` - Get post comments

### Categories
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category
- `PUT /api/categories/{id}` - Update category

### Weblinks
- `POST /api/posts/{postId}/weblinks` - Add weblink to post
- `GET /api/weblinks` - List all weblinks

## Configuration

### Database Profiles
- **H2**: `spring.profiles.active=h2` (testing)
- **MySQL**: `spring.profiles.active=mysql` (production)

### Environment Variables
- `DB_URL`: Database connection URL
- `DB_USERNAME`: Database username  
- `DB_PASSWORD`: Database password
- `JWT_SECRET`: JWT signing secret

## Testing

Comprehensive test suite with **89 @Test methods** across 16 test files covering:

- **Controller Tests**: API endpoints, request/response validation
- **Service Tests**: Business logic, data transformation  
- **Repository Tests**: JPA relationships, database operations
- **Integration Tests**: End-to-end workflows with database
- **Security Tests**: JWT authentication, role-based access

See [README-TESTS.md](./README-TESTS.md) for detailed test documentation.

```bash
./mvnw test                    # Run all tests (89 test methods)
./mvnw test -Dtest=PostService* # Run specific tests
./mvnw test -Dspring.profiles.active=h2 # Test with H2 database
```

## Docker Deployment

```bash
# Build image
docker build -t dailytech-rest .

# Run with compose
docker-compose up -d

# Access API
curl http://localhost:8080/api/posts
```

## API Documentation

- Swagger UI: `http://localhost:8080/swagger-ui.html`
- OpenAPI spec: `http://localhost:8080/v3/api-docs`