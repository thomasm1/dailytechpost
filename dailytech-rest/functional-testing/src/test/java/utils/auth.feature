@ignore
Feature: Resolve a distinct USER or ADMIN identity and verify its actual role
  Scenario:
    * configure report = { showLog: false, showAllSteps: false }
    # Tokens come from karate-config.js; this helper verifies identity without logging in again.
    * def authorization = role == 'admin' ? adminAuthHeader : authHeader
    * def expectedEmail = role == 'admin' ? adminEmail : userEmail
    * configure headers = role == 'admin' ? adminAuthHeaders : authHeaders
    Given url apiBaseUrl
    And path 'users', 'me'
    And header Authorization = authorization
    When method GET
    Then status 200
    And match response contains { userId: '#number', email: '#string', roles: '#array' }
    * def profile = response
    * match profile.email == expectedEmail
    * def roleNames = karate.map(profile.roles, function(r){ return r.name; })
    * if (role == 'admin' && roleNames.indexOf('ROLE_ADMIN') < 0) karate.fail('ADMIN credentials do not have ROLE_ADMIN')
    * if (role == 'user' && (roleNames.indexOf('ROLE_USER') < 0 || roleNames.indexOf('ROLE_ADMIN') >= 0)) karate.fail('USER tests require ROLE_USER without ROLE_ADMIN')
