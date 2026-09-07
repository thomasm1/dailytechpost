# DailyTech authentication and provider security

## Accounts and roles

`users.userid` identifies the local account. Email is unique. `users_roles` stores
role assignments, and `user_plan.userid` links the account to its subscription.
Posts and links belong to the local user. The authentication provider does not
determine the user's role or subscription.

The Angular service `aws-authentication.service.ts` calls
`POST /api/users/auth/login` for native JWT authentication. This login route does
not exchange Cognito tokens. Firebase authentication looks up the local account
by the email in the verified token and loads its database roles. An existing
ADMIN account retains its role when signing in through Firebase. New Firebase
accounts receive ROLE_USER.

Firebase account lookup currently uses the token email without explicitly checking
the `email_verified` claim. Verification of the token and verification of email
ownership are separate checks; email verification is a remaining requirement for
secure account linking across providers.

## User endpoints

| Endpoint | Access and account selection |
| --- | --- |
| `GET /api/users/me` | Authenticated user's email from `authentication.name` |
| `GET /api/users`, `/api/users/list` | ADMIN |
| `GET /api/users/{userId}` | ADMIN |
| `GET /api/users/email/{email}` | ADMIN |
| `PATCH /api/users/me/profile` | Authenticated user's profile |
| `PATCH /api/users/email/{email}/profile` | ADMIN updating the specified user's profile |
| `PUT /api/users/email/{email}` | ADMIN updating the specified user |
| `POST /api/users` | ADMIN creating an account with an explicit password |
| `POST /api/users/auth/register` | Public registration; assigns ROLE_USER |

ID/query-based update and delete routes also require ADMIN. An ADMIN can use
`/me` for their own account; selecting another account requires the corresponding
email or ID route.

Admin creation accepts `CreateUserRequestDto` and assigns ROLE_USER. Registration
also assigns ROLE_USER. Neither operation derives a password from the email.
User response DTOs do not expose passwords.

Profile updates accept first name, last name, organization code, contact type and
profile URL. They do not accept changes to email, user ID, password, provider,
roles or subscription. Omitted numeric update fields retain their existing values.
Profile URLs support up to 1,024 characters.

User responses include provider metadata and the effective subscription plan.
Missing plans, canceled or past-due subscriptions, and expired trials return FREE.
Active plans and unexpired trials return their assigned plan. Reading a profile
does not rewrite billing history.

## User schema and sample data

The Java entity and repository use Long IDs, stored as BIGINT. Liquibase manages
schema upgrades through `src/main/resources/db/changelog/db.changelog-master.yaml`.
The `007-user-parity.yaml` migration adds email uniqueness, expands profile URL
storage and ensures plan ownership. It inserts missing ROLE_USER and ROLE_ADMIN
definitions and supplies FREE plans only for users without a plan row. Existing
credentials, role assignments and subscription records are preserved. Duplicate
emails stop the migration so account ownership can be resolved before proceeding.

Liquibase records applied changesets; subsequent runs skip them. The standalone
MySQL and H2 schema files describe fresh databases, not upgrades to existing tables.

`data-mysql.sql` and `data-h2.sql` contain five sample accounts with role assignments
and billing scenarios. Their passwords and provider subjects are NULL. They are
database fixtures, not login credentials. The full fixture scripts are not
idempotent production seed scripts. Functional tests require separately configured
DailyTech USER and ADMIN credentials.

## External provider credentials

Angular calls DailyTech for news data. DailyTech calls NYT with a server-only credential. No endpoint returns that credential to Angular, including to administrators.

```text
Angular NewsService -> GET /api/news/top-stories/technology
                    -> GET /api/news/search?q=technology&sort=newest
DailyTech NewsController -> NewsService -> fixed HTTPS NYT API
                                        + runtime NYT_API (or NYT_API_KEY)
                        <- selected article fields only
```

## Code paths

| Responsibility | File |
| --- | --- |
| Reject every `/api/keys` and `/api/keys/**` request before broad GET permissions | `src/main/java/net/ourdailytech/rest/security/SecurityConfig.java` |
| Apply the same retirement in H2 | `src/main/java/net/ourdailytech/rest/config/TestSecurityConfig.java` and its test-source counterpart |
| News routes and caller request limit | `src/main/java/net/ourdailytech/rest/controllers/NewsController.java` |
| Server credential, fixed provider requests, validation, projection, cache and provider budget | `src/main/java/net/ourdailytech/rest/service/NewsService.java` |
| Browser calls to DailyTech | `../dailytech-angular/src/app/components/news/news.service.ts` |
| Public browser configuration | `../dailytech-angular/src/environments/environment.ts` and `environment.prod.ts` |
| Build configuration checks | `../dailytech-angular/scripts/check-public-config.cjs` and `package.json` |

