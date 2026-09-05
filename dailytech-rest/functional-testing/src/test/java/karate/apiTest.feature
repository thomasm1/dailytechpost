@smoke
Feature: Public collection endpoints without seeded IDs or authentication
  Background:
    * url apiBaseUrl

  Scenario Outline: Public <endpoint> returns an array
    Given path <endpoint>
    When method GET
    Then status 200
    And match response == '#array'
    Examples:
      | endpoint             |
      | 'categories'         |
      | 'categories/root'    |
      | 'categories/tree'    |
      | 'links'              |
      | 'weblinks'           |

  Scenario: Posts have a pagination envelope, or 204 when empty
    Given path 'posts'
    And params { pageNo: 0, pageSize: 5, sortBy: 'id', sortDir: 'asc' }
    When method GET
    * assert responseStatus == 200 || responseStatus == 204
    * if (responseStatus == 204) karate.abort()
    And match response contains { content: '#array', pageNo: 0, pageSize: 5, totalElements: '#number', totalPages: '#number', last: '#boolean' }
    And assert response.content.length > 0 && response.content.length <= 5
