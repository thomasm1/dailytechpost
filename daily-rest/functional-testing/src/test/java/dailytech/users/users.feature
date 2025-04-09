Feature: Users API karate test script 

  Background:
    Given url 'http://3.215.230.246:8888/'

  Scenario: get all users and then get the first user by id
    Given path 'api/users'
    When method get
    Then status 200

    Given def firstUser = response[0]

    Given path 'api/users', firstUser.userId
    When method get
    Then status 200

  Scenario: update a user and then get it by id
    * def user = firstUser

#      """
#        {
#        "email": "t.maestas@gmail.com",
#        "username": "t.maestas@gmail.com",
#        "lastName": "maestas",
#        "firstName": "thomas1",
#        "organizationCode": "ORG001",
#        "dashboardCode": "DASH001",
#        "cusUrl": "https://example.com/user1",
#        "userType": 1,
#        "contactType": 1,
#        "isActive": 1,
#        "roles": [
#            {
#                "id": 1,
#                "name": "ROLE_ADMIN"
#            }
#        ],
#        "id": null,
#        "password": "admin@example.com"
#    }
#      """

    Given url 'http://3.215.230.246:8888'
    And def token =  'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0dEBnbWFpbC5jb20iLCJpYXQiOjE3NDEyNzcyMjcsImV4cCI6MTc0MTg4MjAyN30.PTCjg9RTEew23yr49hXdkK3KIQGWcxFTtxtuqEG3ZKPtM3g69-1YMkByOHQnJeJU'
      #call read('classpath:auth.feature') { username: '   ', password: '    ' }
    And path 'api/users'
    And header Authorization = 'Bearer ' + token
    And request firstUser
    When method put
    Then status 201

    * def id = response.id
    * print 'created id is: ', id

    # Given path id
    # When method get
    # Then status 200
    # And match response contains user
  