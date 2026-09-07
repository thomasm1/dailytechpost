Feature: Users API
#  SAFE USERS     mvn test -Dkarate.env=local -Dkarate.options="--tags @users --tags ~@destructive"
  # CRUD USERS    mvn test -Dkarate.env=local -Dkarate.options="--tags @users"
  Background:
    * url apiBaseUrl
    * configure headers = authHeaders
    * def user = callonce read('classpath:utils/auth.feature') { role: 'user' }
    * def admin = call read('classpath:utils/auth.feature') { role: 'admin' }
    * def fixtures = []
    * configure afterScenario = read('classpath:utils/cleanup.js')
    * if (karate.tags.indexOf('destructive') >= 0 && !allowWrites) karate.fail('Write tests require -DallowWrites=true')
    # UserMapper does not load posts into user profiles; the collection can be null or omitted.
    * def userSchema =
      """
      {
        userId: '#number',
        lastName: '##string',
        firstName: '##string',
        organizationCode: '##string',
        dashboardCode: '##string',
        cusUrl: '##string',
        userType: '##number',
        email: '#string',
        contactType: '##number',
        isActive: '##number',
        userPlan: '#string',
        roles: '#array',
        authProvider: '##string',
        authSubject: '##string',
        id: '##string',
        posts: '##array'
      }
      """

  @users
  @smoke
  Scenario: Get current authenticated user
    Given path 'users', 'me'
    When method get
    Then status 200
    And match response == userSchema
    And match response.email == userEmail

  @users
  @smoke
  @admin
  Scenario: Get all users
    * configure headers = adminAuthHeaders
    Given path 'users'
    When method get
    Then status 200
    And match response == '#array'
    And match each response == userSchema

  @users
  @security
  Scenario: Non-admin user cannot get all users
    Given path 'users'
    When method get
    Then status 403

  @users
  @smoke
  @admin
  Scenario: Get all users through list alias
    * configure headers = adminAuthHeaders
    Given path 'users', 'list'
    When method get
    Then status 200
    And match response == '#array'
    And match each response == userSchema

  @users
  @smoke
  @admin
  Scenario: Admin gets a user by email
    * configure headers = adminAuthHeaders
    Given path 'users', 'email', userEmail
    When method get
    Then status 200
    And match response == userSchema
    And match response.email == userEmail

  @users
  @profile
  @destructive
  Scenario: Patch current user profile
    * def fixture = call read('classpath:utils/create-user.feature')
    * configure headers = { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: '#(fixture.authorization)' }
    * def unique = java.util.UUID.randomUUID() + ''
    * def newFirstName = 'Karate-' + unique.substring(0, 8)

    Given path 'users', 'me', 'profile'
    And request
      """
      {
        "firstName": "#(newFirstName)",
        "lastName": "Functional",
        "organizationCode": "KARATE",
        "contactType": 101,
        "cusUrl": "https://cryptomaven.xyz/karate"
      }
      """
    When method patch
    Then status 200
    And match response == userSchema
    And match response.firstName == newFirstName
    And match response.lastName == 'Functional'
    And match response.organizationCode == 'KARATE'
    And match response.contactType == 101
    And match response.cusUrl == 'https://cryptomaven.xyz/karate'
    And match response.userId == fixture.userId
    And match response.email == fixture.userEmail
    And match response.roles contains { id: '#number', name: 'ROLE_USER' }

    Given path 'users', 'me'
    When method get
    Then status 200
    And match response.firstName == newFirstName

  @users
  @profile
  @admin
  @destructive
  Scenario: Admin patches a user's profile by email
    * def fixture = call read('classpath:utils/create-user.feature')
    * configure headers = adminAuthHeaders
    * def unique = java.util.UUID.randomUUID() + ''
    * def newFirstName = 'AdminKarate-' + unique.substring(0, 8)

    Given path 'users', 'email', fixture.userEmail, 'profile'
    And request
      """
      {
        "firstName": "#(newFirstName)",
        "lastName": "AdminFunctional",
        "organizationCode": "ADMIN-KARATE",
        "contactType": 202,
        "cusUrl": "https://cryptomaven.xyz/admin-karate"
      }
      """
    When method patch
    Then status 200
    And match response == userSchema
    And match response.email == fixture.userEmail
    And match response.firstName == newFirstName

  @users
  @crud
  @destructive
  @admin
  Scenario: Create, read, update, and delete a user
    * configure headers = adminAuthHeaders
    * def unique = java.util.UUID.randomUUID() + ''
    * def email = 'karate-user-' + unique + '@example.com'

    * def createUser =
      """
      {
        "email": "#(email)",
        "password": "password",
        "firstName": "Karate",
        "lastName": "Created",
        "organizationCode": "ORG001",
        "dashboardCode": "DASH-A",
        "cusUrl": "https://example.com/karate",
        "userType": 1,
        "contactType": 101,
        "isActive": 1
      }
      """

    Given path 'users'
    And request createUser
    When method post
    Then status 201
    * def createdUserId = response.userId
    * eval fixtures.push('users/' + createdUserId)
    And match response == userSchema
    And match response.email == email


    Given path 'users', createdUserId
    When method get
    Then status 200
    And match response == userSchema
    And match response.userId == createdUserId
    And match response.email == email

    * def updateUser =
      """
      {
        "userId": "#(createdUserId)",
        "email": "#(email)",
        "firstName": "Karate",
        "lastName": "Updated",
        "organizationCode": "ORG002",
        "dashboardCode": "DASH-B",
        "cusUrl": "https://example.com/karate-updated",
        "userType": 1,
        "contactType": 202,
        "isActive": 1
      }
      """

    Given path 'users', 'email', email
    And request updateUser
    When method put
    Then status 200
    And match response == userSchema
    And match response.userId == createdUserId
    And match response.lastName == 'Updated'
    And match response.organizationCode == 'ORG002'
    And match response.contactType == 202

    Given path 'users', 'delete', createdUserId
    When method delete
    Then status 200
    * json deleted = response
    And match deleted == true
    * eval fixtures.pop()

  @users
  @negative
  @admin
  @destructive
  Scenario: ADMIN creation requires an explicit password
    * configure headers = adminAuthHeaders
    Given path 'users'
    And request { email: '#("karate-invalid-" + java.util.UUID.randomUUID() + "@example.com")' }
    When method post
    * if (responseStatus == 201 && response.userId) fixtures.push('users/' + response.userId)
    Then status 400

  @users
  @negative
  @admin
  Scenario: Unknown user id returns not found for admin
    * configure headers = adminAuthHeaders
    Given path 'users', 999999999
    When method get
    Then status 404

  @users
  @security
  Scenario: Non-admin user cannot read another user through admin email route
    Given path 'users', 'email', adminEmail
    When method get
    Then status 403


  @security
  Scenario Outline: Even ADMIN cannot retrieve raw provider keys
    * configure headers = adminAuthHeaders
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
