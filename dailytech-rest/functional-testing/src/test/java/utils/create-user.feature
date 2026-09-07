@ignore
Feature: Create a disposable USER account for profile tests
  Scenario:
    * if (!allowWrites) karate.fail('Write tests require -DallowWrites=true')
    * configure headers = adminAuthHeaders
    * def userEmail = 'karate-profile-' + java.util.UUID.randomUUID() + '@example.com'
    * def userPassword = 'Karate-' + java.util.UUID.randomUUID() + '!'
    Given url apiBaseUrl
    And path 'users'
    And headers adminAuthHeaders
    And request { email: '#(userEmail)', password: '#(userPassword)', firstName: 'Fixture', isActive: 1 }
    When method POST
    Then status 201
    * def userId = response.userId
    * eval fixtures.push('users/' + userId)
    * def login = call read('classpath:utils/login.feature') { userEmail: '#(userEmail)', userPassword: '#(userPassword)' }
    * def authorization = login.authorization
