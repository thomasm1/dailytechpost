Feature: Users API karate test script 

  Background:
    * url baseUrl + '/api/'
    * def token = jwtToken
    * def token = jwtTokenAdmin

  @getCycle
  @Order(1)
  Scenario: get all users and then get the first user by id
    Given path 'users'
    When method GET
    Then status 200

    * def first = response[1]

    Given path 'users', first.userId
    When method GET
    Then status 200
    And match response ==
      """
      {"userId":'#number',
        "username":'#string',
        "password":'#string',
        "lastName":'##string',
        "firstName":'##string',
        "userType":'##number',
        "email":'##string',
        "cusUrl":'##string',
        "isActive":'#number',
        "contactType":'##number',
        "organizationCode":'##string',
        "dashboardCode":'##string',
        "id":'##present',
        "roles": '#array'
      }
      """

  @postCycle
  @Order(2)
  Scenario Outline: create a user and then get it by id

    * def rando = Math.floor(Math.random() * 1031)
    * def usernameEmail = "user" + rando + "@gmail.com"
    * print "_______________________ID____:" + usernameEmail
    * def user =
      """
      {
        "username": '#(usernameEmail)',
        "lastName": "Wonderland",
        "firstName": "Alice",
        "organizationCode": "ORG001",
        "dashboardCode": "DASH-A",
        "cusUrl": "https://example.com/alice",
        "userType": 1,
        "email": '#(usernameEmail)',
        "contactType": 101,
        "isActive": 1,
        "roles": [
          {
            "id": 1,
            "name": "ROLE_ADMIN"
          }
        ],
        "id": null
      }
      """
    #call read('classpath:auth.feature') { username: '   ', password: '    ' }

    # 1 CREATE
    Given path 'users'
    And header Authorization = 'Bearer ' + token
    And request user
    When method POST
    Then status 201

    * json resp = response
    * def localId = resp.userId

    * print 'created id is: ', localId
    #2 READ
    * path 'users/' + localId
    * print 'user is: ',localId
    When method GET
    Then status 200
    #    And match response contains user
    #3 PUT
    Given path 'users'
    * print 'user is: ', localId
    * user['userId'] = localId
    And header Authorization = 'Bearer ' + token
    And param userId = localId
    And request user
    When method PUT
    Then status 200
    #    And match response contains user
    #4 DELETE
    Given path 'users/' + localId
    * print 'user is: ', localId
    When method DELETE
    And header Authorization = 'Bearer ' + token
#    Then status 200
    Then status 401
                  # because delete is not allowed for this user role
    Examples:
      | _path  | _meth | _stat | newid      | _meth2 | _stat2 |
      | users/ | PUT   | 200   | '#(newid)' | GET    | 200    |
  #      | users | PATCH  | 201   |    | GET    |  200   |

  #      | users | POST   | 201   |       | GET    |  200   |

  ############################1
  @Order(3)
  @ignore
  Scenario Outline: Update a user, get it by id, verify changes
    * def rando = Math.floor(Math.random() * 100)
    * def usernameEmail = "user"+rando+"@gmail.com"
    * print "_______________________ID____" + usernameEmail
    * def user =
      """
      {
        "username": '#(usernameEmail)',
        "lastName": "Wonderland",
        "firstName": "Alice",
        "organizationCode": "ORG001",
        "dashboardCode": "DASH-A",
        "cusUrl": "https://example.com/alice",
        "userType": 1,
        "email": '#(usernameEmail)',
        "contactType": 101,
        "isActive": 1,
        "roles": [
          {
            "id": 1,
            "name": "ROLE_ADMIN"
          }
        ],
        "id": 4
      }
      """