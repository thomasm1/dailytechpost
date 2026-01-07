Feature: Posts API karate test script

  Background:
    * url baseUrl + '/'

  Scenario: get all comments and then get the first comment by id
    Given path 'api/comments'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'api/posts' + first.id + '/comments
    When method get
    Then status 200

  Scenario: create a product and then get it by id
    * def comment =
      """  {
    "id": 99,
    "version": "null",
    "dateCreated": "null",
    "lastUpdated": "null",
    "author": "test",
      "post": {
      "id": 20,
      "version": "null",
      "dateCreated": "null",
      "lastUpdated": "null",
      "title": "test",
      "content": "test"
      },
    "content": "test",
    "rating": 5,
        "status": {
        "id": 1,
        "version": 0,
        "dateCreated": null,
        "lastUpdated": null,
        "name": null
        }
    }
      """

    Given path 'api/posts/20/comments'
    And request comment
    When method POST
    Then status 201

    * def id = response.id
    * print 'created id is: ', id

    Given path id
    When method GET
    Then status 200
    And match response contains content
  