Raw-key endpoints and the startup Google Maps script loader are disabled. Future NASA, Moralis or AI integrations need their own narrowly scoped backend operations; do not recreate a generic key endpoint or arbitrary-URL proxy.

## Runtime configuration

Set `NYT_API`, or the fallback `NYT_API_KEY`, in the **REST process environment**, using a newly issued credential. Alternatively supply the Spring property `app.news.nyt-api-key` from a private runtime configuration source. Do not commit its value or pass it into the Angular build. A missing value produces HTTP 503 for valid news requests; other application features can still start.

For production, provision the secret in the deployment platform's secret store and inject it into the REST runtime with access limited to its service identity. Secret-store provisioning and runtime injection are managed by the deployment platform. Configure the deployment to refresh/restart the process when the credential changes.

The news routes are public. They accept only supported sections and search inputs. The server never forwards browser authentication headers to NYT, never follows provider redirects, and returns generic provider errors. Keep outbound HTTP wire/debug logging disabled: NYT authenticates through a query parameter, so logging complete upstream URLs could expose the key.

Local frontend origins include `http://localhost:3000` (`npm run start3000`) and
`http://localhost:4200`. `APP_CORS_ALLOWED_ORIGINS` overrides the default allowlist;
when set, it must include the frontend's exact origin. CORS can reject an anonymous
news request even though the endpoint does not require login.

Default limits:

- 30 news requests per minute per remote IP; at most 4,096 IP entries per minute.
- 5 upstream requests per minute and 500 per UTC day, including failed attempts. Override with `app.news.requests-per-minute` and `app.news.requests-per-day` to match the provider subscription.
- A ten-minute cache with at most 256 entries. Cache hits do not consume the upstream budget.
- Three-second connection timeout, ten-second read timeout, two-megabyte response limit; cache misses are serialized.

These limits are in-memory and per process. Restarts reset them; multiple replicas each have a separate budget. Before scaling, enforce a shared budget/rate limit at the gateway or shared store. The caller limit uses `getRemoteAddr()` and does not trust caller-supplied `X-Forwarded-For`; behind a proxy it can group users together unless trusted proxy handling is configured. Choose deployment limits accordingly.

## EC2 environment mapping

`src/main/resources/application.yml` maps these runtime variables. The first name wins when both aliases are set; keep unused aliases unset (an explicitly empty variable does not select the fallback).

| Spring property | EC2 environment variable, then optional fallback |
| --- | --- |
| `app.news.nyt-api-key` | `NYT_API`, then `NYT_API_KEY` |
| `app.news.requests-per-minute` | `NEWS_REQUESTS_PER_MINUTE` (default 5) |
| `app.news.requests-per-day` | `NEWS_REQUESTS_PER_DAY` (default 500) |
| `app.providers.openai-api-key` | `OPENAI_API_KEY` |
| `app.providers.gemini-api-key` | `GEMINI_API_KEY` |
| `app.providers.google-maps-api-key` | `googleMapAPIKey`, then `GOOGLE_API_KEY` |
| `app.providers.google-api-key` | `GOOGLE_API_KEY` |
| `app.providers.anthropic-api-key` | `ANTHRO_API_KEY`, then `ANTHROPIC_API_KEY` |
| `app.providers.moralis-api-key` | `MORALIS_API_KEY` |
| `app.providers.nasa-api-key` | `NASA_API_KEY`, then `nasaAPIKey` |

NYT is the active provider integration. The other provider properties have no service consumers. Actuator environment/configuration values are explicitly hidden.

An `export` in an SSH shell only reaches processes started from that shell. If EC2 runs the application through systemd, supply these variables through that unit's protected `EnvironmentFile` or deployment secret injection, then restart the service. A systemd environment file uses `NAME=value` lines without `export`. If Docker runs the application, inject the variables into the container runtime. Do not assume a shell profile automatically configures systemd or Docker.

## Browser configuration

Everything in Angular environment files and generated JavaScript is public. The environment files contain public configuration and can be tracked in Git. Provider credentials and Firebase App Check debug tokens belong outside the browser build. `src/.env` is excluded from Angular assets; local secret files must remain untracked.

Firebase web configuration is public. Its browser API key identifies the Firebase project; authorization must be enforced by Firebase rules and backend token checks. Restrict that key to the intended Firebase APIs and appropriate application restrictions in the provider console. Do not allow a browser Firebase key to authorize Gemini or other paid server APIs. Firebase Admin service-account private keys must remain server-only.

