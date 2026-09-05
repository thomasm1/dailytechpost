@ignore
Feature: Native JWT login (never registers or invents an admin)
  Scenario:
    * configure report = { showLog: false, showAllSteps: false }
    * if (!email || !password) karate.fail('Set credentials or a bearer token for the requested test role')
    Given url apiBaseUrl
    And path 'users', 'auth', 'login'
    And request { usernameOrEmail: '#(email)', password: '#(password)' }
    When method POST
    Then status 200
    And match response.accessToken == '#string'
    * def accessToken = response.accessToken
