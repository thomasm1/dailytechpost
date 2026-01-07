Feature: To get the JWT token for the user
  POST baseUrl + '/api/auth/login'

  Scenario: Register the user and generate the token
    # Register the User
    Given url  baseUrl + '/api/users/auth/register'
    And headers {Accept:'application/json', "Content-Type":'application/json'}
    And request {   username: '#(username)',  password: '#(password)' }
    When method post
    Then status 200
    # Get the Token
    Given url  baseUrl + '/api/users/auth/login'
    And headers {Accept:'application/json', "Content-Type":'application/json'}
    And request {   username: '#(username)',  password: '#(password)' }
    When method post
    Then status 200
    * def authToken = response.token
