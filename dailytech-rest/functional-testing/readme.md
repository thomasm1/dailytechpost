# DailyTech REST functional tests and Postman

The suite follows the controllers in `../src/main/java/net/ourdailytech/rest/controllers`, their DTOs, and the non-`h2` security filter chain. Run against an already-started API. The default URL is `http://localhost:8082`. Set `DAILYTECH_BASE_URL` to select another host.

## Authentication

Public tests do not log in. Authenticated tests resolve USER and ADMIN independently through `helpers/auth.feature`, using a supplied bearer token or `POST /api/users/auth/login`. The helper reads `/api/users/me` and verifies the actual roles: USER tests reject an ADMIN identity. No account is automatically promoted or used as both roles.

| Purpose | Environment variable | Optional JVM property |
| --- | --- | --- |
| API origin (without `/api`) | `DAILYTECH_BASE_URL` | `baseUrl` |
| Ordinary USER email | `DAILYTECH_USER_EMAIL` | `api.username` |
| Ordinary USER password | `DAILYTECH_USER_PASSWORD` | `api.password` |
| ADMIN email | `DAILYTECH_ADMIN_EMAIL` | `api.adminUsername` |
| ADMIN password | `DAILYTECH_ADMIN_PASSWORD` | `api.adminPassword` |
| USER bearer token | `DAILYTECH_USER_TOKEN` | `api.token` |
| ADMIN bearer token | `DAILYTECH_ADMIN_TOKEN` | `api.adminToken` |
| Allowed frontend origin for CORS | `DAILYTECH_CORS_ORIGIN` | `corsOrigin` |

Prefer environment variables for credentials so they are not placed in shell command history. Token variables contain only the token, without `Bearer `. Both native JWTs and Firebase ID tokens are accepted by the server; Firebase roles are resolved through the local user mapping. Login returns `accessToken`, not `token`. Registration accepts `email` and `password`, returns a UserDto with 201, and does not return a login token.

Credentials are configured separately for USER and ADMIN. Loading the configuration does not require authentication.

## Commands

Run from `dailytech-rest/functional-testing` using Java 17+ and Maven:

```powershell
# Public reads, anonymous security checks, CORS and health; no credentials needed.
mvn test "-Dtest=ApiTest" "-Dkarate.options=--tags @smoke"

# Default suite: public tests plus authenticated reads/role checks.
# Supply separate USER and ADMIN credentials/tokens first.
mvn test "-Dtest=ApiTest"

# Only user reads, without creating records.
mvn test "-Dtest=ApiTest" "-Dkarate.options=--tags @users --tags ~@destructive"

# Security checks, including authenticated USER denial tests.
mvn test "-Dtest=ApiTest" "-Dkarate.options=--tags @security"

# CRUD fixtures, CSV deduplication and ownership tests on a disposable database.
mvn test "-Dtest=ApiTest" "-DallowWrites=true" "-Dkarate.options=--tags @destructive"

# Firebase ADMIN listing: also requires server Firebase Admin credentials.
mvn test "-Dtest=ApiTest" "-DrunFirebase=true" "-Dkarate.options=--tags @firebase"

# Parse/discover all suite scenarios without sending HTTP requests.
mvn test "-Dtest=ApiTest" "-DdryRun=true" "-DallowWrites=true" "-DrunFirebase=true"
```

`karate.options` is parsed by Karate 1.1.0 itself, rather than passed as one tag expression. In this version, CLI tag options replace the runner's default tag exclusions. Include `--tags ~@destructive` when selecting a group that also contains write tests. Every write scenario independently requires `-DallowWrites=true`; that requirement also applies to IDE runs. `runFirebase=true` includes Firebase in the default runner selection; explicitly selecting `@firebase` is also an opt-in.

`h2` disables the normal `SecurityConfig`; it is not an appropriate profile for validating the 401/403 matrix. Use a security-enabled application backed by a disposable test database for CRUD runs. The tests do not start the application or change its datasource.

## Coverage

| Feature | Checks |
| --- | --- |
| `karate/apiTest.feature` | Public categories/root/tree, links, weblinks, paginated posts; accepts the controller's 204 for an empty posts collection. |
| `karate/security/anonymous.feature` | Missing/malformed bearer token, protected GETs, anonymous writes, invalid login/signin credentials and CORS preflight. |
| `karate/security/user-role.feature` | Current-user identity, ADMIN-only reads, forbidden user administration/deletes, personal links. |
| `karate/users/users.feature` | ADMIN list aliases, ID/email lookup, missing user, PUT missing ID. |
| `karate/users/lifecycle.feature` | Register/signup, duplicate registration, signin, `/me`, ADMIN create, body/query PUT IDs, both PATCH and DELETE routes. |
| `karate/categories/categories.feature` | Discovered root/category/children reads. |
| `karate/links/lifecycle.feature` | Root/child/tree, category update, link ownership, private/public filtering, ADMIN override, non-owner rejection, CSV import/deduplication and deletion. |
| `karate/posts/posts.feature` | Discovered post and category lookup. |
| `karate/posts/lifecycle.feature` | Temporary category/post, date/email/username/category filters, post update, comment CRUD, weblink attachment and deletion. |
| `karate/comments/comments.feature` | Comments on a discovered post, including empty-comment handling. |
| `karate/weblinks/lifecycle.feature` | Weblink create/read/update/delete; PUT currently returns 201. |
| `karate/news/news.feature` | Invalid sections, sort order and dates rejected before contacting NYT. |
| `karate/admin/firebase.feature` | Optional Firebase user listing and response shape. |
| `karate/springActuator/actuator.feature` | Health reports UP. Other actuator endpoints depend on deployment exposure settings. |
| `karate/springRest/restData.feature` | Spring Data REST root discovery without fixed IDs. |

