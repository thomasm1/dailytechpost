@smoke @security
Feature: Anonymous and invalid-token access with production security enabled (not h2)
  Background:
    * url apiBaseUrl

  Scenario Outline: Anonymous callers cannot access protected GET <endpoint>
    Given path <endpoint>
    When method GET
    Then status 401
    Examples:
      | endpoint                        |
      | 'users'                         |
      | 'users/list'                    |
      | 'users/0'                       |
      | 'users/email/nobody@example.com' |
      | 'users/me'                      |
      | 'admin/firebase-users'          |
      | 'links/me'                      |
      | 'links/me/category/0'           |

  Scenario: Malformed bearer token cannot access the current user
    Given path 'users', 'me'
    And header Authorization = 'Bearer definitely-not-a-jwt'
    When method GET
    Then status 401

  Scenario Outline: Anonymous writes are denied before resource lookup
    Given path <endpoint>
    And request {}
    When method <verb>
    Then status 401
    Examples:
      | endpoint             | verb   |
      | 'users'              | POST   |
      | 'users'              | PUT    |
      | 'users'     | PATCH  |
      | 'users/0'            | DELETE |
      | 'posts'              | POST   |
      | 'posts'              | PUT    |
      | 'posts/0'            | DELETE |
      | 'categories'         | POST   |
      | 'categories'         | PUT    |
      | 'categories/0'       | DELETE |
      | 'links'              | POST   |
      | 'links'              | PUT    |
      | 'links/0'            | DELETE |
      | 'posts/0/comments'   | POST   |
      | 'posts/0/comments/0' | PUT    |
      | 'posts/0/comments/0' | DELETE |
      | 'weblinks'           | POST   |
      | 'weblinks'           | PUT    |
      | 'weblinks/0'         | DELETE |

  Scenario Outline: Login aliases reject unknown credentials
    Given path 'users', 'auth', '<alias>'
    And request { usernameOrEmail: '#("missing-" + java.util.UUID.randomUUID() + "@example.com")', password: 'not-a-real-password' }
    When method POST
    Then status 401
    Examples:
      | alias  |
      | login  |
      | signin |

  Scenario: CORS preflight permits the configured frontend origin
    Given path 'users', 'me'
    And header Origin = corsOrigin
    And header Access-Control-Request-Method = 'GET'
    And header Access-Control-Request-Headers = 'authorization'
    When method OPTIONS
    Then status 200
    And match header Access-Control-Allow-Origin == corsOrigin
    And match header Access-Control-Allow-Credentials == 'true'

  Scenario Outline: Raw provider keys are no longer public
    Given path 'keys', '<operation>'
    When method GET
    Then status 401
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
