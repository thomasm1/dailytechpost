@security @authenticated
Feature: Ordinary USER permissions are distinct from ADMIN permissions
  Background:
    * url apiBaseUrl
    * def user = callonce read('classpath:helpers/auth.feature') { role: 'user' }
    * header Authorization = user.authorization

  Scenario: USER current profile is the authenticated identity
    Given path 'users', 'me'
    When method GET
    Then status 200
    And match response.userId == user.profile.userId
    And match response.email == user.profile.email

  Scenario Outline: USER cannot use ADMIN reads, even for its own ID
    Given path <endpoint>
    When method GET
    Then status 403
    Examples:
      | endpoint                                |
      | 'users'                                 |
      | 'users/list'                            |
      | 'users/' + user.profile.userId           |
      | 'users/email/' + user.profile.email      |
      | 'admin/firebase-users'                  |

  Scenario Outline: USER cannot administer users or delete resources
    Given path <endpoint>
    And request {}
    When method <verb>
    Then status 403
    Examples:
      | endpoint             | verb   |
      | 'users'              | POST   |
      | 'users'              | PUT    |
      | 'users'              | PATCH  |
      | 'users/0'            | DELETE |
      | 'posts/0'            | DELETE |
      | 'categories/0'       | DELETE |
      | 'links/0'            | DELETE |
      | 'posts/0/comments/0' | DELETE |
      | 'weblinks/0'         | DELETE |

  Scenario Outline: USER can list its own links
    Given path <endpoint>
    When method GET
    Then status 200
    And match response == '#array'
    Examples:
      | endpoint              |
      | 'links/me'            |
      | 'links/me/category/0' |

  Scenario Outline: USER cannot retrieve retired provider keys
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