Read scenarios that require an existing post/root/comment abort their dependent steps when the collection is empty; the collection response is still checked. CRUD scenarios provide deterministic coverage using newly created resources. They use UUID-based names and register created IDs for reverse-order cleanup in `helpers/cleanup.js`, including after a failed assertion. Cleanup accepts already-deleted records (404); other cleanup failures are reported. An interrupted process can still leave fixtures behind.

## Effective security matrix

The broad GET permit rule in `SecurityConfig` does not override method-level `@PreAuthorize`.

| Route/action | Requirement |
| --- | --- |
| POST `/api/users/auth/login`, `/signin`, `/register`, `/signup` | Public |
| GET `/api/users/me` | Authenticated local/Firebase identity |
| Other UsersController reads and all user CRUD | ADMIN |
| GET `/api/admin/firebase-users` | ADMIN; listing additionally needs Firebase Admin configuration |
| GET categories, posts, comments and weblinks | Public |
| `/api/keys` and `/api/keys/**` | Denied for every role |
| GET `/api/news/top-stories/{section}` and `/api/news/search` | Public, validated and rate limited; requires server NYT configuration |
| GET `/api/links`, `/category/{id}`, `/category/public/{id}`, `/{id}` | Public under current implementation |
| GET `/api/links/me`, `/me/category/{id}` | USER or ADMIN |
| POST links / CSV | USER or ADMIN; server assigns current owner |
| PUT links | USER owner or ADMIN |
| POST categories/posts/comments/weblinks | Authenticated |
| PUT categories/posts/comments/weblinks | USER or ADMIN |
| DELETE API resources | ADMIN |
| OPTIONS | Public, subject to CORS origin policy |

Protected calls return 401 for anonymous users and 403 for authenticated users without permission. `GlobalExceptionHandler` handles Spring Security's `AccessDeniedException` and uses the HTTP status from `PostApiException`. `AccessDeniedResponseTest` covers missing, anonymous, and authenticated security contexts through MockMvc.

## Postman

Import both files from `../_Postman_/`:

- `-1a_dailytech-api_ENDPOINTS.postman_collection.json`
- `Dailytech_ENV.postman_environment.json`

The active folders use controller-derived routes, explicit no-auth/USER/ADMIN bearer settings, status assertions, and selected response-shape assertions. Supply `userEmail`, `userPassword`, `adminEmail`, `adminPassword`, then run the corresponding login requests; they store `jwtToken` and `jwtTokenAdmin` separately. Alternatively supply Firebase ID tokens directly. Set `lookupEmail` and resource IDs for individual lookup examples.

`runWrites` and `runFirebase` default to `false`. Write requests require `runWrites=true`; Firebase listing requires `runFirebase=true`. Retired key requests assert access denial. News requests require server-side NYT configuration. This uses `pm.execution.skipRequest()` and requires a Postman runtime supporting it. The **Previous examples - reference only** folder contains legacy requests and skips execution through its pre-request script. Copy an example out of that folder to adapt it; its old credentials/routes/status assumptions have not been validated.

The Postman write requests are **manual examples, not an ordered CRUD workflow**. Run create ? read/update ? delete for one disposable resource at a time. Create requests capture the returned resource ID. For related data create the category and post before comments/links, then delete dependents before their parents. Do not run every mutation/alias sequentially as one collection: aliases can delete the same ID twice, and registration examples can collide if the same email is reused. Karate provides the automated lifecycle and cleanup.

## API limitations

- PATCH users requires `?userId=...` in practice: the service does not fall back to the body ID, even though the controller marks the query optional. PUT users supports either ID source.
- Users listing returns an array and does not implement pagination parameters. Posts listing returns an envelope or 204 when empty.
- `/api/keys/**` is denied for every role and the raw-key controller has been removed. The news UI uses `/api/news` instead. See [provider security and deployment](../README_PROVIDER_SECURITY.md).
- `/api/links` and `/api/links/category/{id}` currently return all matching links, including private ones; the explicitly public category route filters them. The ownership tests check update authorization, not an assumed privacy policy for all reads.
- Missing weblinks currently return an empty DTO with 200. Weblink update returns 201. Tests reflect these implementations rather than the inconsistent Swagger annotations.
- The legacy books/movies examples have no corresponding controller in the controllers directory.
- Spring Data REST exposes a separate repository surface under `/api/rest`; the suite tests repository discovery, not authorization across all repository endpoints.

## Verification and reports

`mvn test -Dtest=AssetValidationTest` from `functional-testing` validates all feature parsing and executes config/fixture expressions offline. `mvn test -Dtest=AccessDeniedResponseTest` from `dailytech-rest` exercises the security exception regression without an external database. Karate dry-run verifies discovery and feature step syntax, not server behavior. Live integration assertions require a running API and the credentials above. Reports are written to `target/karate-reports`; authentication helpers suppress verbose request/response reports. Do not publish reports containing real account data.

References: [Karate 1.1.0 documentation](https://github.com/karatelabs/karate/blob/v1.1.0/README.md), [Postman execution API](https://learning.postman.com/docs/tests-and-scripts/write-scripts/postman-sandbox-reference/pm-execution/).
