# Daily Tech REST API

Spring Boot 3.3.9 + Java 21 backend for Daily Tech posts, users, categories, research links, comments, and admin utilities.

## Architecture

- **Runtime**: Spring Boot 3.3.9, Java 21, Maven
- **Database**: MySQL profile for the AWS/RDS `dailytech` database; H2 profile for tests
- **Security**: Spring Security with two bearer-token paths: AWS-DB DailyTech JWTs and Firebase ID tokens
- **Identity store**: AWS-DB `users` table with roles and optional Firebase identity mapping
- **Docs**: Swagger UI at `/swagger-ui.html`, OpenAPI at `/v3/api-docs`
- **Schema/data**: Liquibase is configured; legacy SQL seed files are still present

## Authentication Summary

The API accepts bearer tokens in two forms.

### Native DailyTech JWT login

`POST /api/users/auth/login`

- Client sends email/password for a user stored in the AWS/MySQL user database.
- Spring Security validates the password against the AWS-DB hashed password.
- The backend returns a signed DailyTech JWT.
- JWT subject is the user email.
- JWT includes AWS-DB roles such as `ROLE_USER` or `ROLE_ADMIN`.
- Current expiration config is `app.jwt-expiration-milliseconds=604800000` (7 days).

### Firebase member login

Member portal users authenticate with Firebase first. The frontend sends the Firebase ID token to the backend:

```http
Authorization: Bearer <firebase-id-token>
```

The backend filter first tries to read the token as a AWS-DB DailyTech JWT. If that fails, it verifies the token with Firebase Admin SDK. On successful Firebase verification:

- The backend reads Firebase email and UID.
- It finds or provisions a AWS-DB `users` row.
- It stores `authProvider=FIREBASE` and `authSubject=<Firebase UID>`.
- New Firebase-provisioned users get `ROLE_USER` by default.
- The Firebase token is **not** stored in the database.

Do not persist Firebase ID tokens server-side. They are short-lived request credentials. The durable mapping is `authProvider + authSubject + email`; the backend should verify fresh bearer tokens as needed.

## Key Endpoints

Base API path is `/api`.

### Auth and Users

- `POST /api/users/auth/login` - native AWS-DB / Firestore JWT login
- `POST /api/users/auth/register` - native Firebase-user registration
- `GET /api/users/me` - current authenticated user; accepts DailyTech AWS-DB JWT or Firebase ID token
- `GET /api/users` - list users
- `GET /api/users/{userId}` - get user by id
- `GET /api/users/email/{email}` - get user by email
- `PUT /api/users` - update user, with `userId` query param or body id
- `PATCH /api/users/patch?userId={id}` - partial user update
- `DELETE /api/users/{userId}` - delete user

### Posts and Comments

- `GET /api/posts` - paginated posts; supports `pageNo`, `pageSize`, `sortBy`, `sortDir`
- `GET /api/posts/{id}` - get post by id
- `GET /api/posts/date/{did}` - get post by display/date id
- `GET /api/posts/category/{categoryId}` - posts by category
- `GET /api/posts/email/{email}` - posts by author email
- `GET /api/posts/username/{username}` - posts by username
- `POST /api/posts` - create post
- `PUT /api/posts?id={id}` - update post
- `DELETE /api/posts/{id}` - delete post
- `GET /api/posts/{postId}/comments` - comments for a post
- `POST /api/posts/{postId}/comments` - create comment
- `PUT /api/posts/{postId}/comments/{id}` - update comment
- `DELETE /api/posts/{postId}/comments/{id}` - delete comment

### Categories

- `GET /api/categories` - all categories
- `GET /api/categories/root` - root categories
- `GET /api/categories/tree` - category tree
- `GET /api/categories/{id}` - category by id
- `GET /api/categories/{id}/children` - child categories
- `POST /api/categories` - create category
- `PUT /api/categories?id={id}` - update category
- `DELETE /api/categories/{id}` - delete category; admin only

### Links / Research URLs

- `GET /api/links` - all links
- `GET /api/links/{id}` - link by id
- `GET /api/links/category/{categoryId}` - all links by category
- `GET /api/links/category/public/{categoryId}` - public links by category
- `GET /api/links/me` - current user's links
- `GET /api/links/me/category/{categoryId}` - current user's links by category
- `POST /api/links` - add link for current user
- `POST /api/links/bulk/csv` - upload links from CSV
- `PUT /api/links?id={id}` - update link
- `DELETE /api/links/{id}` - delete link; admin only

### Admin

- `GET /api/admin/firebase-users` - list Firebase users through Firebase Admin SDK; admin only

## Environment Configuration

The currently relevant configuration keys are:

- `MYSQL_AWS_DB_PASSWORD` - MySQL/RDS database password used by `application-mysql.yml`
- `FIREBASE_PROJECT_ID` - Firebase project id used when verifying Firebase ID tokens
- `FIREBASE_CREDENTIALS_PATH` - path to the Firebase service account credentials JSON for Firebase Admin SDK
- `APP_CORS_ALLOWED_ORIGINS` - comma-separated browser origins allowed for `/api/**`
- `app.jwt-secret` / `APP_JWT_SECRET` equivalent deployment secret - signing key for AWS-DB DailyTech JWTs
- `app.jwt-expiration-milliseconds` - AWS-DB JWT lifetime; currently 7 days

Keep real secrets out of git. Local config files may contain placeholders/defaults, but production should inject secrets through environment variables or deployment configuration.

## Local Development

```bash
# Run backend
./mvnw spring-boot:run

# Build
./mvnw clean compile

# Test
./mvnw test

# Package
./mvnw package
```

The default application port is `8082`.

## Notes

- `GET /api/**` is broadly public in the current security config, while mutating API calls require authentication and some deletes require `ROLE_ADMIN`.
- Firebase users are synchronized into the AWS-DB user database on authenticated `/api/users/me` access.
- The frontend should refresh Firebase ID tokens as needed rather than relying indefinitely on a previously stored browser-session token.
- Swagger package scanning should be kept aligned with the controller package if API docs appear incomplete.
