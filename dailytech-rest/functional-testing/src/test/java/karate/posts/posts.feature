@posts @smoke
Feature: Post reads use discovered records, not seeded IDs
  Scenario: Read an existing post and its category filter
    Given url apiBaseUrl
    And path 'posts'
    And params { pageNo: 0, pageSize: 1, sortBy: 'id', sortDir: 'asc' }
    When method GET
    * assert responseStatus == 200 || responseStatus == 204
    * if (responseStatus == 204) karate.abort()
    * def first = response.content[0]
    Given path 'posts', first.id
    When method GET
    Then status 200
    And match response.id == first.id
    * if (!first.categoryId) karate.abort()
    Given path 'posts', 'category', first.categoryId
    When method GET
    Then status 200
    And match response == '#array'
    And match response contains deep { id: '#(first.id)' }
