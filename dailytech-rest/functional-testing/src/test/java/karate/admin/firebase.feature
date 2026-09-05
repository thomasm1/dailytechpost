@firebase @authenticated
Feature: Firebase user administration requires ADMIN and configured Firebase credentials
  Scenario:
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    Given url apiBaseUrl
    And path 'admin', 'firebase-users'
    And header Authorization = admin.authorization
    When method GET
    Then status 200
    And match response == '#array'
    And match each response contains { uid: '#string', email: '##string', disabled: '#boolean', emailVerified: '#boolean', providers: '#array' }
