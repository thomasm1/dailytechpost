@users @destructive @authenticated
Feature: Isolated user registration, ADMIN creation, update, patch and deletion
  Background:
    * if (!allowWrites) karate.fail('Write tests require -DallowWrites=true and a disposable API database')
    * url apiBaseUrl
    * def fixtures = []
    * configure afterScenario = read('classpath:helpers/cleanup.js')
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    * def email = 'karate-' + java.util.UUID.randomUUID() + '@example.com'
    * def password = 'Karate-' + java.util.UUID.randomUUID() + '!'

  Scenario Outline: Register via <alias>, login, patch via <patchPath>, delete via <deletePath>
    Given path 'users', 'auth', '<alias>'
    And request { email: '#(email)', password: '#(password)' }
    When method POST
    Then status 201
    * def id = response.userId
    * eval fixtures.push('users/' + id)
    And match response.email == email
    And match response.roles contains { id: '#number', name: 'ROLE_USER' }
    And match header Location == '/api/users/' + email
    Given path 'users', 'auth', '<alias>'
    And request { email: '#(email)', password: '#(password)' }
    When method POST
    Then status 400
    Given path 'users', 'auth', 'signin'
    And request { usernameOrEmail: '#(email)', password: '#(password)' }
    When method POST
    Then status 200
    * def freshToken = response.accessToken
    Given path 'users', 'me'
    And header Authorization = 'Bearer ' + freshToken
    When method GET
    Then status 200
    And match response.userId == id
    Given path 'users'
    And header Authorization = admin.authorization
    And request { userId: '#(id)', email: '#(email)', firstName: 'Updated', isActive: 1 }
    When method PUT
    Then status 200
    And match response.firstName == 'Updated'
    Given path '<patchPath>'
    And param userId = id
    And header Authorization = admin.authorization
    And request { firstName: 'Patched' }
    When method PATCH
    Then status 204
    Given path 'users', id
    And header Authorization = admin.authorization
    When method GET
    Then status 200
    And match response.firstName == 'Patched'
    And match response.email == email
    Given path '<deletePath>', id
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    And match response == true
    * eval fixtures.pop()
    Given path 'users', id
    And header Authorization = admin.authorization
    When method GET
    Then status 404
    Examples:
      | alias    | patchPath   | deletePath   |
      | register | users       | users        |
      | signup   | users/patch | users/delete |

  Scenario: ADMIN creation assigns USER and query ID overrides body ID on PUT
    Given path 'users'
    And header Authorization = admin.authorization
    And request { email: '#(email)', firstName: 'Created', lastName: 'Fixture', isActive: 1 }
    When method POST
    Then status 201
    * def id = response.userId
    * eval fixtures.push('users/' + id)
    And match header Location == '/api/users/' + id
    And match response.roles contains { id: '#number', name: 'ROLE_USER' }
    Given path 'users'
    And param userId = id
    And header Authorization = admin.authorization
    And request { userId: 0, firstName: 'QueryWins', email: '#(email)' }
    When method PUT
    Then status 200
    And match response.userId == id
    And match response.firstName == 'QueryWins'
