@ignore
Feature: Thorough Testing of Spring Data REST APIs

  # Legacy Spring Data REST coverage is preserved as historical reference.
  # Current business-rule tests use the explicit /api/users controller endpoints.

  Background: background
    * url baseUrl
    * def id = 10

  Scenario: Get All Users
    Given path '/api/rest/users'
    When method get
    Then status 200
    * def users = response
    * match users._embedded.users != null
    * match users.page.size == '#number'
    * match users.page.totalPages == '#number'
    * match users.page.number == '#number'
    * print users
    * print id

  # Test - Retrieve Single User by ID (GET)
  Scenario: Get All Users
  Given path '/api/rest/users/' + id
    When method get
    Then status 200
    * def user = response
    * match user.email == '#string'
    * match user._links.self.href == baseUrl + '/api/rest/users/' + id
    * print user

  # Test - Create New User (POST)
  Scenario: Create New User
    Given path '/api/rest/users'
    And request
  """
  {
  "password": "newpassword",
  "firstName": "New",
  "lastName": "User",
  "userType": 1,
  "email": "newuser@gmail.com",
  "isActive": 1
  }
  """
    When method POST
    Then status 401
#    * def newUser = response.data
#    * match newUser.email == 'newuser@gmail.com'
#    * print newUser

  # Test - Update Existing User (PUT)

    * path '/api/rest/users'
    And request
    """
    {
    "userId": id,
  "firstName": "Updated",
  "lastName": "User"
  }
    """
    When method PUT
    Then status 401
#    * def updatedUser = response
#    * match updatedUser.firstName == 'Updated'
#    * match updatedUser.lastName == 'User'
#    * print updatedUser
#    * id =   newUser.userId


#    * path 'api/rest/users/' + id
#    When method delete
#    Then status 204
#    * print 'User deleted successfully'

  # Test - Verify User Deletion (GET)

#    * path 'api/rest/users/' + id
#    When method get
#    Then status 404
#    * print 'User not found, deletion verified'

  # Test - Retrieve User Addresses
    * path '/api/rest/users/'+ id + '/addresses'
    When method GET
    Then status 200
    * def addresses = response
    * match addresses._embedded.addresses != null
    * print addresses

  # Test - Retrieve User Roles
    * path '/api/rest/users/'+ id + '/roles'
    When method GET
    Then status 200
    * def roles = response
    * match roles._embedded.roles != null
    * print roles
