
Feature: Create Token
    Background:
        * url baseUrl + '/api/'

  Scenario: Create Token
    Given path 'users/auth/login'
    And request {"user": {"email": "#(userEmail)","password": "#(userPassword)"}}
    When method Post
    Then status 200
    * def authToken = response.accessToken
    * def tokenType = 'Bearer'