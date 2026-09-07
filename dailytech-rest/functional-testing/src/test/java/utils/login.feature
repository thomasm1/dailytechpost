@ignore
Feature: Login and return JWT auth data -- CREATE TOKEN

  Scenario: Login with configured test user
    * configure report = { showLog: false, showAllSteps: false }
    * configure headers = jsonHeaders
    # The full USER config includes both identities; the ADMIN call passes only its own pair.
    * def loginEmail = __arg.userEmail ? __arg.userEmail : __arg.adminEmail
    * def loginPassword = __arg.userEmail ? __arg.userPassword : __arg.adminPassword
    * if (!loginEmail || !loginPassword) karate.fail('Login requires an email and password for the requested identity')
    Given url apiBaseUrl
    And path 'users', 'auth', 'login'
    And headers jsonHeaders
    And request
      """
      {
        "usernameOrEmail": "#(loginEmail)",
        "password": "#(loginPassword)"
      }
      """
    When method post
    Then status 200
    And match response.accessToken == '#string'

    * def accessToken = response.accessToken
    * def tokenType = response.tokenType ? response.tokenType : 'Bearer'
    * def authorization = tokenType + ' ' + accessToken
