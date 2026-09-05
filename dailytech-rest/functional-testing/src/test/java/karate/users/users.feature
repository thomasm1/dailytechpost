@users @authenticated
Feature: ADMIN user reads and current-user identity
  Background:
    * url apiBaseUrl
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    * header Authorization = admin.authorization

  Scenario Outline: ADMIN can list users through each alias
    Given path <endpoint>
    When method GET
    Then status 200
    And match response == '#array'
    And match each response contains { userId: '#number', email: '#string', roles: '#array' }
    Examples:
      | endpoint     |
      | 'users'      |
      | 'users/'     |
      | 'users/list' |

  Scenario: ADMIN can look up its own profile by ID and email
    Given path 'users', admin.profile.userId
    When method GET
    Then status 200
    And match response.email == admin.profile.email
    Given path 'users', 'email', admin.profile.email
    And header Authorization = admin.authorization
    When method GET
    Then status 200
    And match response.userId == admin.profile.userId

  Scenario: Missing user returns 404
    Given path 'users', 'email', 'missing-' + java.util.UUID.randomUUID() + '@example.com'
    When method GET
    Then status 404

  Scenario: PUT without either query or body ID returns 400
    Given path 'users'
    And request { firstName: 'No identifier' }
    When method PUT
    Then status 400

  @security
  Scenario Outline: Even ADMIN cannot retrieve raw provider keys
    Given path 'keys', '<operation>'
    When method GET
    Then status 403
    Examples:
      | operation       |
      | getMoralisApi   |
      | getNasaApi      |
      | getGoogleApi    |
      | getFirebaseApi  |
      | getNytApi       |
      | getAnthropicApi |
      | getGeminiApi    |
      | getOpenAIApi    |