`npm run prod` and `npm run build` check the public configuration allowlist before building, then scan `dist/dailytech` afterward. Direct `ng build` bypasses these npm hooks; CI should use the npm scripts. The scanner detects selected credential signatures and `.env` files, with an exception for the configured Firebase web keys. It is a guardrail, not proof that arbitrary secrets cannot be present. Review assets and use a repository/CI secret scanner as well.

## Deployment and exposed-key cleanup

1. Inventory which old credentials were live, including provider keys, App Check debug tokens and credentials in old browser bundles or publicly served `.env` files. Treat exposed server credentials as compromised. If exposure is still active, block `/api/keys/**` and static `.env` access at the deployed gateway immediately.
2. Issue a replacement NYT credential and inject it only into the REST runtime. Configure provider restrictions and usage alerts. Revoke unused exposed credentials immediately; replace credentials still needed by other applications before revoking their old versions.
3. Build REST from clean output (`mvn clean package` with the project's deployment configuration). A clean build prevents a deleted `KeysController.class` from surviving in an old build directory. Deploy the updated REST service and confirm anonymous key requests return 401 and authenticated USER/ADMIN requests return 403.
4. Run `npm run prod` in `dailytech-angular` and deploy the newly generated `dist/dailytech`. Deploy from the build output rather than the archived `dailytech-build-prod` or `dailytech-build-dev` directories. Replace old static output and invalidate CDN/service-worker caches as appropriate. Verify `.env` is not served from the old deployment.
5. Verify news browsing and search against the deployed backend. Revoke replaced exposed provider credentials and debug tokens. Purging files or Git history cannot revoke a copied credential. Review provider usage for unexpected activity.

Credential rotation must cover every application using the same key. Deploy updated services and static assets before revoking credentials they still require.

## Verification

From `dailytech-rest`:

```powershell
mvn test "-Dtest=NewsServiceTest,NewsControllerTest,RetiredKeysSecurityTest,AccessDeniedResponseTest"
```

User account, profile permission, Firebase role and migration tests:

```powershell
mvn test "-Dtest=UserParityTest,UserParityMigrationTest,UserProfileSecurityTest,UsersControllerTest,UserServiceTest,FirebaseTokenAuthenticationServiceTest"
```

Migration tests use isolated H2 databases in MySQL compatibility mode. They cover
repeat execution, preservation of existing plans, rejection of duplicate emails,
and loading the H2 schema with its sample data. These tests do not apply changes
to the deployed MySQL database.

From `dailytech-angular`:

```powershell
npm run prod
node node_modules/@angular/cli/bin/ng.js test --watch=false --browsers=ChromeHeadless --include=src/app/components/news/news.service.spec.ts --include=src/app/app.component.spec.ts --include=src/app/service/auth/http-intercepter-basic-auth.service.spec.ts
```

Postman includes backend news requests and denial checks for retired key endpoints. Karate includes anonymous, USER and ADMIN key-denial checks and invalid news inputs; see [functional testing](functional-testing/readme.md) for credentials and safe execution. Offline unit tests use fake provider credentials and mocked NYT responses. Karate dry-run parses scenarios but does not verify a live deployment.
## Profile images

Authenticated users upload JPEG or PNG images using `POST /api/users/me/profile/image`
with a multipart `file` field. The server resolves the local user from authentication,
checks the image format, uploads the original bytes to S3, and saves the resulting URL in
`users.cusurl`. The response is the updated user profile. Uploads are limited to
5 MB. SVG and other non-JPEG/PNG formats are rejected. The format check does not
fully decode or sanitize image contents. Original EXIF metadata, including orientation
and any location tags, is preserved; images are not resized or re-encoded.

The default object location is `s3://tmm-nov/dailytech/img/users/{userId}/{uuid}.jpg`
(or `.png`). CloudFront uses Origin path `/dailytech`, so the display URL is
`https://d2cn5yubgz8yjt.cloudfront.net/img/users/{userId}/{uuid}.jpg`.
`DAILYTECH_PROFILE_IMAGE_ORIGIN_PATH` must match CloudFront's Origin path; use an
empty value for a distribution with no Origin path. This affects URL generation,
not the S3 upload key. Existing stored image URLs are not automatically rewritten.
`DAILYTECH_PROFILE_IMAGE_BUCKET`, `DAILYTECH_PROFILE_IMAGE_BASE_URL`, and `AWS_REGION`
override deployment settings. AWS credentials use the SDK default credential chain;
they are never supplied by Angular or stored in the application configuration.

The runtime IAM identity needs `s3:PutObject` for this image prefix. The configured
public URL must already allow image delivery through S3 or a CDN. The application
does not change bucket policies, set public object ACLs, or delete previous images.
Uploads succeed only when storage is configured and credentials have access.
