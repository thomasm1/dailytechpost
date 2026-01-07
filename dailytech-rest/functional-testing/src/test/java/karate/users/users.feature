Feature: Users API karate test script 

  Background:
    * url baseUrl + '/api/'

  @Order(1)
  Scenario: get all users and then get the first user by id
    Given path 'users'
    When method GET
    Then status 200

    * def first = response[1]

    Given path 'users', first.userId
    When method GET
    Then status 200

  @Order(2)
  Scenario Outline: update a user and then get it by id

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

    #    * def token = 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0dEBnbWFpbC5jb20iLCJpYXQiOjE3NDEyNzcyMjcsImV4cCI6MTc0MTg4MjAyN30.PTCjg9RTEew23yr49hXdkK3KIQGWcxFTtxtuqEG3ZKPtM3g69-1YMkByOHQnJeJU'
    #call read('classpath:auth.feature') { username: '   ', password: '    ' }

    # 1 CREATE
    Given path 'users'
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
    Given path 'users' + "&userId=" + localId
    * print 'user is: ', localId
    * user['userId'] = localId
    And request user
    When method PUT
    Then status 200
    #    And match response contains user
    #4 DELETE
    Given path 'users/' + localId
    * print 'user is: ', localId
    When method DELETE
    Then status 200

    Examples:
      | _path  | _meth | _stat | newid      | _meth2 | _stat2 |
      | users/ | PUT   | 200   | '#(newid)' | GET    | 200    |
  #      | users | PATCH  | 201   |    | GET    |  200   |

  #      | users | POST   | 201   |       | GET    |  200   |

