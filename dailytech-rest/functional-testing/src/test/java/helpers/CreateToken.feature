
Feature: Create Token
    Background:
        * url baseUrl + '/api/'

  Scenario: Create Token
    Given path 'users/auth/login'
    And headers { Accept: 'application/json', 'Content-Type': 'application/json' }
    And request { usernameOrEmail: '#(userEmail)', password: '#(userPassword)' }
    When method POST
    Then status 200
    And match response.accessToken == '#string'
    * def authToken = response.accessToken
    * def tokenType = 'Bearer'
    * def authHeader = tokenType + ' ' + authToken
