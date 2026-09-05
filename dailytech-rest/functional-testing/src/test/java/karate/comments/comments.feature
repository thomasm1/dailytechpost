@comments @smoke
Feature: Comment reads do not assume every post has comments
  Scenario: Read comments for a discovered post
    Given url apiBaseUrl
    And path 'posts'
    And params { pageNo: 0, pageSize: 1 }
    When method GET
    * assert responseStatus == 200 || responseStatus == 204
    * if (responseStatus == 204) karate.abort()
    * def postId = response.content[0].id
    Given path 'posts', postId, 'comments'
    When method GET
    Then status 200
    And match response == '#array'
    * if (response.length == 0) karate.abort()
    * def first = response[0]
    Given path 'posts', postId, 'comments', first.id
    When method GET
    Then status 200
    And match response contains { id: '#(first.id)', body: '#string', name: '#string', email: '#string' }
