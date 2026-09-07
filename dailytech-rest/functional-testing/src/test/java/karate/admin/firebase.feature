@firebase @authenticated
Feature: Firebase user administration requires ADMIN and configured Firebase credentials
  Scenario:
    Given url apiBaseUrl
    And path 'admin', 'firebase-users'
    And header Authorization = adminAuthHeader
    When method GET
    Then status 200
    And match response == '#array'
    And match each response contains { uid: '#string', email: '##string', disabled: '#boolean', emailVerified: '#boolean', providers: '#array' }
