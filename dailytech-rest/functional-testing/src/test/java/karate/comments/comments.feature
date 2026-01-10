Feature: Posts API karate test script

  Background:
    * url baseUrl + '/api/'
    * def token = jwtToken
  @getCycle
  @Order(1)
  Scenario: get all comments and then get the first comment by id
    Given path 'posts'
    When method get
    Then status 200

    * def firstPostId = response.content[0].id
    * def firstCommentIdOfFirstPost = response.content[0].comments[0].id
    Given path 'posts/' + firstPostId + '/comments/' + firstCommentIdOfFirstPost

    When method get
    Then status 200
    * json resp = response
    * match resp contains {   body: '#string',   name: '#string', email: '#string', id: '#number' }

  @postCycle
  @Order(2)
  Scenario: create a comment and then get it by id
    * def firstPostId = 20
    * def comment =
      """  {
        "body": "body#3", "name": "Commenter#3", "email": "anonymous#3@gmail.com"}
      """
    Given path 'posts/' + firstPostId + '/comments'

    And request comment
    And header Authorization = 'Bearer ' + token
    When method POST
    Then status 201

    * def nextCommentId = response.id
    * def commentNext = {  "body": "body#3edit",  "name": "Commenter#3-edit",  "email": "anonymous#3-edited@gmail.com"}

    Given path 'posts/' + firstPostId + '/comments/' + nextCommentId
    And request commentNext
    And header Authorization = 'Bearer ' + token
    When method PUT
    Then status 200
  